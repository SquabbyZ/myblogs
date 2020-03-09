---
title: Docker命令
date: 2019-11-08
tags:
  - Docker
categories:
  - Docker
---

## 感谢

[java1234 官方的教学视频](https://www.bilibili.com/video/av71335007)

## Docker 基础命令

::: tip 基础命令

    1. 启动命令: systemctl start docker
    2. 停止命令: systemctl stop docker
    3. 重启命令: systemctl restart docker
    4. 开机启动: systemctl enable docker
    5. 查看概要: docker info
    6. 查看帮助文档: docker --help
    7. 查看版本: docker --version

:::

---

## Docker 镜像操作命令

::: tip Docker 镜像操作命令

    1. 列出本机所有镜像: docker images
    **敲击命令后,显示出的列表中每个字段的含义:**

|    参数    |                                             含义                                              |
| :--------: | :-------------------------------------------------------------------------------------------: |
| REPOSITORY |                                         镜像的仓库源                                          |
|    TAG     | 镜像的标签(版本)同一个仓库有多个 TAG 的镜像,多个版本:我们用 REPOSITORY:TAG 来定义不同的的镜像 |
|  IMAGE ID  |                                    镜像 ID,镜像的唯一标识                                     |
|   CREATE   |                                         镜像创建时间                                          |
|    SIZE    |                                           镜像大小                                            |

`docker images` 后面可配的参数 (options)
| options | details |
| :--------: | :--------------------: |
| -a | 显示所以镜像(包括中间层) |
| -q | 只显示镜像 ID |
| -qa | 可以组合 |
| --digests | 显示镜像的摘要信息 |
| --no-trunc | 显示完整的镜像信息 |

    2. 搜索镜像: docker search

|   options   |                          details                           |
| :---------: | :--------------------------------------------------------: |
| --no-trunc  |                     显示完整的镜像描述                     |
|     -s      | 列出收藏数不小于指定值的镜像( 后面直接跟数字,例如: -s 40 ) |
| --automated |            只列出 Docker Hub 自动构建类型的镜像            |

    3. 下载镜像: docker pull
    `docker pull 镜像名称 [TAG] `
    注意:如果`镜像名称`后面加上了 TAG 就是下载该镜像的指定版本,如果不加镜像就下载的是最新版本,
    **如果你想指定版本和最新版本两个都需要的话,要先下载指定版,然后再下载最新版本,因为 Docker 
    中镜像下载下来的不仅仅只是镜像的包,其中还包含很多它需要运行起来的依赖和对应环境,如果你先下
    载最新版的镜像的话,那么它的中间件就全是最新的版本,你再下载指定版本的话,下载完的指定版本和最新版是一样的**




    4. 删除镜像: docker rmi `镜像名称(镜像 ID 也是可以的,最好是使用镜像 ID 是唯一的)`

    1) 如果一个镜像在运行的过程中你使用删除镜像的命令的时候会报错,如下:
    `Error response from daemon: conflict: unableto remove repository reference "镜像名称" (must force) - container 容器ID is using its referenced image 镜像ID`

    **解决办法:** `docker rmi 镜像名称 -f` (强制删除)

    2) 同时删除多个镜像 `docker rmi 镜像名称:[TAG] 镜像名称:[TAG] 镜像名称:[TAG]`
    3) 删除全部镜像 `docker rmi -f $(docker images -qa)`

:::

---

## Docker 的基本命令

::: tip Docker 的基本命令

    1. 创建并且启动容器: docker run [OPTIONS] IMAGE [COMMAND] [AGE...]
        1) `--name="容器的新名字"`:为容器指定一个名称;
        2) `-i`: 以交互模式运行容器,通常与 `-t` 同时使用;
        3) `-t`: 为容器重新分配一个伪输入终端,通常与 `-i` 同时使用
    **常用: `docker run -it --name 别名 镜像ID` 来运行一个容器,取别名,交互模式运行,以及分配一个伪终端**
        4) `-d`: 后台运行容器,并且返回容器 ID。
        5) `-P`: 随机端口映射,容器内部端口随机映射到主机的端口
        6) `-p`: 指定端口映射,格式为:主机(宿主)端口:容器端口
    1. 列出容器 `docker ps [OPTIONS]`

