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
:::

:::info 小提示
- 如果需要从外部访问数据库，记得开放服务器防火墙 (ufw)，可参考[这篇文档](/docs/tutorial/faq/ubuntu/ufw)
- 另外，如果部署在云服务器上，并前往云服务器管理页面的安全组/防火墙（不同云厂商叫法不同）放开对应端口
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
