import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from '../components/table/Table';
const FolderPage = () => {


  const [dataCases, setDataCases]: any = useState([]);

  useEffect(() => {

    async function fetchData() {
      const request = await axios.get("http://pts6.local/api/cases");



      request.data.forEach((element: any) => element.concernedClientLabel = "");

      request.data.forEach((element: any) => element.concernedClientLabel += element.concernedClient.map((element: any) => (element.client_first_name + " " + element.client_last_name)));

      
      setDataCases(request.data);

      return request;
    }

    fetchData();

  }, []);

  console.log(dataCases);


  return (
    <>
      FolderPage
  
      {<Table columns={[
        { title: "Code", field: "code" },
        { title: "Statut", field: "case_status" },
        { title: "Clients", field: "concernedClientLabel" },
      ]}
        dataFrom={dataCases}
        nameId="case_id"
      />}
    </>



  )
}
export default FolderPage