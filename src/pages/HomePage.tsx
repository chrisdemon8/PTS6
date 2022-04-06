import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './css/homepage.module.css'; // Import css modules stylesheet as styles

const HomePage = () => {

  const navigate = useNavigate();

  console.log(process.env)

  return (
    <>
      <div className={styles.page}>
        <div className={styles.container}>
          <img className={styles.logo} src='../logo.png'></img>
          <div className={styles.title}>
            <h1>Consultez et gérez vos clients et leurs affaires en toute simplicité</h1>
          </div>
          <div className={styles.buttons}>
            <div onClick={() => navigate("/clients")} className={styles.btnclient} ><img src="../btn_profile.png"></img><p>Clients</p></div>
            <div onClick={() => navigate("/dossiers")} className={styles.btndossier} ><img src="../btn_folder.png"></img><p>Affaires</p></div>
          </div>


        </div>
      </div>

    </>
  )
}
export default HomePage