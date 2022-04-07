import { LocalizationProvider, MobileDatePicker } from '@mui/lab';
import React, { useEffect, useState } from 'react';
import ModalComponent from '../components/modal/Modal';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Button, MenuItem, TextField } from '@mui/material';
import styles from './css/clientdetail.module.css';
import { Table } from '../components/table/Table';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getCases, saveCase } from '../components/request/callapiCase';


const FolderPage = () => {


  const [dataCases, setDataCases]: any = useState([]);


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


  useEffect(() => {
    getCases(setDataCases);
  }, [isOpen]);

  const handleSubmit = () => {
    saveCase(inputValues);
    setIsOpen(false);
  }

  return (
    <>
      <div className={styles.content}>
        <div className={styles.contenttablepage}>
          <h1>Listes des affaires</h1>
          <Button onClick={handleDialogOpen}>Ajouter une affaire</Button>

        </div>
        {<Table columns={[
          { title: "Code", field: "case_id", filtering: false },
          { title: "Statut", field: "statusLabel" },
          { title: "Clients", field: "concernedClientLabel", filtering: false },
        ]}
          dataFrom={dataCases}
          nameId="case_id"
        />}

      </div>
      <ModalComponent isOpen={isOpen} handleClose={handleDialogClose}
        buttonAction={
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Ajouter
          </Button>
        }
        title="Ajout d'un évènement">
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

          <h2>Formulaire pour ajouter un client</h2>

          <form style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <TextField
              style={{ width: "250px", margin: "5px" }}
              type="text"
              name="case_description"
              label="Description"
              variant="outlined"
              onChange={handleOnChange}
              required
            />
            <br />

          </form>
        </div>
      </ModalComponent>
    </>

  )
}
export default FolderPage