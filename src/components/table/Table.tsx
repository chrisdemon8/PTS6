import React, { forwardRef, useEffect, useState } from "react";
import MaterialTable, { Icons } from "@material-table/core";
// @ts-ignore 
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
} from "@mui/icons-material";
import Container from '@mui/material/Container';
import { Client, RowType } from "../../entity/type";
import { useLocation, useNavigate } from 'react-router-dom';
import { Checkbox, MenuItem, Select } from "@mui/material";



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



const localization = {
    'body.editRow.deleteText': 'Test'
}

const options = {
    paging: true,
    pageSize: 10,
    emptyRowsWhenPaging: false,
    pageSizeOptions: [10, 20, 50],
    filtering: true
};

export const Table = ({ columns, dataFrom, nameId }: any) => {

    const navigate = useNavigate();

    const [data, setData] = useState(dataFrom);


    const location = useLocation();

    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <Container>
            <MaterialTable
                title={""}
                columns={columns}
                data={dataFrom}
                icons={tableIcons}
                options={options}
                onRowClick={(event, rowData) => { navigate("/" + pathnames[0] + "/" + rowData[nameId]) }}
                localization={{ body: { editRow: { deleteText: '??tes-vous s??r de supprimer cette ligne???' }, deleteTooltip: "Supprimer" } }}

            />
        </Container>
    );
};
