import { LocalizationProvider, MobileDatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BreadcrumbsComponent from '../components/breadcrumbs/Breadcrumbs';
import ModalComponent from '../components/modal/Modal';
import styles from './css/clientdetail.module.css'; // Import css modules stylesheet as styles
import frLocale from 'date-fns/locale/fr';
import { deleteClient, getClient, updateClient } from '../components/request/callapiClient';
import { convertDateFR } from '../utils';
import MapIcon from '@mui/icons-material/Map';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FolderIcon from '@mui/icons-material/Folder';

const ClientDetailPage = () => {


  let { id } = useParams();

  const navigate = useNavigate();


  const [isOpen, setIsOpen] = useState(false);

  const [isOpenDelete, setIsOpenDelete] = useState(false);

  const [value, setValue] = React.useState<Date | null>(new Date());


  const [dataClient, setDataClient]: any = useState([]);

  const [inputValues, setInputValues]: any = useState({});

  const handleOnChange = (event: { target: { name: string; value: any; }; }) => {

    const { name, value } = event.target;

    setInputValues({ ...inputValues, [name]: value });
  };

  useEffect(() => {
    getClient(id, setDataClient, setInputValues, setValue)
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
    updateClient(inputValues, id)
  }

  const handleDelete = () => {
    deleteClient(id);
  }



  return (
    <>
      <BreadcrumbsComponent customLabel={dataClient?.client_first_name + " " + dataClient?.client_last_name}></BreadcrumbsComponent>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headermain}>
            <img className={styles.imageclient} src="../profile.png" alt='image client' ></img>
            <div className={styles.labelclient}>
              <p className={styles.name}>{dataClient?.client_first_name + " " + dataClient?.client_last_name}</p>
              <p className={styles.clientsince}>Client ID : {id}</p>
              <p className={styles.clientsince}>Client depuis le : {convertDateFR(dataClient?.client_createdAt)}</p>
            </div>
          </div>
          <div className={styles.groupbutton}>
            <Button onClick={handleDialogOpen} className={styles.btnupdate}>Modifier</Button>
            <Button onClick={handleDialogDeleteOpen} className={styles.btndelete}>Supprimer</Button>
          </div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.detailsclient}>
          <h1>Détails du client</h1>
          <div className={styles.container}>
            <div className={styles.adresse}>
              <MapIcon color="primary" sx={{ fontSize: 50 }} />
              <h3>Adresse</h3>
              <p className={styles.detailslabel}>{dataClient?.client_adress}</p>
            </div>
            <div className={styles.birthday}>
              <CalendarMonthIcon color='success' sx={{ fontSize: 50 }} />
              <h3>Date de naissance</h3>
              <p className={styles.detailslabel}>{convertDateFR(dataClient?.client_birthday)}</p>
            </div>
            <div className={styles.folderInProgress}>
              <FolderIcon color="secondary" sx={{ fontSize: 50 }} />
              <h3>Affaires associées</h3>
              <ul>
                {dataClient?.cases?.map((element: any) => <li key={element.case_id} className={styles.detailslabel}>{"Affaire n° " + element.case_id + "  |  "} {element.case_status == 0 ? "En cours" : "Terminée"}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ModalComponent isOpen={isOpen} handleClose={handleDialogClose} title='Modification du client'>

        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

          <h1>Formulaire pour modifier le client</h1>

          <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <TextField
              style={{ width: "250px", margin: "5px" }}
              type="text"
              name="client_first_name"
              label="Firstname"
              variant="outlined"
              value={inputValues?.client_first_name}
              onChange={handleOnChange}
              required
            />
            <br />
            <TextField
              style={{ width: "250px", margin: "5px" }}
              type="text"
              name="client_last_name"
              label="Lastname"
              value={inputValues?.client_last_name}
              variant="outlined"
              onChange={handleOnChange}
              required
            />
            <br />
            <TextField
              style={{ width: "250px", margin: "5px" }}
              type="text"
              label="Adresse"
              name="client_adress"
              value={inputValues?.client_adress}
              variant="outlined"
              onChange={handleOnChange}
              required
            />
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              locale={frLocale}
            >
              <MobileDatePicker
                mask={'__/__/____'}
                label="Date d'anniversaire"
                value={value}
                onChange={(newValue) => {
                  setInputValues({ ...inputValues, "client_birthday": newValue });
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
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
          <h2>Etes-vous sur de vouloir supprimer le client {dataClient?.client_first_name + " " + dataClient?.client_last_name} ?</h2>
          <Button onClick={handleDelete} variant="contained" color="error">
            Supprimer
          </Button>
        </>
      </ModalComponent>
    </>
  )
}
export default ClientDetailPage