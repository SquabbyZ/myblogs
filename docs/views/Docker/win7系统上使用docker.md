---
title: Win7 系统上使用 Docker(局域网)
date: 2020 08-27
tags:
  - Docker
categories:
  - Docker
---


## 项目需求

由于项目开发必须要在 Win7 系统的环境下进行开发，而且项目要做成 docker 镜像服务，但是在官网上和大多数的资料显示都是在 Win10 的开发环境下，使用 docker-desktop 的 docker 服务，但是，win7 上没有 Windows10 的 Hyper-v 虚拟化技术，所以可以使用 `DockerToolbox` 工具来达到效果


## 个人简单向同学介绍下 DockerToolbox

`DockerToolbox` 实现的大体效果不是像在 win10 的系统下，在系统环境变量中上直接装载，而且创建了一个 Linux 虚拟机来进行的，在虚拟机中使用的 docker 服务，你可能会说，我直接用 Vmware 创建个虚拟机，再创建的虚拟机里使用 docker 的效果不是一样的么，我只想说 `DockerToolbox` 中自带虚拟机，而且是一键式创建，多省事。


## 下载地址

[DockerToolbox的下载地址](https://github.com/docker/toolbox/releases/download/v19.03.1/DockerToolbox-19.03.1.exe)

## 安装

只需一路默认就可以，如果你的电脑上安装了 `Git for Window` 我建议你先卸载掉，就一路默认安装即可，如果你不想卸载，带全部安装完成之后，会生成3个快捷图标，分别是 `Docker Quickstart Terminal`、`Oracle VM VirtualBox`、`Kitematic(Alpha)`,<span style='color:red;'>鼠标右键点击`Docker Quickstart Terminal` 然后点击属性 ==>快捷方式，在显示的页面中找到 `起始位置`，把其中的 `git的bash` 路径换成你之前安装的 `Git for Windows` 的路径即可 </span>

## 简单介绍安装完的3个快捷方式
`VirtualBox` 提供了 `linux` 虚拟机的运行环境，`Docker Quickstart Terminal` 用于快速介入 `linux` 虚拟机，提供命令行交互，`Kitematic是docker GUI` 很少用到。


## 启动和使用
第一次运行 `Docker Quickstart Terminal` 时会进行 `Docker` 环境的初始化，会在 `VirtualBox` 中自动创建名字为 `【default】`的 `linux` 虚拟机，再此过程中会用到 `boot2docker.iso` 镜像文件。默认情况下，启动程序会从 `GitHub` 上下载此文件的最新版，但是由于我们是纯局域网开发无法下载从而造成Docker环境无法启动
![](http://lc-zltjehaI.cn-n1.lcfile.com/827e7cffdcdea1be3d23/docker7-1.png)

解决方法:其实DockerToolbox安装文件自带了boot2docker.iso镜像文件，位于安装目录下（如C:\Program Files\Docker Toolbox） ，将此文件拷至C:\Users\Administrator\.docker\machine\cache目录下，然后在网络断开的情况下重新启动

default虚拟机的默认用户名和密码
用户名：docker   密码： tcuser


## 更改虚拟磁盘存储位置
虚拟机的默认存储位置是 `C:\Users\Administrator\.docker\machine\machines` ，后期docke镜像文件会不断增加，为了给系统盘减负，最好将磁盘移动到其他位置。

[https://www.cnblogs.com/canger/p/9028723.html](https://www.cnblogs.com/canger/p/9028723.html)