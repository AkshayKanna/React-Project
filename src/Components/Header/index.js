import React from 'react';
import {
    AppBar, Toolbar, Tooltip, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Header = ({ Text, isDarkModeActive }) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        darkAppBar: {
            background: "#202124",
            borderBottom: isDarkModeActive && '1px solid #8ab4f8'
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={isDarkModeActive ? classes.darkAppBar : null}>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" className={classes.title}>
                        Giphy
                    </Typography>
                    <Tooltip title='Toogle light/dark theme' style={{
                        fontSize: 16
                    }}>
                        {Text}
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Header;