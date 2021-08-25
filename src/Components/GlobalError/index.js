import React, { useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const snackBarTheme = createTheme({
    overrides: {
        MuiSnackbarContent: {
            root: {
                fontSize: '0.875rem',
            },
        },
    },
});

export default function GlobalError({ error, open, onclose }) {
    const [internalOpen, setInternalOpen] = React.useState(false);
    useEffect(() => {
        if (open === true) {
            setInternalOpen(true);
        }
    }, [open]);

    return (
        <ThemeProvider theme={snackBarTheme}>
            <Snackbar
                style={{
                    paddingRight: 100,
                    paddingBottom: 20,
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={internalOpen}
                autoHideDuration={3000}
                onClose={() => {
                    setInternalOpen(false);
                    if (onclose) onclose();
                }}
            >
                <SnackbarContent
                    style={{
                        backgroundColor: "#cc0000",
                    }}
                    message={'Unable to fetch the gifs...' || ''}
                />
            </Snackbar>
        </ThemeProvider>
    );
}
