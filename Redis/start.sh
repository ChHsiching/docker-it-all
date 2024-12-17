#!/bin/bash

# 定义容器名称和宿主机目录
CONTAINER_NAME="redis3"
REDIS_CONFIG_DIR="./config"
REDIS_DATA_DIR="./data"
REDIS_LOG_DIR="./logs"

# 创建宿主机目录
mkdir -p $REDIS_CONFIG_DIR
mkdir -p $REDIS_DATA_DIR
mkdir -p $REDIS_LOG_DIR

# 启动一个临时的 Redis 容器
docker run --name $CONTAINER_NAME -d redis:3

# 等待容器启动完成
echo "等待容器启动..."
sleep 5  # 等待 5 秒钟，确保容器运行

# 从容器中复制文件到宿主机
echo "复制配置文件到宿主机..."
docker cp $CONTAINER_NAME:/etc/redis $REDIS_CONFIG_DIR

echo "复制数据文件到宿主机..."
docker cp $CONTAINER_NAME:/data $REDIS_DATA_DIR

echo "复制日志文件到宿主机..."
docker cp $CONTAINER_NAME:/var/log/redis $REDIS_LOG_DIR

# 停止并删除临时容器
docker rm -f $CONTAINER_NAME

# 现在使用宿主机目录来启动 Redis 容器
echo "使用宿主机目录挂载启动 Redis 容器..."
# 使用 docker-compose 启动 Redis 容器
docker compose up -d
echo "Redis 容器已启动，配置已完成"