|  OPTIONS   |                     说明                     |
| :--------: | :------------------------------------------: |
|     -a     |         显示所有的容器,包括未运行的          |
|     -f     |            根据条件过滤显示的内容            |
|  --format  |             指定返回值的模板文件             |
|     -l     |              显示最近创建的容器              |
|     -n     |           列出最近创建的 n 个容器            |
| -no--trunc | 不截断输出(这里最直观的就是容器 ID 显示完全) |
|     -q     |           静默模式,只显示容器编号            |
|     -s     |               显示总的文件大小               |

**常用命令**

```bash
 docker ps //查看正在运行的容器
 docker ps -a //查看所有容器
 docker ps -n 2//显示最近创建的2个容器
 docker ps -f status=exited 查看停止的容器

```

    3. 退出容器 `exit 或者 Ctrl + P + Q`

       1) `exit` 完全退出容器,容器不运行;
       2) `Ctrl + P + Q` 完全退出容器,容器仍然在运行




    4. 进入容器 docker attach 容器ID or 容器名称
    5. 启动容器 docker start 容器ID or 容器名称
    6. 重启容器 docker restart 容器ID or 容器名称
    7. 停止容器 docker stop 容器ID or 容器名称
    8. 强关容器 docker kill 容器ID or 容器名称
    9. 删除容器 docker rm 容器ID (强制删除 `docker rm -f 容器ID `)
    10. 同时删除多个容器 docker rm -f 容器ID 容器ID  容器ID
    11. 删除所有容器 docker rm -f $(docker ps -qa)

:::

---

## Docker 容器高级命令

::: tip Docker 容器高级命令

1. 守护式方式创建并启动容器: `docker run -di --name 别名 镜像ID`

---

1. 启动普通容器: `docker run --name 别名 镜像ID`;
2. 启动交互式容器: `docker run -it --name 别名 镜像ID` (运行一个容器,取别名,交互模式运行,以及分配一个伪终端);
3. 守护式方式创建并启动容器: `docker run -di --name 别名 镜像ID`

---

2.  启动容器,并执行/bin/bash 命令: `docker run -it --name 别名 镜像ID /bin/bash命令`
3.  进入容器,并执行命令: `docker exec -it 容器名称 或者 容器ID 执行命令` (直接操作容器,执行完回到宿主主机终端: 我们一般用于启动容器里的应用比如 tomcat nginx redis elasticsearch 等等)
4.  查看容器的日志: `docker logs 容器ID`(简单方式: /var/lib/docker/container 里面以容器 ID 命名的文件夹里面 \*.log 结尾的就是日志文件)
5.  查看容器进程: `docker top 容器ID`
6.  宿主机和容器之间文件拷贝 `docker copy` (通用命令:`docker cp "宿主机文件或者文件夹的全路径" "容器ID" :要拷贝到容器下的目录[带着文件名相当于重命名]`)
    such as:

    ```
    `docker cp /home/dog.jpg f5c54fc066a4: /tmp` //只拷贝文件不改名
    `docker cp /home/dog.jpg f5c54fc066a4: /tmp/doogg.jpg` //拷贝文件的同时改名字
    `docker cp /home/animal f5c54fc066a4: /tmp` //拷贝文件夹

    ```

7.  容器内 copy 到宿主机内: `docker cp 容器名称 宿主机目录`
    such as:

    ```
    `docker cp f5c54fc066a4:tmp/dog.jpg /home/data` //只拷贝文件不改名
    `docker cp f5c54fc066a4:tmp/animal /home/data` //拷贝文件夹

    ```

    :::

## Docker 容器宿主机端口映射

::: tip Docker 容器宿主机端口映射

docker run -it -p 8888:8080 tomcat ( "8888"是宿主机的端口,也就是要映射到的端口;"8080"是镜像内的端口 )
docker run -it -P tomcat (映射到宿主机的随机端口)

:::

## 提交运行时容器成为镜像

docker commit -a='作者' -m='备注' 运行时的容器 ID 新镜像名称

示例:`docker commit -a='zhuhaifeng' -m 'centos-details' 330fc2001ce7 suqabby/centos7:1.0`(1.0 是 TAG )

## 推送镜像到 HUB 服务器

docker push 需要 docker 账号密码,以及对应配置

## 推送镜像到阿里云

[阿里云镜像服务地址](https://account.aliyun.com/login/login.htm)
