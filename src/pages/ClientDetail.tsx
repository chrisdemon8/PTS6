import { LocalizationProvider, MobileDatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BreadcrumbsComponent from '../components/breadcrumbs/Breadcrumbs';
import ModalComponent from '../components/modal/Modal';
import styles from './css/clientdetail.module.css'; // Import css modules stylesheet as styles
import frLocale from 'date-fns/locale/fr';

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

    async function fetchData() {
      const request = await axios.get("http://pts6.local/api/client/" + id);

      setDataClient(request.data[0]);
      setInputValues(request.data[0]);


      var date = new Date(Date.parse(request.data[0].client_birthday));
      setValue(date);
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
    console.log(inputValues, value)

    fetch(`http://pts6.local/api/client/${id}/update`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputValues),
      mode: 'no-cors',
      cache: 'default'
    }).then(function (response) {
      console.log("YES");
    })
      .catch(function (error) {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
      });
  }

  const handleDelete = () => { 
    fetch(`http://pts6.local/api/client/${id}/delete`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputValues),
      mode: 'no-cors',
      cache: 'default'
    }).then(function (response) {
      console.log("YES");
    })
      .catch(function (error) {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
      });
  }



  console.log(inputValues)

  return (
    <>
      <BreadcrumbsComponent customLabel={dataClient?.client_first_name + " " + dataClient?.client_last_name}></BreadcrumbsComponent>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headermain}>
            <img className={styles.imageclient} src="https://cdn-icons-png.flaticon.com/512/1250/1250689.png" alt='image client' ></img>
            <div className={styles.labelclient}>
              <p>Client ID : {id}</p>
              <p>Client depuis le : {(new Date(Date.parse(dataClient?.client_createdAt))).toLocaleString([], { day: 'numeric', month: 'numeric', year: 'numeric' })}</p>
            </div>
          </div>
          <div className={styles.groupbutton}>
            <Button onClick={handleDialogOpen}>Modifier</Button>
            <Button onClick={handleDialogDeleteOpen}>Supprimer</Button>
          </div>
        </div>

        <div className={styles.adresse}>
          <h3>Adresse</h3>
          <p>{dataClient?.client_adress}</p>
        </div>
        <div className={styles.birthday}>
          <h3>Date de naissance</h3>


          <p>{(new Date(Date.parse(dataClient?.client_birthday))).toLocaleString([], { day: 'numeric', month: 'numeric', year: 'numeric' })}</p>
        </div>
        <div className={styles.folderInProgress}>
          <h3>Dossier associés</h3>
          <ul>
            {dataClient?.cases?.map((element: any) => <li key={element.code}>{"Affaire n° " + element.code + "  |  "} {element.case_status == 0 ? "En cours" : "Terminée"}</li>)}
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
          <h2>Etes-vous sur de vouloir supprimer le client { } nom du client ?</h2>
          <Button onClick={handleDelete} variant="contained" color="error">
            Supprimer
          </Button>
        </>
      </ModalComponent>
    </>
  )
}
export default ClientDetailPage