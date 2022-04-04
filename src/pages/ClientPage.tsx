import { MobileDatePicker } from '@mui/lab';
import axios from 'axios';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ModalComponent from '../components/modal/Modal';
import { Table } from '../components/table/Table';
import styles from './css/clientdetail.module.css'; // I
const ClientPage = () => {

  const [dataClients, setDataClients]: any = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const [inputValues, setInputValues] = useState({});

  const handleOnChange = (event: { target: { name: string; value: any; }; }) => {

    const { name, value } = event.target;

    setInputValues({ ...inputValues, [name]: value });
  };

  const handleDialogOpen = () => {
    setIsOpen(true);
  }

  const handleDialogClose = () => {
    setIsOpen(false);
  }

  const [value, setValue] = React.useState<Date | null>(new Date());

  console.log(inputValues, value)

  let axiosConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      'X-Custom-Header': 'value'
    }
  };

  const handleSubmit = () => {
    console.log(inputValues, value)

    fetch("http://pts6.local/api/clients/save", {
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

    /*axios.post('http://pts6.local/api/clients/save', inputValues, axiosConfig).then(function (response) {
      console.log(response.data);
    });
    alert("modification d'un dossier");*/
  }

  useEffect(() => {

    async function fetchData() {
      const request = await axios.get("http://pts6.local/api/clients");

      setDataClients(request.data);

      return request;
    }

    fetchData();

  }, []);

  console.log(dataClients);

  var d = new Date(value || "2014-12-15T19:42:27.100Z");
  var iso_date_string = d.toISOString();
  // produces "2014-12-15T19:42:27.100Z"
  var locale_date_string = d.toLocaleDateString();

  console.log(locale_date_string);



  return (
    <>


      <div className={styles.content}>
        <h1>Listes des clients</h1>
        <Button onClick={handleDialogOpen}>Ajouter un client</Button>
        <Table columns={[
          { title: "Prénom", field: "client_first_name" },
          { title: "Nom de famille", field: "client_last_name" }
        ]} dataFrom={dataClients}
          nameId="client_id"
        />

      </div>



      <ModalComponent isOpen={isOpen} handleClose={handleDialogClose} title="Ajout d'un évènement">
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

          <h2>Formulaire pour ajouter un client</h2>

          <form style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <TextField
              style={{ width: "250px", margin: "5px" }}
              type="text"
              name="firstname"
              label="Firstname"
              variant="outlined"
              onChange={handleOnChange}
              required
            />
            <br />
            <TextField
              style={{ width: "250px", margin: "5px" }}
              type="text"
              name="lastname"
              label="Lastname"
              variant="outlined"
              onChange={handleOnChange}
              required
            />
            <br />
            <TextField
              style={{ width: "250px", margin: "5px" }}
              type="text"
              label="Adresse"
              name="address"
              variant="outlined"
              onChange={handleOnChange}
              required
            />
            <LocalizationProvider
              dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                label="For mobile"
                value={value}
                onChange={(newValue) => {
                  setInputValues({ ...inputValues, "date": newValue });
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <br />
            <br />
            <Button onClick={handleSubmit} style={{ width: "250px", margin: "5px" }} variant="contained" color="primary">
              Ajouter
            </Button>
          </form>
        </div>
      </ModalComponent>
    </>
  )
}
export default ClientPage