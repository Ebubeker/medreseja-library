import React,{useRef} from 'react';
import styles from './DeleteLiber.module.css';
import { deleteLiber } from '../../server/server';

const DeleteLiber = () => {

  const bookId = useRef(null)

  const handleDelete = ()=>{
    deleteLiber(parseInt(bookId.current.value))
    bookId.current.value="";
  }

  return (
    <div>
      <p className={styles.title}>Fshij nje librin</p>
      <input
        ref={bookId}
        className={styles.input}
        type="text"
        placeholder="ID e librit qe deshiron te fshish"
      />
      <div onClick={handleDelete} className={styles.btn}>
        Fshij
      </div>
    </div>
  )
}

export default DeleteLiber;