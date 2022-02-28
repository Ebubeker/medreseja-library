import React,{useState, useContext} from "react";
import styles from './Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faList, faNoteSticky, faCircleXmark, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logoPhoto from '../../images/logo.png';
import { SidebarContext } from "../../store/sidebarContext";


const sidebarInfo = [
  {
    name: "Krijo Liber",
    link: "createBooks",
    icon: faCirclePlus
  },
  {
    name: "Shiko Librat",
    link: "listBooks",
    icon: faList
  },
  {
    name: "Krijo Kupon",
    link: "createCupon",
    icon: faNoteSticky
  },
  {
    name: "Lista e Kuponeve",
    link: "listCupons",
    icon: faList
  },
  {
    name: "Modifiko Librat",
    link: "modifyBooks",
    icon: faPenToSquare
  },
  {
    name: "Fshij nje Librin",
    link: "deleteBooks",
    icon: faCircleXmark
  }
]

const Sidebar = () => {
  const {barIs, setBar} = useContext(SidebarContext);

  const changeBar = (ind)=>{
    setBar(ind);
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.icon}>
        <img src={logoPhoto} alt="logo" />
      </div>
      {sidebarInfo.map((item, i)=>{
        if(i+1 === barIs){
          return(
            <Link className={styles.linklink} key={i} to={`/${item.link}`}>
              <div className={styles.activeSidebarItem}>
                <FontAwesomeIcon icon={item.icon}/>
                <p className={styles.link}>{item.name}</p>
              </div>
            </Link>
          );
        }else{
          return(
          <Link className={styles.linklink} key={i} to={`/${item.link}`}>
            <div onClick={() => changeBar(i + 1)} className={styles.sidebarItem}>
              <FontAwesomeIcon icon={item.icon}/>
              <p className={styles.link}>{item.name}</p>
            </div>
          </Link>
          );
        }
      })}
    </div>
  );
};

export default Sidebar;
