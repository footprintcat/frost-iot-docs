---
title: Step 0. 环境准备
---

<!-- https://docusaurus.io/zh-CN/docs/markdown-features/tabs -->
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

仅当您需要在本地通过源码运行时，才需要配置以下环境。

<Tabs groupId="support-envs">
  <TabItem value="tab-jar" label="本地调试或打 .jar 包" default>

上方生产环境要求的所有环境。

<!--  -->

  </TabItem>
  <TabItem value="tab-graalvm" label="GraalVM 打原生包">

:::note
以下依赖仅当需要原生打包时需要，如直接使用打好的原生包，则不需要以下环境。
:::

上方生产环境要求的所有环境，以及：

- Visual Studio Build Tools 2022 & C development environment (GraalVM 打包时需要)
  > 参考 GraalVM 安装步骤安装即可
- GraalVM 22.3+，推荐 GraalVM Community 25.0.1 版本
  > GraalVM 社区版：[下载地址(GitHub)](https://github.com/graalvm/graalvm-ce-builds/releases/tag/jdk-25.0.1) | [Windows 安装步骤(英文)](https://www.graalvm.org/jdk25/getting-started/windows/)

:::warning 低于 22.x 版本 GraalVM 将无法成功打包
请注意：低于 22.x 版本的 GraalVM 打二进制包时会遇到问题，导致无法成功打包。原因如下：
- Windows 系统下，21.x 及以下版本对系统编码格式及 Visual Studio 所安装语言有要求，需要修改 GraalVM 内部脚本并卸载 Visual Studio 中文语言包
- Spring Boot 3.x 最低支持 JDK 17
- 低版本 GraalVM 对 Lambda (如 `lambdaCapturingTypes`) 的支持不足
- 可能会遇到一些其他问题
:::

<!--  -->

  </TabItem>
</Tabs>
