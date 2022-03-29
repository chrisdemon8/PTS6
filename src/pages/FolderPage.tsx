import React from 'react';  
import { Table } from '../components/table/Table';
const FolderPage = () => {
 
  return (
    <> 
    FolderPage

    <Table columns={[
        { title: "Code", field: "code" },
        { title: "Statut", field: "caseStatus" },
        { title: "Clients", field: "lastName" }, 
      ]} dataFrom={[
        { id: 1, code: 410252, caseStatus: true, lastName: "Dupont"  },
        { id: 2, code: 410251, caseStatus: false, lastName: "Sylvain"  }]}/> 
    </>
  )
} 
export default FolderPage