# ufw 防火墙配置

:::info
- 本教程基于 Ubuntu Server 24.04 英文版编写，理论上适用于 Ubuntu、Debian 等使用 `ufw` 防火墙的发行版
- 本教程不适用于 CentOS 系统 (CentOS 发行版使用 `firewalld` 防火墙)
:::

:::info 注意
- 如果使用云服务器，通过 ufw 命令放开端口后，还需要前往云厂商控制台，前往安全组/防火墙（不同厂商叫法不同）开放对应端口才可从外网访问
:::

### 添加放行规则 (放开端口)

```sh
# 开放端口
sudo ufw allow <端口号>/tcp
# 例如:
# sudo ufw allow 6041/tcp
```

### 查看现有规则

```sh
# 查看现有规则及其编号
sudo ufw status numbered    # 输出会显示每条规则的编号（如 `[1]`、`[2]`）
sudo ufw status             # 输出不带编号
```

<details>
  <summary>输出结果</summary>

输出结果类似于

```
Status: active

     To                         Action      From
     --                         ------      ----
[ 1] 20/tcp                     ALLOW IN    Anywhere
[ 2] 21/tcp                     ALLOW IN    Anywhere
[ 3] 22/tcp                     ALLOW IN    Anywhere
[ 4] 80/tcp                     ALLOW IN    Anywhere
[ 5] 443/tcp                    ALLOW IN    Anywhere
....
```

</details>


### 删除放行规则 (撤销放开的端口)

#### 方法1 通过规则编号删除（推荐）

先查询现有规则，找到需要删除的那条规则，然后根据规则前的序号进行删除

```sh
# 根据编号删除规则
sudo ufw delete [编号]
# 例如，如果规则编号是 `1`：
# sudo ufw delete 1
```

#### 方法2 直接通过规则内容删除

```bash
sudo ufw delete allow <端口号>/tcp
# 例如:
# sudo ufw delete allow 5432/tcp
```

系统会提示确认操作，输入 `y` 确认即可。

#### 方法 3：精确匹配原始规则（适用于复杂规则）

如果规则是通过完整命令创建的（如指定协议和端口），可直接复用原命令：

```bash
sudo ufw delete allow proto tcp to any port <端口号>
# 例如:
# sudo ufw delete allow proto tcp to any port 5432
```

#### 验证

删除后，可再次使用 `sudo ufw status` 命令检查规则是否已移除
