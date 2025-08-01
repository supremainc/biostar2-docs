import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Head from '@docusaurus/Head';
import clsx from 'clsx';

export default function Cover() {
    const { i18n: { currentLocale, label }, siteConfig } = useDocusaurusContext();
    const title = "BioStar 2";
    const subtitle = "Revision Notes";
    const ver = "v2.9.10";
    const lang = siteConfig.i18n.localeConfigs[currentLocale].label;
    const langLabel = currentLocale.toUpperCase();
    const num = `${langLabel} 301.00.BS2`;
    const next = useBaseUrl('/revision');

    return (
        <Layout>
            <Head>
                <meta name="robots" content="noindex, nofollow"/>
                <style>{`@page {margin: 0;}`}</style>
            </Head>
            <div className={styles.coverpage}>
                <div className={styles.title}>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <div className={styles.ver}>{ver}</div>
                    <div className={styles.lang}>{lang}</div>
                    <div className={styles.number}>{num}</div>
                </div>
                <div className={styles.footer}>
                    <img src={useBaseUrl('img/suprema-logo-bottom.svg')} className={styles.logo} alt="Suprema Logo" />
                </div>
                <a className={clsx(styles.next, "pagination-nav__link pagination-nav__link--next")} href={next}>
                    <div className="pagination-nav__sublabel">다음</div>
                </a>
                <div className="page-break"></div>
            </div>
        </Layout>
    );
}