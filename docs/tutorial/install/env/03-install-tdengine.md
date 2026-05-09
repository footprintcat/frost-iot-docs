---
# Tab 内部嵌套标题时, 右侧 TOC 中会显示全部标题, 所有这里直接隐藏右侧 TOC 部分
# docs: https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-docs#hide_table_of_contents
# issue:
# - https://github.com/facebook/docusaurus/issues/5343
# - https://github.com/facebook/docusaurus/issues/11519
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# TDengine 安装及配置

:::warning
🚧 本页文档仍在撰写中，请过段时间再来看吧
:::

:::tip
TDengine 是项目的必要依赖
:::

:::info[小提示]
本文主要面向新手小白，如果您已熟悉安装步骤，或有现成环境，可直接跳过当前步骤
:::

## 简介

TDengine 是国内热门的开源时序数据库，在本项目中用于设备数据报文的持久化存储。

<Tabs>
  <TabItem value="tab-ubuntu" label="Ubuntu Server (推荐)" default>

## 安装

以下是在 Ubuntu Server 24.04 系统上安装 TDengine 的简单步骤，其他系统可参考 TDengine 官方文档进行安装。

:::warning
此处仅列出简易安装步骤，内容更新可能不及时，如需生产部署，建议直接查阅[原始文档](https://docs.taosdata.com/)。
:::

:::note[文档与链接]
- 常用链接
  - 官方网站：https://www.taosdata.com/tsdb
  - 官方文档：https://docs.taosdata.com/
  - GitHub：https://github.com/taosdata/TDengine
- 部署文档
  - 使用安装包快速体验 TDengine TSDB：https://docs.taosdata.com/get-started/package/
  - 安装部署：[https://docs.taosdata.com/operation/install/#%E4...](https://docs.taosdata.com/operation/install/#%E4%BD%BF%E7%94%A8-apt-get-%E5%91%BD%E4%BB%A4%E5%AE%89%E8%A3%85)
- 参考文档
  - 产品组件：https://docs.taosdata.com/reference/components/
  - 默认端口：[https://docs.taosdata.com/operation/planning/#%E7...](https://docs.taosdata.com/operation/planning/#%E7%BD%91%E7%BB%9C%E7%AB%AF%E5%8F%A3%E8%A6%81%E6%B1%82)
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

:::info[小提示]
- 如果需要从外部访问数据库，记得开放服务器防火墙 (ufw)，可参考[这篇文档](/docs/tutorial/faq/ubuntu/ufw)
- 另外，如果部署在云服务器上，并前往云服务器管理页面的安全组/防火墙（不同云厂商叫法不同）放开对应端口
- 此外，如果使用宝塔面板，还需要在 `安全` - `系统防火墙` 通过 `添加端口规则` 功能放开对应端口，或直接关闭防火墙开关（不推荐）<br />（如果使用其他管理面板，可参照此步骤检查是否有防火墙功能，如果有也需要放行端口）
:::

:::tip[默认密码]
TDengine 默认用户名密码为：`root` / `taosdata`
:::

:::tip[默认端口]
TDengine 默认端口可参考[这篇文档](https://docs.taosdata.com/operation/planning/#%E7%BD%91%E7%BB%9C%E7%AB%AF%E5%8F%A3%E8%A6%81%E6%B1%82)
:::

其他命令：

```sh
# 命令行查询
taos
```

## 在浏览器中可视化查询 (taosExplorer)

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

:::danger[注意]
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

## 后续

如需了解 TDengine 基础语法，可查阅[这篇文档](/docs/contribute/dev/crud/tdengine)，如需数据备份或恢复，或希望彻底卸载，请查阅[升级、迁移与备份](/docs/category/migration)。

  </TabItem>
  <TabItem value="tab-docker" label="Docker">

## TDengine Docker 体验

如果您希望使用 Docker 快速安装体验，可以参考以下步骤。

:::note
实际生产部署时，如无特殊需求，建议将数据库直接安装到物理机上，而不是通过 Docker 进行部署。
:::

官网文档：https://docs.taosdata.com/get-started/docker/

```sh
# 不映射数据文件, 数据存储在 Docker 容器节点中（重启容器数据会丢失！）
docker run -d -p 6030:6030 -p 6041:6041 -p 6043:6043 -p 6044-6049:6044-6049 -p 6044-6045:6044-6045/udp -p 6060:6060 tdengine/tdengine
```

```sh
# 在 Linux 系统上, 将数据文件映射到本地目录 [~/data/taos/dnode]
docker run -d -v ~/data/taos/dnode/data:/var/lib/taos \
  -v ~/data/taos/dnode/log:/var/log/taos \
  -p 6030:6030 -p 6041:6041 -p 6043:6043 -p 6044-6049:6044-6049 -p 6044-6045:6044-6045/udp -p 6060:6060 tdengine/tdengine
```

```batch
:: 在 Windows 系统上, 将数据文件映射到本地目录 [D:\临时目录\tdengine-test]
docker run -d -v D:\临时目录\tdengine-test\data:/var/lib/taos ^
  -v D:\临时目录\tdengine-test\log:/var/log/taos ^
  -p 6030:6030 -p 6041:6041 -p 6043:6043 -p 6044-6049:6044-6049 -p 6044-6045:6044-6045/udp -p 6060:6060 tdengine/tdengine
```

:::info[提示]
docker 映射命令：冒号之前是宿主机的，冒号之后是容器内的
:::

  </TabItem>
</Tabs>
