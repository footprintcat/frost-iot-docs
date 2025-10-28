import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import MDXContent from "@theme/MDXContent";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--secondary button--lg", styles.btn)}
            to="/docs/intro"
          >
            查看演示
          </Link>
          {/* button--primary */}
          <Link
            className={clsx("button button--link button--lg", styles.btn)}
            style={{ color: "white" }}
            to="/docs/intro"
          >
            文档
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  const IndexContent = require(`./_index-content.md`).default;
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <div style={{ width: "min(580px, 90%)", margin: "20px auto" }}>
        <MDXContent>
          <IndexContent />
        </MDXContent>
      </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
