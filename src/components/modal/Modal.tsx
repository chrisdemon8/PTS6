import * as React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';
import PropTypes, { InferProps } from 'prop-types';

export default function ModalComponent({ isOpen, handleClose, title, subtitle, children, buttonAction }: InferProps<typeof ModalComponent.propTypes>) {
    return (
        <>
            <Dialog
                fullWidth
                maxWidth='md'
                open={isOpen}
                onClose={handleClose}
                aria-labelledby='max-width-dialog-title'
            >
                <DialogTitle id='max-width-dialog-title'>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{subtitle}</DialogContentText>
                    {children}
                </DialogContent>
                <DialogActions>
                {buttonAction}
                    <Button onClick={handleClose} color='primary'>
                        Fermer
                    </Button>
                </DialogActions> 
            </Dialog> 
        </>
    );
};


ModalComponent.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    children: PropTypes.element.isRequired,
    buttonAction: PropTypes.element.isRequired,
};
