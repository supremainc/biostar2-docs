import Cmd from '@site/src/components/Cmd';
import clsx from 'clsx';
import styles from './styles.module.css';

export function DLtable({ type, children, className }) {
  return (
    <div className={clsx(styles.dltable, 'overflow-x', )}>
      <DLHead type={type} />
      {children}
    </div>
  )
}

function DLHead({ type }) {
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