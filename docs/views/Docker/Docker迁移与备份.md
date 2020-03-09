---
title: Docker 迁移与备份
date: 2019-11-08
tags:
  - Docker
categories:
  - Docker
---

## 概述

我们开发的时候,经常自定义镜像,然后 commit 提交成镜像到本地仓库,但是我们发布到客户服务器的时候,可以用前面的 hub 官方,或者阿里云,但是有些机密性的项目,是禁止公网存储的,所以我们只能通过 docker 镜像备份和迁移实现

## 实现

### 备份镜像:

`docker save -o 备份镜像的名称 镜像源名称:tag版本(或者镜像ID)`

such as:(备份到当前路径下)

`docker save -o centos7-5.tar centos:7.5`

### 恢复镜像

`docker load -i 镜像文件`
such as:

`docker load -i centos7-5.tar`

导入后发现,镜像的名字和 TAG 都是 `<none>`,需要我们手动添加

```bash
docker tag cf49811e3cdb centos// centos就是镜像的名字
```
