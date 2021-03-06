import { LocalizationProvider, MobileDatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Button, FormControlLabel, MenuItem, Select, SelectChangeEvent, Switch, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BreadcrumbsComponent from '../components/breadcrumbs/Breadcrumbs';
import ModalComponent from '../components/modal/Modal';
import styles from './css/folderdetail.module.css'; // Import css modules stylesheet as styles
import frLocale from 'date-fns/locale/fr';
import { deleteCase, deleteClientInCase, getCase, saveClientInCase, saveEventInCase, updateCase } from '../components/request/callapiCase';
import { getClientsName } from '../components/request/callapiClient';
import { convertDateFR } from '../utils';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EventIcon from '@mui/icons-material/Event';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


const FolderDetailPage = () => {

    let { id } = useParams();

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const [reload, setReload] = useState(false);

    const [isOpenEvent, setIsOpenEvent] = useState(false);

    const [isOpenClient, setIsOpenClient] = useState(false);

    const [isOpenDelete, setIsOpenDelete] = useState(false);


    const [inputValues, setInputValues]: any = useState({});

    const [inputValuesEvent, setInputValuesEvent]: any = useState({});
    const [valueDate, setValueDate] = React.useState<Date | null>(new Date());

    const [dataFolder, setDataFolder]: any = useState([]);

    useEffect(() => {
        getCase(id, setDataFolder, setInputValues, setState);

        setInputValuesEvent({ ...inputValuesEvent, "event_date": new Date() });
    }, [isOpen, isOpenEvent, isOpenClient, reload]);


    console.log(dataFolder);

    const handleOnChange = (event: { target: { name: string; value: any; }; }) => {

        const { name, value } = event.target;

        setInputValues({ ...inputValues, [name]: value });
    };

    const handleOnChangeEvent = (event: { target: { name: string; value: any; }; }) => {

        const { name, value } = event.target;

        setInputValuesEvent({ ...inputValuesEvent, [name]: value });
    };

    /* MODAL AREA */

    const handleDialogOpen = () => {
        setIsOpen(true);
    }

    const handleDialogClose = () => {
        setIsOpen(false);
    }

    const handleDialogDeleteOpen = () => {
        setIsOpenDelete(true);
    }

    const handleDialogDeleteClose = () => {
        setIsOpenDelete(false);
    }

    const handleDialogClientOpen = () => {
        setIsOpenClient(true);
    }

    const handleDialogClientClose = () => {
        setIsOpenClient(false);
    }


    const handleDialogEventOpen = () => {
        setIsOpenEvent(true);
    }

    const handleDialogEventClose = () => {
        setIsOpenEvent(false);
    }

    /* END MODAL AREA  */


    const handleSubmit = () => {
        updateCase(id, inputValues);
        setIsOpen(false);
    }

    const handleSubmitClient = () => {

        let link_id_client = clientSelect;
        saveClientInCase(id, link_id_client);
        setIsOpenClient(false);
    }

    const handleSubmitEvent = () => {
        saveEventInCase(id, inputValuesEvent);
        setIsOpenEvent(false);
    }

    const handleDelete = () => {
        deleteCase(id);
        navigate("/dossiers");
    }


    const handleDeleteClientInCase = (client_id: any) => {
        deleteClientInCase(id, client_id);
        setReload(!reload);
    }


    const [clientSelect, setClientSelect] = React.useState("1");

    const handleChangeSelect = (event: SelectChangeEvent) => {
        setClientSelect(event.target.value as string);
    };


    const [dataClients, setDataClients]: any = useState([]);
    useEffect(() => {
        getClientsName(setDataClients);
    }, []);

    const [state, setState] = React.useState(false);


    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(event.target.checked);

        setInputValues({ ...inputValues, case_status: event.target.checked });
    };


    console.log(dataFolder)
    return (
        <>
            <BreadcrumbsComponent customLabel={"Affaire " + dataFolder?.case_id}></BreadcrumbsComponent>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.headermain}>
                        <img className={styles.imageclient} src="../folder_icon.png" alt='image affaire' ></img>
                        <div className={styles.labelclient}>
                            <p className={styles.clientsince}>Affaire n?? ID : {id} {dataFolder?.case_status == 0 ? "En cours" : "Termin??e"}</p>
                            <p className={styles.clientsince}>Affaire ouverte depuis le : {convertDateFR(dataFolder?.case_createdAt)}</p>
                            {
                                dataFolder?.case_end_date != null ? <p className={styles.clientsince}>Affaire clotur??e depuis le : {convertDateFR(dataFolder?.case_end_date)}</p> : ""
                            }
                        </div>
                    </div>
                    <div className={styles.groupbutton}>

                        {
                            dataFolder?.case_end_date != null ? "" : <Button onClick={handleDialogOpen} className={styles.btnupdate} >Modifier</Button>
                        }

                        <Button color='error' onClick={handleDialogDeleteOpen} className={styles.btndelete}>Supprimer</Button>
                    </div>
                </div>

                <div className={styles.line}></div>

                <div className={styles.detailsclient}>
                    <h1>D??tails de l'affaire</h1>
                    <div className={styles.container}>

                        <div className={styles.adresse}>
                            <AssignmentIcon color="primary" sx={{ fontSize: 50 }} />
                            <h3>Description</h3>
                            <p>{dataFolder?.case_description}</p>
                        </div>
                        <div className={styles.birthday}>
                            <AccountBoxIcon color="success" sx={{ fontSize: 50 }} />
                            <h3>Clients concern??s</h3>
                            {dataFolder?.concernedClient?.map((element: any) =>

                                <p key={element.client_id}>{element.client_first_name + " " + element.client_last_name + "  "}


                                    {
                                        dataFolder?.case_end_date != null ? "" :
                                            <IconButton color='error' key={element.client_id} onClick={() => handleDeleteClientInCase(element.client_id)} aria-label="delete">
                                                <DeleteIcon key={element.client_id} />
                                            </IconButton>
                                    }

                                </p>

                            )}

                            {
                                dataFolder?.case_end_date != null ? "" :
                                    <Button onClick={handleDialogClientOpen}>Ajouter un client ?? l'affaire</Button>
                            }
                        </div>
                        <div className={styles.folderInProgress}>
                            <EventIcon color="secondary" sx={{ fontSize: 50 }} />
                            <h3>Evenements</h3>
                            <ul>
                                {dataFolder?.event?.map((element: any) => <li key={element.event_id}>{element.event_description + " " + convertDateFR(element.event_date) + " Dur??e " + element.event_duration + "h"}</li>)}
                            </ul>

                            <p>Temps total : {dataFolder?.totalTime}h</p>

                            {
                                dataFolder?.case_end_date != null ? "" :
                                    <Button onClick={handleDialogEventOpen}>Ajouter un ??venement</Button>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <ModalComponent isOpen={isOpen} handleClose={handleDialogClose}
                buttonAction={
                    <Button onClick={handleSubmit} variant="contained" color="primary">
                        Modifier
                    </Button>
                }
                title="Modification de l'affaire">

                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

                    <h1>Formulaire pour modifier une affaire</h1>

                    <form style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                        <TextField
                            style={{ width: "250px", margin: "5px" }}
                            type="text"
                            label="Description"
                            name='case_description'
                            value={inputValues?.case_description}
                            onChange={handleOnChange}
                            variant="outlined"
                            required
                        />
                        <br />
                        <FormControlLabel control={<Switch name="case_status" onChange={handleChangeCheckbox} value={state} />} label={state === false ? "En cours" : "Termin??e"} />
                        <br />
                        <br />

                    </form>

                </div>

            </ModalComponent>

            <ModalComponent isOpen={isOpenEvent} handleClose={handleDialogEventClose}
                buttonAction={
                    <Button onClick={handleSubmitEvent} variant="contained" color="primary">
                        Ajouter
                    </Button>
                }
                title="Ajout d'un ??v??nement">
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

                    <h1>Formulaire pour ajouter un ??v??nement ?? l'affaire</h1>

                    <form style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                        <TextField
                            style={{ width: "250px", margin: "5px" }}
                            type="text"
                            label="Description"
                            variant="outlined"
                            name='event_description'
                            onChange={handleOnChangeEvent}
                            required
                        />
                        <br />


                        <LocalizationProvider
                            dateAdapter={AdapterDateFns}
                            locale={frLocale}
                        >
                            <MobileDatePicker
                                mask={'__/__/____'}
                                label="Date de l'??v??nement"
                                value={valueDate}
                                onChange={(newValue) => {
                                    setInputValuesEvent({ ...inputValuesEvent, "event_date": newValue });
                                    setValueDate(newValue);
                                }}
                                renderInput={(params) => <TextField style={{ width: "250px", margin: "5px" }} {...params} />}
                            />
                        </LocalizationProvider>
                        <br />
                        <TextField
                            style={{ width: "250px", margin: "5px" }}
                            type="number"
                            label="Dur??e"
                            name='event_duration'
                            onChange={handleOnChangeEvent}
                            variant="outlined"
                            required
                        />
                        <br />

                    </form>
                </div>
            </ModalComponent>




            <ModalComponent isOpen={isOpenClient} handleClose={handleDialogClientClose}
                buttonAction={
                    <Button onClick={handleSubmitClient} variant="contained" color="primary">
                        Ajouter
                    </Button>
                }

                title="Ajout d'un client ?? l'affaire">
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

                    <h1>Formulaire pour ajouter un client ?? l'affaire</h1>

                    <form style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={clientSelect}
                            label="Client"
                            onChange={handleChangeSelect}
                        >

                            {dataClients?.map((client: any) => <MenuItem key={client.client_id} value={client.client_id}>{client.clientLabel}</MenuItem>)}

                        </Select>
                        <br />
                    </form>
                </div>
            </ModalComponent>

            <ModalComponent isOpen={isOpenDelete} handleClose={handleDialogDeleteClose}
                buttonAction={
                    <Button onClick={handleDelete} variant="contained" color="error">
                        Supprimer
                    </Button>
                }
                title="Suppression d'un client">
                <>
                    <h2>Etes-vous sur de vouloir supprimer l'affaire n?? {id} ?</h2>

                </>
            </ModalComponent>
        </>
    )
}
export default FolderDetailPage;