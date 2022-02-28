import React, {useContext, useState, useEffect} from 'react';
import styles from './CreateSection.module.css';
import CreateLiber from '../createliber/CreateLiber';
import ListLibrat from '../listLibrat/ListLibrat';
import CreateKupon from '../createkupon/CreateKupon';
import ListKupon from '../listkupon/ListKupon';
import ModifyLibrat from '../modifylibrat/ModifyLibrat';
import DeleteLiber from '../deleteliber/DeleteLiber';
import { SidebarContext } from '../../store/sidebarContext';

const CreateSection = () => {
  const {barIs, setBar} = useContext(SidebarContext);
  const [active, setActive] = useState(<CreateLiber/>)

  useEffect(() => {
    switch(barIs){
        case 1:
            setActive(<CreateLiber/>)
            break;
        case 2:
            setActive(<ListLibrat/>)
            break;
        case 3:
            setActive(<CreateKupon/>)
            break;
        case 4: 
            setActive(<ListKupon/>)
            break;
        case 5:
            setActive(<ModifyLibrat/>)
            break;
        case 6:
            setActive(<DeleteLiber/>)
            break;
    }
  }, [barIs])
  

  return (
    <div className={styles.section}>
        {active}
    </div>
  )
}

export default CreateSection