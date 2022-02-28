import React from 'react';
import styles from './CreateKupon.module.css';
import { useRef, useState, useEffect } from 'react';
import { krijoKupon, GetLibrat, decreaseStock } from '../../server/server';

const CreateKupon = () => {
  const name = useRef(null);
  const bookId = useRef(null);
  const dataM = useRef(null);
  const dataK = useRef(null);
  const [librat, setLibrat] = useState([])

  useEffect(() => {
    GetLibrat().then((res)=> {
      setLibrat(res.result);
    })
  }, [])
  

  const handleSubmitRegistry = () => {
    let booleanIfTrue = false;
    let currentStock = 1;
    const registryObj = {
      name: name.current.value,
      bookId: parseInt(bookId.current.value),
      dataM: dataM.current.value,
      dataK: dataK.current.value,
      slug: `${name.current.value}-${dataM.current.value}-${dataK.current.value}`,
    };

    librat.map((libri) => {
      if (
        libri.isbn === parseInt(bookId.current.value) &&
        libri.stock > 0
      ) {
        booleanIfTrue = true;
        currentStock = libri.stock - 1;
      }
    });

    if (booleanIfTrue) {
      krijoKupon(registryObj);
      decreaseStock(registryObj.bookId, currentStock);
      name.current.value = "";
      bookId.current.value = "";
      dataM.current.value = "";
      dataK.current.value = "";
    } else {
      alert("No book was found!!");
    }


  };

  return (
    <div>
      <p className={styles.title}>Regjistro person qe merr liber</p>
      <input
        ref={name}
        className={styles.input}
        type="text"
        placeholder="Emri i nxenesit"
      />
      <input
        ref={bookId}
        className={styles.input}
        type="text"
        placeholder="ID e librit"
      />
      <label htmlFor="dataM">Data e marrjes</label>
      <input ref={dataM} className={styles.input} type="date" name="dataM" />
      <label htmlFor="dataK">Data e kthimit</label>
      <input ref={dataK} className={styles.input} type="date" name="dataK" />
      <div onClick={handleSubmitRegistry} className={styles.btn}>
        Regjistro
      </div>
    </div>
  )
}

export default CreateKupon;