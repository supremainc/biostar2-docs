import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import styles from './styles.module.css';
function AdmonitionContainer({type, className, children}) {
  return (
    <div
      className={clsx(
        ThemeClassNames.common.admonition,
        ThemeClassNames.common.admonitionType(type),
        styles.admonition,
        className,
      )}>
      {children}
    </div>
  );
}
function AdmonitionHeading({icon, title, type}) {
  // console.log(type);
  return (
    <div className={(type === 'note') ? styles.admonitionHeadingNote : styles.admonitionHeading}>
      <span className={styles.admonitionIcon}>{icon}</span>
      {title}
    </div>
  );
}
function AdmonitionContent({children}) {
  return children ? (
    <div className={styles.admonitionContent}>{children}</div>
  ) : null;
}
export default function AdmonitionLayout(props) {
  const {type, icon, title, children, className} = props;
  return (
    <AdmonitionContainer type={type} className={className}>
      {title || icon ? <AdmonitionHeading title={title} icon={icon} type={type} /> : null}
      <AdmonitionContent>{children}</AdmonitionContent>
    </AdmonitionContainer>
  );
}
