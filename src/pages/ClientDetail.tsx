import { Link } from '@material-ui/core';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BreadcrumbsComponent from '../components/breadcrumbs/Breadcrumbs';
import ModalComponent from '../components/modal/Modal';
import styles from './css/clientdetail.module.css'; // Import css modules stylesheet as styles

const ClientDetailPage = () => {


  let { id } = useParams();

  const [isOpen, setIsOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsOpen(true);
  }

  const handleDialogClose = () => {
    setIsOpen(false);
  }
  return (
    <>
      <BreadcrumbsComponent customLabel={"Robert Dupont"}></BreadcrumbsComponent>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headermain}>
            <img className={styles.imageclient} src="https://cdn-icons-png.flaticon.com/512/1250/1250689.png" alt='image client' ></img>
            <div className={styles.labelclient}>
              <p>Client ID : {id}</p>
              <p>Client depuis le : date de l'API</p>
            </div>
          </div>
          <div className={styles.groupbutton}>
            <Button onClick={handleDialogOpen}>Modifier</Button>
            <Button onClick={handleDialogOpen}>Supprimer</Button>
          </div>
        </div>

        <div className={styles.adresse}>
          <h3>Adresse</h3>
          <p>21 rue des poireaux</p>
        </div>
        <div className={styles.birthday}>
          <h3>Date de naissance</h3>
          <p>15 / 04 / 1995</p>
        </div>
        <div className={styles.folderInProgress}>
          <h3>Dossier associés</h3>
        </div>
      </div>

      <ModalComponent isOpen={isOpen} handleClose={handleDialogClose} title='Modification du clien'>
        <h1>Formulaire pour modifier le client</h1>
      </ModalComponent>
    </>
  )
}
export default ClientDetailPage