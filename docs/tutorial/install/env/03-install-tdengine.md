# TDengine 安装及配置

:::warning
🚧 本页文档仍在撰写中，请过段时间再来看吧
:::

:::tip
TDengine 是项目的必要依赖
:::

## 简介

TDengine 是国内热门的开源时序数据库，在本项目中用于设备数据报文的持久化存储。

## 安装

以下是在 Ubuntu Server 24.04 系统上安装 TDengine 的简单步骤，其他系统可参考 TDengine 官方文档进行安装。

:::warning
此处仅列出简易安装步骤，内容更新可能不及时，如需生产部署，建议直接查阅[原始文档](https://docs.taosdata.com/)。
:::

:::note 参考文档
- TDengine 官方文档：https://docs.taosdata.com/
- 使用安装包快速体验 TDengine TSDB：https://docs.taosdata.com/get-started/package/
- 安装部署：https://docs.taosdata.com/operation/install/#%E4%BD%BF%E7%94%A8-apt-get-%E5%91%BD%E4%BB%A4%E5%AE%89%E8%A3%85
- 产品组件：https://docs.taosdata.com/reference/components/
:::

安装命令：

```sh
# 使用 apt 安装
wget -qO - http://repos.taosdata.com/tdengine.key | sudo apt-key add -
echo "deb [arch=amd64] http://repos.taosdata.com/tdengine-stable stable main" | sudo tee /etc/apt/sources.list.d/tdengine-stable.list
sudo apt-get update
apt-cache policy tdengine-tsdb
sudo apt-get install tdengine-tsdb
# 直接留空回车
```

```sh
# 启动
sudo systemctl start taosd
sudo systemctl start taosadapter
sudo systemctl start taoskeeper
sudo systemctl start taos-explorer
# 或者直接 start-all.sh （这个已经配置到环境变量中了，可以直接运行了）
```

```sh
# 查看运行状态
sudo systemctl status taosd taosadapter taoskeeper taos-explorer
```

:::tip 默认密码
TDengine 默认密码为：`root` / `taosdata`
:::

其他命令：

```sh
# 命令行查询
taos
```

## taosExplorer

TDengine 的可视化管理交互工具的 web 服务。

> 官方文档：https://docs.taosdata.com/reference/components/explorer/

```sh
# 如果 taos-explorer 没有启动
sudo systemctl start taos-explorer

# 配置防火墙 (如果需要开放)
sudo ufw allow 6060/tcp
```

```sh
# 开放端口
# sudo ufw allow 6030/tcp
sudo ufw allow 6041/tcp
```

运行端口：`http://<IP>:6060/login` (例如 `http://192.168.2.66:6060/login`)

## 配置

:::warning
TODO
:::

## 问题排查

如果 TDengine 数据库节点经常非正常关机，可能导致 TDengine 无法启动。如果数据不重要，那么可以使用如下命令删除所有设备数据，再启动：

:::danger 注意
**执行以下命令会删除整个 TDengine 数据库内的数据，请仅在测试环境使用，不得在生产环境中执行此命令。**

**使用前请谨慎！三思！再三确认！**
:::

```sh
# See "systemctl status taosd.service" and "journalctl -xeu taosd.service" for details.

sudo systemctl stop taosd
sudo rm -rf /var/lib/taos/*
sudo systemctl start taosd
sudo systemctl status taosd
```
