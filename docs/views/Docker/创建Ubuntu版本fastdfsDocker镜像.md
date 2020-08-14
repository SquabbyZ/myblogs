---
title: 创建Ubuntu版本fastdfsDocker镜像
date: 2020 08-14
tags:
  - Docker
categories:
  - Docker
---

## 项目需求
   因为作者使用的是长城飞腾2000 服务器，系统使用的是 天津麒麟 (国产 arm64 Linux 系统)，而且项目是局域网开发，在 [docker 官方找到的 fastdfs docker](hub.docker.com)库中，前人做好的镜像根本就没有标注 docker 镜像的内核是什么版本，直接拿下来使用，发现生成 docker 容器的时候 (也就是 `docker run ...`) 之后会报错 ` standard_init_linux.go:190: exec user process caused "exec format err`,所以自己在本地 windows 系统上开始创建一个 `fastdfs` docker 镜像。

## 整体思路

起初我是在 [docker 官方的库](hub.docker.com) 中找了个支持 `arm64` 内核的 centos 镜像，而且也制作好了 fastdfs 的 docker 镜像，但是在服务器上创建 docker 容器的时候还是会报错 `standard_init_linux.go:190: exec user process caused "exec format err` ，就算是使用命令 `docker start xxx` 强启动容器，还是无法启动，所以在制作一个 `Ubuntu` 内核是 arm64 版本的 `fastdfs` docker 镜像，以此记录下整个制作过程，也算是，实操了一把自己动手制作 `docker image`, Let's do it.


## 准备

因为我们下载的 `Ubuntu` docker 镜像是最小的版本，里面除了最最基本的命令外，其他的命令和环境都没有，比如没有 `gcc、gc++ 、make` 等等，让我们先开始装吧
1. 安装 `gcc gc++ make`
我们先执行 `apt-get update`,让系统更新下，遇到 `Y/n` 的时候输入 Y 就行，因为是在问你是否下载包，下载就可以了。
然后在执行 `apt install build-essential`,静静的安装就好了，安装完输入 ` gcc --version`,可以看到版本信息就是安装好了
2. 安装 `libevent`
执行命令 `apt-get install libevent-dev`
3. 安装 `wget`,方便后面下载安装依赖 `apt-get install wget`
4. 安装 `perl`
```bash
    cd /fileservice/fast
    wget https://www.cpan.org/src/5.0/perl-5.28.2.tar.gz
    tar -xzf perl-5.28.2.tar.gz
    cd perl-5.28.2
    ./Configure -des -Dprefix=$HOME/localperl
    make
    make test
    make install

```
5. 安装nginx时依赖库zlib，pcre，openssl
```bash
    apt-get install openssl libssl-dev #依赖包openssl安装
    apt-get install libpcre3 libpcre3-dev #依赖包pcre安装
    apt-get install zlib1g-dev #依赖包zlib安装
```
6. 安装 vim 编译器 `apt-get install vim`

## 安装步骤

1. 在根目录下创建 `/fileservice/fast`
```bash
mkdir -p /fileservice/fast
cd /fileservice/fast
```
2.  把 [fastdfs-5.11.tar.gz](http://39.106.197.44/static/fastdfs-5.11.tar.gz) 、[fastdfs-nginx-module-1.20.tar.gz](http://39.106.197.44/static/fastdfs-nginx-module-1.20.tar.gz)、 [libfastcommon-1.0.35.tar.gz](http://39.106.197.44/static/libfastcommon-1.0.35.tar.gz)、 [nginx-1.15.2.tar.gz](http://39.106.197.44/static/nginx-1.15.2.tar.gz)这四个文件下载下来，传入进去,<span style='color:red;'></span>在上传的文件的目录下执行下面的命令</span>
```bash
        docker cp .\fastdfs-5.11.tar.gz test100:/fileservice/fast
        docker cp .\fastdfs-nginx-module-1.20.tar.gz test100:/fileservice/fast
        docker cp .\libfastcommon-1.0.35.tar.gz test100:/fileservice/fast
        docker cp .\nginx-1.15.2.tar.gz test100:/fileservice/fast
```
3. 安装libfastcommon
进入fast目录：
```bash
cd /fileservice/fast
tar -zxvf libfastcommon-1.0.35.tar.gz
cd libfastcommon-1.0.35
./make.sh
./make.sh install
```
1. 安装 fastdfs
先安装相关依赖库 `perl`、`pcre`、`pcre-devel`、`zlib`、`zlib-devel`、`openssl`、`openssl-devel`

5. 安装fastdfs
进入fast目录：
```bash
cd /fileservice/fast
tar -zxvf fastdfs-5.11.tar.gz
cd fastdfs-5.11
./make.sh
./make.sh install
```

6. 查看tracker和storage的可执行脚本(后面有用)
```bash
ll /etc/init.d/ | grep fdfs
```
7. 准备配置文件  默认在/etc/fdfs/下面

```bash
cd /etc/fdfs/
```
8. 先把配置文件名中的sample去了。[可以复制一份]
```bash
cp client.conf.sample client.conf
cp storage.conf.sample storage.conf
cp storage_ids.conf.sample storage_ids.conf
cp tracker.conf.sample tracker.conf
```
9. 然后修改tracker的存放数据和日志的目录。
```bash
mkdir -p /home/zhu/fastdfs/tracker

```
10. 配置和启动tracker
切换目录到： /etc/fdfs/ 目录下,修改tracker.conf,把 `base_path=/home/yuqing/fastdfs 改为: base_path=/home/zhu/fastdfs/tracker`

```bash
cd  /etc/fdfs/
vim tracker.conf
service fdfs_trackerd  start #启动tracker
```
会在 `/home/zhu/fastdfs/tracker` 目录下生成 `data` 和 `logs` 两个文件夹

11. 配置和启动storage
由于上面已经安装过FastDFS，这里只需要配置storage就好了，切换目录到： `/etc/fdfs/` 目录下,修改storage.conf ; vim storage.conf

```bash
cd /etc/fdfs/
vim storage.conf

```
```bash
将 `storage.conf` 文件中的
group_name=group1 #配置组名
base_path=/home/yuqing/fastdfs 改为: base_path=/home/zhu/fastdfs/storage
#store存放文件的位置(store_path)
store_path0=/home/yuqing/fastdfs 改为： store_path0=/home/zhu/fastdfs/storage
#如果有多个挂载磁盘则定义多个store_path，如下

#store_path1=.....

#store_path2=......

#配置tracker服务器:IP

tracker_server=0.0.0.0:22122  (因为我们是在docker 中， fastdfs 不允许使用 127.0.0.1)#如果有多个则配置多个tracker
```
12. 创建/home/zhu/fastdfs/storage 目录
```bash
mkdir -p /home/zhu/fastdfs/storage
service fdfs_storaged start #启动storage

```
13. 使用FastDFS自带工具测试
```bash
cd /etc/fdfs/
vim client.conf
```
修改基本路径和tracker_server如下 `base_path=/home/yuqing/fastdfs 改为: base_path=/home/zhu/fastdfs/storage`,`tracker_server=0.0.0.0:22122`

14. 向 `root` 目录下考入一个图片文件，然后执行
```bash

/usr/bin/fdfs_upload_file /etc/fdfs/client.conf /root/11.png

```
返回结果为 `group1/M00/00/00/fwAAAV82FKGAcmhBAABzjHEcGKw545.jpg`,则证明 fastdfs 安装启动成功