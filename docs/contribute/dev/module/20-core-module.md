# core 模块

`common` 模块：定义工具函数、通用 DTO 对象、通用接口与枚举等

`frost-iot-core-*` 模块分层架构设计：

```
- 数据库表 --> Entity 对象 --> Mapper 层 --> Repository 层 一一对应
- Service 层根据业务划分，可能涵盖 0 个、1 个或多个 Repository/Mapper 层查询
```



数据库查询

