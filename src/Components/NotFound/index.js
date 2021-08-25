import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    alignment: {
        textAlign: 'center'
    },
    linkAlignment: {
        display: "flex",
        justifyContent: "center"
    }
}));

const NotFound = () => {
    const classes = useStyles()
    return (
        <>
            <div>
                <Typography variant='h2' className={classes.alignment}>404 - Not Found!</Typography>

            </div>
            <Link to="/" className={classes.linkAlignment}>
                Go Home
            </Link>
        </>
    )
};

export default NotFound;