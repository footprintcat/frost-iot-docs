import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '完全开源',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        项目代码全部开源在 <code>GitHub</code> 和 <code>Gitee</code> 平台，无需担心维护问题。
      </>
    ),
  },
  {
    title: '海量协议支持 (筹备中)',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        支持 xxx, xxx, xxx, xxx 等协议，同时提供 interface 接口和 SDK，以及完善的开发文档，可使用多种语言自行扩展协议支持。
        <br />
        <small>*注：该功能筹备中，暂未上线</small>
      </>
    ),
  },
  {
    title: '支持节点级联 (筹备中)',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        针对现场复杂环境，支持多节点灵活配置层级上报数据。设备数据层层上报，自适应级联协议。断网自动补传。功能强大，满足复杂现场数据上报需求及安全合规需求。
        <br />
        <small>*注：部分功能需要付费</small>
        <br />
        <small>*注：该功能筹备中，暂未上线</small>
      </>
    ),
  },
  {
    title: '支持国产化及信创需求 (筹备中)',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        支持国产化数据库及中间件，支持新创改造。
        <br />
        <small>*注：此功能为付费支持功能，开源版暂不支持，相关需求可联系我们详细咨询</small>
        <br />
        <small>*注：该功能筹备中，暂未上线</small>
      </>
    ),
  },
  {
    title: '支持私有部署',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        拥有完善的部署文档，自行部署十分方便。
      </>
    ),
  },
  {
    title: '云服务版 (筹备中)',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        对于稳定性要求更高，或对数据统计有更高要求，或不便于自己部署的用户，可以选择云服务版，支付少量费用即可立即获得大量实用功能。
        <br />
        <small>*注：该功能筹备中，暂未上线</small>
      </>
    ),
  },
  {
    title: '内部协议付费开发',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        拥有完善的部署文档，自行部署十分方便
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
