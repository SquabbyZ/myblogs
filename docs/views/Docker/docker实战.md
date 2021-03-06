---
title: Docker 实战
date: 2020 07-23
tags:
  - Docker
categories:
  - Docker
---


## 项目需求


  我们的项目要部署到客户的服务器的时候，需要离线安装 nginx elasticsearch 以及我们自己的项目等等。因为客户的服务器是完全物理隔绝外网的。我们这里以 nginx 为例子，来说明采用 Docker 的优势在哪里。

## Docker 的优势
首先部署 nginx 需要服务器有 gcc 和 gcc++ 两个编译工具才行，或者说即使有了这两个，在离线安装 nginx 的时候还需要 zlib 、 openssl 等依赖包，而且 openssl 的不同版本还会很容易影响其他软件的安装，而且抛出去这些不说，对于一个刚接触 Nginx 的人来说，在大多数只会修改配置，毕竟 windows 环境下安装 nginx 很简单，但是在 Linux 环境下安装，难度很大，这时候，我们可以使用 docker 版的 nginx ，只需导入 nginx 镜像，并且创建实例即可，而且我们启动 nginx 的时候不用进入到二进制启动文件的目录下去做启动停止，有人会反驳，我用 `ln -s xxx xxx`，软连接的命令也可以实现全局使用 nginx 启动停止重启等命令，我想说 docker 安装完之后就已经是全局的命令，减少操作步骤它不香么，嘻嘻(●'◡'●)？


## 实际操作

1. 我们在 [http://hub.docker.com](http://hub.docker.com) Docker 官方镜像网上，直接在页面的搜索框内输入 nginx 就会获取到以 nginx 为关键字的所有镜像的列表，我们选择 Logo 是官方图标的，
然后点击进去，找到页面左边偏上的位置有个 Tag 名称标签，点击一下，选择对应的版本进行 `docker pull XXX` 进行下载
2. 在我们要安装的服务器的命令终端内输入 `docker pull XXX`, 等待进度条全部走完之后，我们使用 `docker images` 来进行查看我们本地的所有镜像资源，可以找到我们之前前面操作的时候下载的 nginx 镜像。
3. 再普及下简单的命令 `docker ps -a `可以查看当前服务器上所有的创建的 docker  容器，无论是运行与否，`docker start 容器ID` 是启动容器，对应的 `docker stop 容器ID` 是停止运行容器 `docker restart 容器ID` 是重启容器 `docker attach 容器ID` 是进入到容器等 `docker run --name 自定义容器名称 镜像ID/镜像名称` 这个是创建并且运行容器的最简命令

## 下载完镜像之后，创建容器并且启动

我们下载完镜像之后，创建容器并且启动，还有把配置文件，和静态托管的文件的目录，这俩个映射到宿主机中，并且把 Docker Nginx 里的默认80 端口也映射到宿主机中，以便于我们能正常访问，只需执行下面的命令
```bash

docker run --name 自定义镜像名称 -p 服务器端口:80 -v /media/100T/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /media/100T/nginx/html:/usr/share/nginx/html --restart=always -d nginx（镜像名称或者ID）
```
我们来简单的解释下上面的命令:

1. `docker run --name 自定义容器名称 镜像名称/镜像ID` 是创建镜像容器的基本命令
2. `-p 宿主机端口:80` 默认的 docker Nginx 在它自己的环境中启动的端口是80，我们用这个命令可以把 dokcer 容器中启动的端口映射到宿主机的端口中，可以写多个用空格隔开比如 `-p 80:80 -p 81:81`
3. `-v /media/100T/nginx/conf/nginx.conf:/etc/nginx/nginx.conf` 这个命令可以理解为文件映射，正常我们需要 docker nginx 的配置进行修改修改的时候，我们还要使用 `docker attach 容器名称/容器ID` 进入到容器中，还要找到对应的文件所在，而且还必须要保证容器是运行的状态，否则无法进入，所以把他也映射到宿主机，同理静态发布的前端路径也可以这么做，虽然执行这个命令如果宿主机没有对应的路径的话，会自动创建，但是我建议你做好是先创建好你想映射的路径及文件，因为有可能会涉及到文件或者文件夹权限不够，又或者本来你想创建 `nginx.conf` 文件的，结果 docker 给你创建了个 `/nginx.conf` 路径，也可以写多个 `-v` 命令,空格隔开就好。
4. `-d` 的意思是镜像创建的容器，直接在创建完成之后后台启动
5. `--restart=always` 配置的意思——无论退出状态是如何，都重启容器，常用于做 docker 容器的宿主机的开机自启


## --restart 详解

Docker提供了restart policy机制，可以在容器退出或者Docker重启时控制容器能够自启动。这种Restart policy可以保证相关容器按照正确顺序启动。虽然也可以通过进程监控的方式(如systemd)来完成这种动作，但Docker还是建议尽量避免使用进程监控的方式来 "自启动" 容器。

|   配置项   |               描述                |
| :--------: | :-------------------------------: |
|     no     |      容器退出时，不重启容器       |
| on-failure | 只有在非0状态退出时才从新启动容器 |
|   always   |  无论退出状态是如何，都重启容器   |


如果创建时未指定 --restart=always ,可通过update 命令设置

```bash
docker update --restart=always 容器名称
```

还可以在使用on - failure策略时，指定Docker将尝试重新启动容器的最大次数。默认情况下，Docker将尝试永远重新启动容器。

```bash
sudo docker run --restart=on-failure:10 nginx
```
