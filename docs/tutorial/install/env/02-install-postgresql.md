---
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PostgreSQL 安装及配置

:::warning
🚧 本页文档仍在撰写中，请过段时间再来看吧
:::

:::tip
PostgreSQL 是项目的必要依赖
:::

:::info 小提示
本文主要面向新手小白，如果您已熟悉安装步骤，或有现成环境，可直接跳过当前步骤
:::

## 简介

PostgreSQL 是常用的开源的关系型数据库，在本项目中用于数据持久化存储，系统配置等非设备报文数据将存储在此数据库中。

## 安装

以下是在 Ubuntu Server 24.04 系统上安装 PostgreSQL 的简单步骤，其他系统可参考 PostgreSQL 官方文档进行安装。

:::warning
此处仅列出简易安装步骤，内容更新可能不及时，如需生产部署，建议直接查阅[原始文档](https://www.postgresql.org/)。
:::

:::note 参考文档
- PostgreSQL 文档(英文)：https://www.postgresql.org/
- Linux (Ubuntu) 下载安装步骤(英文)：https://www.postgresql.org/download/linux/ubuntu/
:::

<Tabs>
  <TabItem value="tab-apt" label="使用 apt 命令安装" default>

安装命令：

```sh
# sudo apt install postgresql # 这样安装的是 16 版本

# 安装 18 版本
sudo apt install -y postgresql-common
sudo /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh

sudo apt update
sudo apt install postgresql-18
```

:::info 如果之前安装过其他版本，需要先彻底卸载，再安装

检查已安装的 PostgreSQL 版本​：

```sh
dpkg -l | grep postgresql # 检查已安装的 PostgreSQL 版本​
```

卸载命令：

<Tabs>
  <TabItem value="tab-pg-16" label="卸载 16 版本" default>

```sh
# 卸载 16 版本
sudo systemctl stop postgresql@16-main
sudo apt remove postgresql-16 postgresql-client-16
sudo apt purge postgresql-16 postgresql-client-16
```
  </TabItem>
  <TabItem value="tab-pg-18" label="卸载 18 版本" default>

```sh
# 卸载 18 版本
sudo systemctl stop postgresql@18-main
sudo apt remove postgresql-18 postgresql-client-18
sudo apt purge postgresql-18 postgresql-client-18
```
  </TabItem>
  <TabItem value="tab-pg-other" label="卸载其他版本" default>

```sh
# 可参考以下命令进行卸载
sudo systemctl stop postgresql@<大版本号>-main
sudo apt remove postgresql-<大版本号> postgresql-client-<大版本号>
sudo apt purge postgresql-<大版本号> postgresql-client-<大版本号>
```
  </TabItem>
</Tabs>

:::

```
# sudo systemctl restart postgresql@18-main
```

  </TabItem>
  <TabItem value="tab-bt" label="使用宝塔面板安装" default>

前往 `软件商店` 页面，搜索 `PostgreSQL管理器` 并安装

安装后，点击设置，在打开的弹窗中选择 PgSQL版本: `postgresql 18.0`，然后点击安装版本

  </TabItem>
</Tabs>

:::info 小提示
- 如果需要从外部访问数据库，记得开放服务器防火墙 (ufw)，可参考[这篇文档](/docs/tutorial/faq/ubuntu/ufw)
- 另外，如果部署在云服务器上，并前往云服务器管理页面的安全组/防火墙（不同云厂商叫法不同）放开对应端口
- 此外，如果使用宝塔面板，还需要在 `安全` - `系统防火墙` 通过 `添加端口规则` 功能放开对应端口，<nobr>或直接关闭防火墙开关（不推荐）</nobr><br />（如果使用其他管理面板，可参照此步骤检查是否有防火墙功能，如果有也需要放行端口）
:::


## 配置

数据库授权：

```sql
-- SELECT * FROM pg_roles;
-- SELECT * FROM  WHERE rolname = 'frostiot_lan';
-- update pg_roles set rolcreatedb = 't' WHERE rolname = 'frostiot_lan' ;

-- SELECT * -- grantee, table_schema, table_name, privilege_type
-- FROM information_schema.table_privileges
-- -- WHERE grantee = 'frostiot_lan';

-- 授权
GRANT CREATE ON DATABASE frostiot_lan TO frostiot_lan;
-- 撤销授权
REVOKE CREATE ON DATABASE frostiot_lan FROM frostiot_lan;
```
