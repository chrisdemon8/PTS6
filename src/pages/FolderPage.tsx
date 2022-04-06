import { LocalizationProvider, MobileDatePicker } from '@mui/lab';
import React, { useEffect, useState } from 'react';
import ModalComponent from '../components/modal/Modal';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Button, MenuItem, TextField } from '@mui/material';
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

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  useEffect(() => {
    getCases(setDataCases);
  }, []);

  const handleSubmit = () => {
    saveCase(inputValues);
  }

  return (
    <>
      FolderPage
      <Button onClick={handleDialogOpen}>Ajouter un dossier</Button>
      {<Table columns={[
        { title: "Code", field: "code", filtering: false },
        { title: "Statut", field: "statusLabel" },
        { title: "Clients", field: "concernedClientLabel", filtering: false },
      ]}
        dataFrom={dataCases}
        nameId="case_id"
      />}


      <ModalComponent isOpen={isOpen} handleClose={handleDialogClose} title="Ajout d'un évènement">
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
export default FolderPage