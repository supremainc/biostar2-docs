import Cmd from '@site/src/components/Cmd';
import clsx from 'clsx';
import styles from './styles.module.css';

export function DLtable({ type, children }) {
  return (
    <div className={clsx(styles.dltable, styles[type], 'overflow-x', )}>
      <DLHead />
      {children}
    </div>
  )
}

function DLHead() {
  return (
    <div className={styles.dlhead}>
      <div className={styles.dlheaditem}>항목</div>
      <div className={styles.dlheaditem}>설명</div>
    </div>
  )
}

export function DLItem({ sid, children }) {
  return (
    <div className={styles.dlitem}>
      <div className={styles.dlitemid}><Cmd sid={sid} /></div>
      <div className={styles.dlitemdesc}>{children}</div>
    </div>
  )
}