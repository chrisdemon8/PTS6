import { LocalizationProvider, MobileDatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Button, FormControlLabel, MenuItem, Select, SelectChangeEvent, Switch, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BreadcrumbsComponent from '../components/breadcrumbs/Breadcrumbs';
import ModalComponent from '../components/modal/Modal';
import styles from './css/clientdetail.module.css'; // Import css modules stylesheet as styles
import frLocale from 'date-fns/locale/fr';

const FolderDetailPage = () => {

    let { id } = useParams();

    const [isOpen, setIsOpen] = useState(false);

    const [isOpenEvent, setIsOpenEvent] = useState(false);

    const [isOpenClient, setIsOpenClient] = useState(false);

    const [isOpenDelete, setIsOpenDelete] = useState(false);


    const [inputValues, setInputValues]: any = useState({});

    const [inputValuesEvent, setInputValuesEvent]: any = useState({});
    const [valueDate, setValueDate] = React.useState<Date | null>(new Date());

    const [dataFolder, setDataFolder]: any = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get("http://pts6.local/api/case/" + id);
            setDataFolder(request.data[0]);
            setInputValues(request.data[0]);


            return request;
        }

        fetchData();
    }, []);


    const handleOnChange = (event: { target: { name: string; value: any; }; }) => {

        const { name, value } = event.target;

        setInputValues({ ...inputValues, [name]: value });
    };

    const handleOnChangeEvent = (event: { target: { name: string; value: any; }; }) => {

        const { name, value } = event.target;

        setInputValuesEvent({ ...inputValuesEvent, [name]: value });
    };


    console.log(inputValuesEvent)

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



    console.log(inputValues);

    const handleSubmit = () => {
        fetch(`http://pts6.local/api/case/${id}/update`, {
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
    }



    const handleSubmitClient = () => {
        fetch(`http://pts6.local/api/case/${id}/client/save`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 'link_id_client': 2 }),
            mode: 'no-cors',
            cache: 'default'
        }).then(function (response) {
            console.log("YES");
        })
            .catch(function (error) {
                console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            });
    }

    const handleSubmitEvent = () => {
        fetch(`http://pts6.local/api/case/${id}/event/save`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputValuesEvent),
            mode: 'no-cors',
            cache: 'default'
        }).then(function (response) {
            console.log("YES");
        })
            .catch(function (error) {
                console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            });
    }

    const handleDelete = () => {

        fetch(`http://pts6.local/api/case/${id}/delete`, {
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
    }



    const [clientSelect, setClientSelect] = React.useState('');

    const handleChangeSelect = (event: SelectChangeEvent) => {
        setClientSelect(event.target.value as string);
    };

    return (
        <>
            <BreadcrumbsComponent customLabel={"Dossier " + dataFolder?.code}></BreadcrumbsComponent>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.headermain}>
                        <img className={styles.imageclient} src="https://icones.pro/wp-content/uploads/2021/04/icone-de-dossier-symbole-png-noir.png" alt='image dossier' ></img>
                        <div className={styles.labelclient}>
                            <p>Dossier ID : {id} {dataFolder?.case_status == 0 ? "En cours" : "Terminée"}</p>
                            <p>Affaire ouverte depuis le : {dataFolder?.case_createdAt}</p>
                        </div>
                    </div>
                    <div className={styles.groupbutton}>
                        <Button onClick={handleDialogOpen}>Modifier</Button>
                        <Button color='error' onClick={handleDialogDeleteOpen}>Supprimer</Button>
                    </div>
                </div>

                <div className={styles.adresse}>
                    <h3>Description</h3>
                    <p>{dataFolder?.case_description}</p>
                </div>
                <div className={styles.birthday}>
                    <h3>Clients concernés</h3>
                    {dataFolder?.concernedClient?.map((element: any) => <p key={element.client_id}>{element.client_first_name + " " + element.client_last_name + "  "}</p>)}
                    <Button onClick={handleDialogClientOpen}>Ajouter un client à l'affaire</Button>
                </div>
                <div className={styles.folderInProgress}>
                    <h3>Evenement</h3>
                    <ul>
                        {dataFolder?.event?.map((element: any) => <li key={element.event_id}>{element.event_description + " " + element.event_date + " Durée " + element.event_duration + "h"}</li>)}
                    </ul>


                    <Button onClick={handleDialogEventOpen}>Ajouter un évenement</Button>
                </div>
            </div>

            <ModalComponent isOpen={isOpen} handleClose={handleDialogClose} title='Modification du client'>

                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

                    <h1>Formulaire pour modifier un dossier</h1>

                    <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
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
                        <FormControlLabel control={<Switch name="case_status" onChange={handleOnChange} value={inputValues?.case_status == 0 ? true : inputValues?.case_status == 1 ? false : !inputValues?.case_status} />} label={inputValues?.case_status == 0 || false ? "En cours" : "Terminée"} />
                        <br />
                        <br />
                        <Button onClick={handleSubmit} style={{ width: "250px", margin: "5px" }} variant="contained" color="primary">
                            save
                        </Button>
                    </form>

                </div>

            </ModalComponent>

            <ModalComponent isOpen={isOpenEvent} handleClose={handleDialogEventClose} title="Ajout d'un évènement">
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

                    <h1>Formulaire pour ajouter un évènement au dossier</h1>

                    <form onSubmit={handleSubmitEvent} style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
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
                                label="Date de l'évènement"
                                value={valueDate}
                                onChange={(newValue) => {
                                    setInputValuesEvent({ ...inputValuesEvent, "event_date": newValue });
                                    setValueDate(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <br />
                        <TextField
                            style={{ width: "250px", margin: "5px" }}
                            type="number"
                            label="Durée"
                            name='event_duration'
                            onChange={handleOnChangeEvent}
                            variant="outlined"
                            required
                        />
                        <br />
                        <br />
                        <Button type="submit" style={{ width: "250px", margin: "5px" }} variant="contained" color="primary">
                            Ajouter
                        </Button>
                    </form>
                </div>
            </ModalComponent>




            <ModalComponent isOpen={isOpenClient} handleClose={handleDialogClientClose} title="Ajout d'un évènement">
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

                    <h1>Formulaire pour ajouter un client à l'affaire</h1>

                    <form onSubmit={handleSubmitClient} style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={clientSelect}
                            label="Client"
                            onChange={handleChangeSelect}
                        >
                            <MenuItem value={10}>Robert</MenuItem>
                            <MenuItem value={20}>Jean</MenuItem>
                            <MenuItem value={30}>Jacques</MenuItem>
                        </Select>
                        <br />
                        <br />
                        <Button onClick={handleSubmitClient} style={{ width: "250px", margin: "5px" }} variant="contained" color="primary">
                            Ajouter
                        </Button>
                    </form>
                </div>
            </ModalComponent>

            <ModalComponent isOpen={isOpenDelete} handleClose={handleDialogDeleteClose} title="Suppression d'un client">
                <>
                    <h2>Etes-vous sur de vouloir supprimer le dossier { } n° du dossier ?</h2>
                    <Button onClick={handleDelete} variant="contained" color="error">
                        Supprimer
                    </Button>
                </>
            </ModalComponent>
        </>
    )
}
export default FolderDetailPage;