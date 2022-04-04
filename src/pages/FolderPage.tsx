import { LocalizationProvider, MobileDatePicker } from '@mui/lab';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ModalComponent from '../components/modal/Modal';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Button, MenuItem, TextField } from '@mui/material';
import { Table } from '../components/table/Table';
import Select, { SelectChangeEvent } from '@mui/material/Select';


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

    async function fetchData() {
      const request = await axios.get("http://pts6.local/api/cases");
 
      console.log(request.data)

      request.data.forEach((element: any) => element.concernedClientLabel = "");

      request.data.forEach((element: any) => element.concernedClientLabel += element.concernedClient.map((element: any) => (element.client_first_name + " " + element.client_last_name)));




      setDataCases(request.data);

      return request;
    }

    fetchData();

  }, []);
 
  const handleSubmit = () => {
    

    fetch("http://pts6.local/api/cases/save", {
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

  console.log(dataCases);


  return (
    <>
      FolderPage
      <Button onClick={handleDialogOpen}>Ajouter un dossier</Button>
      {<Table columns={[
        { title: "Code", field: "code" },
        { title: "Statut", field: "case_status" },
        { title: "Clients", field: "concernedClientLabel" },
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