import { MobileDatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ModalComponent from '../components/modal/Modal';

import { useTable } from 'react-table';
import styles from './css/clientdetail.module.css'; // I
import { loadClients, saveClient } from '../components/request/callapiClient';
import { NewTable } from '../components/table/NewTable';
import { Table } from '../components/table/Table';
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


  const handleSubmit = () => {
    saveClient(inputValues);
    setIsOpen(false);
  }

  useEffect(() => {
    loadClients(setDataClients);
  }, [isOpen]);

  console.log(dataClients);


  /* Zone test date
  var d = new Date(value || "2014-12-15T19:42:27.100Z");
  var iso_date_string = d.toISOString();
   produces "2014-12-15T19:42:27.100Z"
  var locale_date_string = d.toLocaleDateString();

  console.log(locale_date_string);*/



  const columns = React.useMemo(
    () => [
      {
        Header: 'Prénom',
        accessor: 'client_first_name',
      },
      {
        Header: 'Nom',
        accessor: 'client_last_name',
      },
    ],
    []
  )


  console.log(dataClients)
  return (
    <>


      <div className={styles.content}>

        <div className={styles.contenttablepage}>
          <h1>Listes des clients</h1>

          <Button onClick={handleDialogOpen} variant="contained" color="primary" >Ajouter un client</Button>
        </div>

        {/*<NewTable columns={columns} data={dataClients} /> */}

         <Table columns={[
          { title: "Prénom", field: "client_first_name", filtering: false },
          { title: "Nom de famille", field: "client_last_name", filtering: false }
        ]} dataFrom={dataClients}
          nameId="client_id"
        />
      </div>



      <ModalComponent isOpen={isOpen} handleClose={handleDialogClose}
        buttonAction={
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Ajouter
          </Button>
        }
        title="Ajout d'un client">
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

          <h2>Formulaire pour ajouter un client</h2>

          <form style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <TextField
              style={{ width: "250px", margin: "5px" }}
              type="text"
              name="client_first_name"
              label="Firstname"
              variant="outlined"
              onChange={handleOnChange}
              required
            />
            <br />
            <TextField
              style={{ width: "250px", margin: "5px" }}
              type="text"
              name="client_last_name"
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
              name="client_adress"
              variant="outlined"
              onChange={handleOnChange}
              required
            />
            <br />
            <LocalizationProvider
              dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                label="Date d'anniversaire"
                value={value}
                onChange={(newValue) => {
                  setInputValues({ ...inputValues, "client_birthday": newValue });
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField style={{ width: "250px", margin: "5px" }} {...params} />}
              />
            </LocalizationProvider>
            <br />
          </form>
        </div>
      </ModalComponent>
    </>
  )
}
export default ClientPage

