---
title: TDengine 增删改查
---

# TDengine 的增删改查 (CRUD)

:::warning
🚧 本页文档仍在撰写中，请过段时间再来看吧
:::

以下仅记录部分常用的 CRUD SQL，开始贡献前，建议您先学习 TDengine 的[基本语法](https://docs.taosdata.com/basic/)。

:::note[参考文档]
数据写入：https://docs.taosdata.com/basic/insert/
:::

```sql
-- [超级表]
-- refer: https://docs.taosdata.com/reference/taos-sql/stable/
-- 显示一个超级表的创建语句
SHOW CREATE STABLE stb_name;

-- 获取超级表中所有子表的标签信息
SHOW TABLE TAGS FROM st1;

-- 查超级表有哪些字段
DESCRIBE monitor_environment;
```

没试过：
修改配置：/etc/taos/taos.cfg
