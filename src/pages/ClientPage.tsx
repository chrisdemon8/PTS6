import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from '../components/table/Table';
import { data } from "../utils";

const ClientPage = () => {

  const [dataClients, setDataClients]: any = useState([]);

  useEffect(() => {

    async function fetchData() {
      const request = await axios.get("http://pts6.local/api/clients");
 
 
      setDataClients(request.data);
 
      return request;
    }

    fetchData();

  }, []);

  console.log(dataClients); 

  return (
    <>
      ClientPage
      <Table columns={[
        { title: "Prénom", field: "client_first_name" },
        { title: "Nom de famille", field: "client_last_name" }
      ]} dataFrom={dataClients}
      nameId = "client_id"
      />
    </>
  )
}
export default ClientPage