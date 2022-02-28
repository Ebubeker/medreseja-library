import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import styles from './Layout.module.css';

const Layout = ({children}) => {


  return (
    <div className={styles.seperator}>
        <div className={styles.leftSide}>
          <Sidebar/>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.container}>
            {children}
          </div>
        </div>
    </div>
  )
}

export default Layout