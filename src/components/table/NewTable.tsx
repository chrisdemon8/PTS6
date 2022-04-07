import React, { forwardRef, useEffect, useState } from "react"; 
import { useLocation, useNavigate } from "react-router-dom";
import { useTable } from "react-table";

import styles from './../../pages/css/clientdetail.module.css'; 
 
export const NewTable = ({ columns, data }: any) => {

    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    
    const navigate = useNavigate();
 
    const location = useLocation();
 
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Render the UI for your table
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup: any) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column: any) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row: any, i: any) => {
                    prepareRow(row)
                    return (
                        <tr className={styles.rowstyle} {...row.getRowProps()}    onClick={() => navigate("/" + pathnames[0] + "/" + row.original.client_id )}>
                            {row.cells.map((cell: any) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}