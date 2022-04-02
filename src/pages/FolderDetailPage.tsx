import { Link } from '@material-ui/core';
import { Button, FormControlLabel, Switch, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BreadcrumbsComponent from '../components/breadcrumbs/Breadcrumbs';
import ModalComponent from '../components/modal/Modal';
import styles from './css/clientdetail.module.css'; // Import css modules stylesheet as styles

const FolderDetailPage = () => {


    let { id } = useParams();

    const [isOpen, setIsOpen] = useState(false);

    const [isOpenEvent, setIsOpenEvent] = useState(false);

    const [isOpenDelete, setIsOpenDelete] = useState(false);


    const [dataFolder, setDataFolder]: any = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get("http://pts6.local/api/case/" + id);



            setDataFolder(request.data);


            return request;
        }

        fetchData();

    }, []);


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

    const handleDialogEventOpen = () => {
        setIsOpenEvent(true);
    }

    const handleDialogEventClose = () => {
        setIsOpenEvent(false);
    }

    const handleSubmit = () => {
        alert("modification d'un dossier");
    }

    console.log(dataFolder[0])


    return (
        <>
            <BreadcrumbsComponent customLabel={"Dossier " + dataFolder[0]?.code}></BreadcrumbsComponent>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.headermain}>
                        <img className={styles.imageclient} src="https://icones.pro/wp-content/uploads/2021/04/icone-de-dossier-symbole-png-noir.png" alt='image dossier' ></img>
                        <div className={styles.labelclient}>
                            <p>Dossier ID : {id} {dataFolder[0]?.case_status == 0 ? "En cours" : "Terminée"}</p>
                            <p>Affaire ouverte depuis le : {dataFolder[0]?.case_createdAt}</p>
                        </div>
                    </div>
                    <div className={styles.groupbutton}>
                        <Button onClick={handleDialogOpen}>Modifier</Button>
                        <Button onClick={handleDialogDeleteOpen}>Supprimer</Button>
                    </div>
                </div>

                <div className={styles.adresse}>
                    <h3>Description</h3>
                    <p>{dataFolder[0]?.case_description}</p>
                </div>
                <div className={styles.birthday}>
                    <h3>Clients concernés</h3>
                    {dataFolder[0]?.concernedClient.map((element: any) => <p key={element.client_id}>{element.client_first_name + " " + element.client_last_name + "  "}</p>)}
               
                </div>
                <div className={styles.folderInProgress}>
                    <h3>Evenement</h3>

                    <ul>
                    {dataFolder[0]?.event.map((element: any) => <li key={element.event_id}>{element.event_description + " " + element.event_date + " Durée " + element.event_duration + "h"}</li>)}
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
                            variant="outlined"
                            required
                        />
                        <br />
                        <TextField
                            style={{ width: "250px", margin: "5px" }}
                            type="text"
                            label="Date d'ouverture"
                            variant="outlined"
                            required
                        />
                        <br />
                        <FormControlLabel control={<Switch defaultChecked />} label="En cours" />
                        <br />
                        <br />
                        <Button type="submit" style={{ width: "250px", margin: "5px" }} variant="contained" color="primary">
                            save
                        </Button>
                    </form>

                </div>

            </ModalComponent>

            <ModalComponent isOpen={isOpenEvent} handleClose={handleDialogEventClose} title="Ajout d'un évènement">
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

                    <h1>Formulaire pour ajouter un évènement au dossier</h1>

                    <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                        <TextField
                            style={{ width: "250px", margin: "5px" }}
                            type="text"
                            label="Description"
                            variant="outlined"
                            required
                        />
                        <br />
                        <TextField
                            style={{ width: "250px", margin: "5px" }}
                            type="text"
                            label="Date"
                            variant="outlined"
                            required
                        />
                        <br />
                        <TextField
                            style={{ width: "250px", margin: "5px" }}
                            type="text"
                            label="Durée"
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

            <ModalComponent isOpen={isOpenDelete} handleClose={handleDialogDeleteClose} title="Suppression d'un client">
                <>
                    <h2>Etes-vous sur de vouloir supprimer le dossier { } n° du dossier ?</h2>
                    <Button href="/clients" variant="contained" color="error">
                        Supprimer
                    </Button>
                </>
            </ModalComponent>
        </>
    )
}
export default FolderDetailPage;