import { createTheme } from '@material-ui/core/styles';

export const newTheme = createTheme({
    palette: {
        primary: {
            main: '#0080a2',
        },
        secondary: {
            main: '#00ccc2',
        },
        danger: {
            main: 'red',
        },
    },
    typography: {
        button: {
            fontFamily: 'Poppins, sans-serif',
            fontSize: 14,
        },
        fontFamily: 'Poppins, sans-serif',
        fontSize: 12,
    },
    overrides: {
        MuiBackdrop: {
            root: {
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
            },
        },
        MuiButton: {
            root: {
                borderRadius: 25,
                padding: '2px 20px',
                outline: 'none !important',
            },
            outlined: {
                padding: '2px 20px',
                outline: 'none !important',
            },
        },
        MuiIconButton: {
            root: {
                outline: 'none !important',
            },
        },
        MuiFormControl: {
            marginDense: {
                margin: '0px !important',
            },
            marginNormal: {
                margin: '0px !important',
            },
        },
        MuiTooltip: {
            tooltip: {
                fontSize: '11px',
                fontWeight: 'bold',
            },
        },
        MuiTableCell: {
            root: {
                borderBottom: "none"
            }
        }
    },
});

export default newTheme;