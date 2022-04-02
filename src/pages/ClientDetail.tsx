import { Link } from '@material-ui/core';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BreadcrumbsComponent from '../components/breadcrumbs/Breadcrumbs';
import ModalComponent from '../components/modal/Modal';
import styles from './css/clientdetail.module.css'; // Import css modules stylesheet as styles

const ClientDetailPage = () => {


  let { id } = useParams();

  const [isOpen, setIsOpen] = useState(false);

  const [isOpenDelete, setIsOpenDelete] = useState(false);

  const [dataClient, setDataClient]: any = useState([]);

  useEffect(() => {

    async function fetchData() {
      const request = await axios.get("http://pts6.local/api/client/" + id);



      setDataClient(request.data);


      return request;
    }

    fetchData();

  }, []);


  const handleDialogOpen = () => {
    setIsOpen(true);
  }

  const handleDialogClose = () => {
    setIsOpen(false);
  }

  const handleDialogDeleteOpen = () => {
    setIsOpenDelete(true);
  }

  const handleDialogDeleteClose = () => {
    setIsOpenDelete(false);
  }

  const handleSubmit = () => {
    alert("modification d'un client");
  }



  return (
    <>
      <BreadcrumbsComponent customLabel={dataClient[0]?.client_first_name + " " + dataClient[0]?.client_last_name}></BreadcrumbsComponent>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headermain}>
            <img className={styles.imageclient} src="https://cdn-icons-png.flaticon.com/512/1250/1250689.png" alt='image client' ></img>
            <div className={styles.labelclient}>
              <p>Client ID : {id}</p>
              <p>Client depuis le : {dataClient[0]?.client_createdAt}</p>
            </div>
          </div>
          <div className={styles.groupbutton}>
            <Button onClick={handleDialogOpen}>Modifier</Button>
            <Button onClick={handleDialogDeleteOpen}>Supprimer</Button>
          </div>
        </div>

        <div className={styles.adresse}>
          <h3>Adresse</h3>
          <p>{dataClient[0]?.client_adress}</p>
        </div>
        <div className={styles.birthday}>
          <h3>Date de naissance</h3>
          <p>{dataClient[0]?.client_birthday}</p>
        </div>
        <div className={styles.folderInProgress}>
          <h3>Dossier associés</h3> 
          <ul>
            {dataClient[0]?.cases.map((element: any) => <li>{ "Affaire n° " +element.code + "  |  "  } {element.case_status === 0 ? "En cours" : "Terminée"}</li>)} 
          </ul>
        </div>
      </div>

      <ModalComponent isOpen={isOpen} handleClose={handleDialogClose} title='Modification du client'>

        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

          <h1>Formulaire pour modifier le client</h1>

          <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <TextField
              style={{ width: "250px", margin: "5px" }}
              type="text"
              label="Prénom"
              variant="outlined"
              required
            />
            <br />
            <TextField
              style={{ width: "250px", margin: "5px" }}
              type="text"
              label="Nom de famille"
              variant="outlined"
              required
            />
            <br />
            <TextField
              style={{ width: "250px", margin: "5px" }}
              type="text"
              label="Adresse"
              variant="outlined"
              required
            />
            <br />
            <TextField
              style={{ width: "250px", margin: "5px" }}
              type="text"
              label="Date de naissance"
              variant="outlined"
              required
            />
            <br />
            <br />
            <Button type="submit" style={{ width: "250px", margin: "5px" }} variant="contained" color="primary">
              save
            </Button>
          </form>

        </div>

      </ModalComponent>

      <ModalComponent isOpen={isOpenDelete} handleClose={handleDialogDeleteClose} title="Suppression d'un client">
        <>
          <h2>Etes-vous sur de vouloir supprimer le client { } nom du client ?</h2>
          <Button href="/clients" variant="contained" color="error">
            Supprimer
          </Button>
        </>
      </ModalComponent>
    </>
  )
}
export default ClientDetailPage