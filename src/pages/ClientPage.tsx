import React from 'react';
import { Table } from '../components/table/Table';
import { data } from "../utils";

const ClientPage = () => {

  return (
    <>
      ClientPage
      <Table columns={[
        { title: "Prénom", field: "firstName" },
        { title: "Nom de famille", field: "lastName" }
      ]} dataFrom={[
        { id: 1, firstName: 'a', lastName: "test"  },
        { id: 2, firstName: 'Baaaaran', lastName: "zt"  }]}/>
    </>
  )
}
export default ClientPage