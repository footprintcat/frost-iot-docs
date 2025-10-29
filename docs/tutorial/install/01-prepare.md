---
title: Step 0. 环境准备
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 环境准备

:::warning
🚧 本页文档仍在撰写中，请过段时间再来看吧
:::

在开始安装前，请确认您的系统是否满足部署条件。

## 最低系统要求

TODO

## 最低环境要求

### 生产环境

<Tabs groupId="support-envs">
  <TabItem value="tab-jar" label="使用 .jar 包运行" default>

- JDK 17+，推荐 OpenJDK 17/21/25 版本

<!--  -->

  </TabItem>
  <TabItem value="tab-graalvm" label="使用 GraalVM 编译的二进制包运行">

无需配置 JDK

  </TabItem>
</Tabs>

---

### 开发环境

<Tabs groupId="support-envs">
  <TabItem value="tab-jar" label="本地调试或打 .jar 包" default>

- JDK 17+，推荐 OpenJDK 17/21/25 版本

<!--  -->

  </TabItem>
  <TabItem value="tab-graalvm" label="GraalVM 打原生包">

:::note
以下依赖仅当需要原生打包时需要，如直接使用打好的原生包，则不需要以下环境。
:::

- GraalVM 22.3+，推荐 OpenJDK 17/21/25 版本
  > 低于 22.x 版本打包时会遇到问题无法成功打包

<!--  -->

  </TabItem>
</Tabs>
