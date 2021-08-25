import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: 2000,
        color: '#fff',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        padding: 10,
    },
}));

const SimpleBackdrop = ({ open, value }) => {
    const classes = useStyles();

    return (
        <Backdrop className={classes.backdrop} open={open ? open : false}>
            <Typography className={classes.text} variant="subtitle1">
                {value || 'Loading.... Please Wait'}
            </Typography>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default SimpleBackdrop;
