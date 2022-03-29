import { Link } from '@material-ui/core';
import { Button, FormControlLabel, Switch, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BreadcrumbsComponent from '../components/breadcrumbs/Breadcrumbs';
import ModalComponent from '../components/modal/Modal';
import styles from './css/clientdetail.module.css'; // Import css modules stylesheet as styles

const FolderDetailPage = () => {


    let { id } = useParams();

    const [isOpen, setIsOpen] = useState(false);

    const [isOpenEvent, setIsOpenEvent] = useState(false);

    const [isOpenDelete, setIsOpenDelete] = useState(false);


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


    return (
        <>
            <BreadcrumbsComponent customLabel={"Dossier 5240252"}></BreadcrumbsComponent>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.headermain}>
                        <img className={styles.imageclient} src="https://icones.pro/wp-content/uploads/2021/04/icone-de-dossier-symbole-png-noir.png" alt='image dossier' ></img>
                        <div className={styles.labelclient}>
                            <p>Dossier ID : {id} Statut en cours</p>
                            <p>Affaire ouverte depuis le : date de l'API</p>
                        </div>
                    </div>
                    <div className={styles.groupbutton}>
                        <Button onClick={handleDialogOpen}>Modifier</Button>
                        <Button onClick={handleDialogDeleteOpen}>Supprimer</Button>
                    </div>
                </div>

                <div className={styles.adresse}>
                    <h3>Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis diam et justo hendrerit tincidunt. Nunc faucibus neque sit amet risus cursus cursus. Suspendisse sodales enim nunc, quis malesuada eros tincidunt nec. Mauris in orci massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ut nulla odio. Sed volutpat egestas nibh, a varius ex volutpat quis.

                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec luctus odio eu massa ultricies, non tempor sapien ultrices. Suspendisse ut mauris gravida, ullamcorper felis quis, aliquam quam. Nulla egestas aliquam pharetra. Cras placerat porta malesuada. Donec in mauris tempor, volutpat nunc eu, tincidunt mauris. Morbi congue magna a metus vestibulum sagittis et non tellus. Vestibulum congue vehicula quam non placerat. Praesent aliquam ipsum id rutrum tincidunt. Mauris viverra mattis varius. In consequat augue sapien, non maximus nibh fermentum sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum, dui eget interdum commodo, urna lectus pretium nibh, et bibendum mi diam sed augue. Donec quis tincidunt nunc.</p>
                </div>
                <div className={styles.birthday}>
                    <h3>Clients concernés</h3>
                    <p>Dupont Jean</p>
                </div>
                <div className={styles.folderInProgress}>
                    <h3>Evenement</h3>


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