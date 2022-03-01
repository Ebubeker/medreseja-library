import React, {useRef, useState} from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import styles from './Layout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Layout = ({children}) => {
  const sideBarrr = useRef(null)

  const openSidebar = () => {
    console.log(sideBarrr.current.style.display)
    if(sideBarrr.current.style.display === ""){
      sideBarrr.current.style.display = "block";
    }else if(sideBarrr.current.style.display === "none"){
      sideBarrr.current.style.display = "block";
    }else if(sideBarrr.current.style.display === "block"){
      sideBarrr.current.style.display = "none";
    }
  }

  return (
    <div className={styles.seperator}>
        <div ref={sideBarrr} className={styles.leftSide}>
          <Sidebar/>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.container}>
            {children}
          </div>
        </div>
        <FontAwesomeIcon onClick={openSidebar} icon={faBars} className={styles.bar}/>
    </div>
  )
}

export default Layout