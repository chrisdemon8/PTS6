import React, { forwardRef, useState } from "react";
import MaterialTable, { Column, Icons } from "@material-table/core";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid'; 
import {
    AddBox,
    ArrowDownward,
    Check,
    ChevronLeft,
    ChevronRight,
    Clear,
    DeleteOutline,
    Edit,
    FilterList,
    FirstPage,
    LastPage,
    Remove,
    SaveAlt,
    Search,
    ViewColumn
} from "@material-ui/icons";
import { Container } from "@material-ui/core";
import { Client } from "../../entity/type"; 
import { useNavigate } from 'react-router-dom';
 


const tableIcons: Icons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
        <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

type Props = {
    randData: Client[];
};

const columns: Array<Column<Client>> = [ 
    { title: "First Name", field: "firstName" } 
];


const localization = {
    'body.editRow.deleteText' :'Test'
}

const options = {
    paging: true,
    pageSize: 10,
    emptyRowsWhenPaging: false,
    pageSizeOptions: [10, 20, 50],
   

};

export const Table = ({ randData }: Props) => {

    const navigate = useNavigate();

    const [data, setData] = useState([
        { id: 1, firstName: 'a', lastName: "test"  },
        { id: 2, firstName: 'Baaaaran', lastName: "zt"  }]
    );

    return (
        <Container>
            <MaterialTable
                columns={columns}
                data={data}
                icons={tableIcons}
                options={options}
                onRowClick={(event, rowData) => { navigate("/clients/"+ rowData.id) }}
                localization={{body : { editRow: { deleteText : 'Êtes-vous sûr de supprimer cette ligne ?'}, deleteTooltip : "Supprimer"}}}
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve: any, reject: any) => {
                            setTimeout(() => {
                                setData([...data, newData]);

                                resolve();
                            }, 1000)
                        }),
                    onRowUpdate: (newData: any, oldData: any) =>
                        new Promise((resolve: any, reject: any) => {
                            setTimeout(() => {
                                const dataUpdate = [...data];
                                const index = oldData.tableData.id;
                                dataUpdate[index] = newData;
                                setData([...dataUpdate]);

                                resolve();
                            }, 1000)
                        }),
                    onRowDelete: oldData =>
                        new Promise((resolve: any, reject: any) => {
                            setTimeout(() => {
                                const dataDelete = [...data];
                                const index = oldData.tableData.id;
                                dataDelete.splice(index, 1);
                                setData([...dataDelete]);

                                resolve()
                            }, 1000)
                        }),
                }}


            />
        </Container>
    );
};
