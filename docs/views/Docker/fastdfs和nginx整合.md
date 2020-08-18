---
title: fastdfs 和 nginx 整合
date: 2020 08-18
tags:
  - Docker
categories:
  - Docker
---

## fastdfs 安装

[fastdfs安装手册](./创建Ubuntu版本fastdfsDocker镜像.md)，本文也是接着[fastdfs安装手册](./创建Ubuntu版本fastdfsDocker镜像.md)，往后开始写的

## fastdfs 和 nginx 整合

在每个tracker上安装nginx，的主要目的是做负载均衡及实现高可用。如果只有一台tracker可以不配置nginx。
 一个tracker对应多个storage，通过nginx对storage负载均衡；

1. 进入到 `/fileservice/fast` 目录下,解压 `fastdfs-nginx-module-1.20.tar.gz` 文件
```bash
 cd /fileservice/fast
tar -zxvf  fastdfs-nginx-module-1.20.tar.gz
cd fastdfs-nginx-module-1.20/src
vim config
```


```shell
if test -n "${ngx_module_link}"; then
    ngx_module_type=HTTP
    ngx_module_name=$ngx_addon_name
    ngx_module_incs="/usr/include/fastdfs /usr/include/fastcommon/" ##修改这一行
    ngx_module_libs="-lfastcommon -lfdfsclient"
    ngx_module_srcs="$ngx_addon_dir/ngx_http_fastdfs_module.c"
    ngx_module_deps=
    CFLAGS="$CFLAGS -D_FILE_OFFSET_BITS=64 -DFDFS_OUTPUT_CHUNK_SIZE='256*1024' -DFDFS_MOD_CONF_FILENAME='\"/etc/fdfs/mod_fastdfs.conf\"'"
    . auto/module
else
    HTTP_MODULES="$HTTP_MODULES ngx_http_fastdfs_module"
    NGX_ADDON_SRCS="$NGX_ADDON_SRCS $ngx_addon_dir/ngx_http_fastdfs_module.c"
    CORE_INCS="$CORE_INCS /usr/include/fastdfs /usr/include/fastcommon/" ##修改这一行
    CORE_LIBS="$CORE_LIBS -lfastcommon -lfdfsclient"
    CFLAGS="$CFLAGS -D_FILE_OFFSET_BITS=64 -DFDFS_OUTPUT_CHUNK_SIZE='256*1024' -DFDFS_MOD_CONF_FILENAME='\"/etc/fdfs/mod_fastdfs.conf\"'"
fi

```
然后执行下面的命令，将 `fastdfs-nginx-module/src` 下的 `mod_fastdfs.conf` 拷贝至 `/etc/fdfs/` 下,并修改 `/etc/fdfs/mod_fastdfs.conf` 的内容:

```bash
vi /etc/fdfs/mod_fastdfs.conf

```
修改配置
1. `tracker_server=192.168.1.166:22122 ` ,`#tracker_server=192.168.172.20:22122 #(多个tracker配置多行)`
2. `url_have_group_name=true #url中包含group名称`
3. `store_path0=/home/fdfs_storage #指定文件存储路径（上面配置的store路径）`

2. 进入之前解压的 `fastdfs` 目录下，把 `http.conf`、`mime.conf` 移动至 `/etc/fdfs`,我这的目录是 `/fileservice/fast/fastdfs-5.11/conf`
执行命令
```bash
cp http.conf mime.types /etc/fdfs/
```

3. `nginx` 安装
```bash
cd /fileservice/fast/
tar -zxvf nginx-1.15.2.tar.gz
cd nginx-1.15.2/
./configure --prefix=/opt/nginx --sbin-path=/usr/bin/nginx --add-module=/fileservice/fast/fastdfs-nginx-module-1.20/src
make && make install
cd /opt/nginx/conf
vim nginx.conf
```
修改成下面的内容

```nginx

server {
        listen       9999;
        server_name  192.168.1.166;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location ~/group([0-9]) {
            #root   html;
            #index  index.html index.htm;
            ngx_fastdfs_module;
        }
}

```

然后启动 `nginx`

```bash
cd /usr/bin/
./nginx

```

在浏览器访问 `http://192.168.1.166:9999/M00/00/00/wKgBpl87fEyASI6JAABDf4CvINU303.jpg`,看到图片证明成功。