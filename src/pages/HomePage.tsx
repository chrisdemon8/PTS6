import React from 'react';
import styles from './css/homepage.module.css'; // Import css modules stylesheet as styles

const HomePage = () => {

  console.log(process.env)

  return (
    <>
    <div className={styles.page}>
     <div className={styles.container}>
      <img className={styles.logo} src='../logo.png'></img>
      <div className={styles.title}>
        <h1>Consultez et gérez vos clients et leurs dossiers en toute simplicité</h1>
      </div>
      <div className={styles.buttons}>
        <div className={styles.btnclient}><img src="../btn_profile.png"></img><p>Clients</p></div>
        <div className={styles.btndossier}><img src="../btn_folder.png"></img><p>Dossiers</p></div>
      </div>


      </div>
    </div>

    </>
  )
}
export default HomePage