import React, { useState, useEffect } from "react";
import Header from "../Header";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import SimpleBackdrop from "../Loader";
import GlobalError from "../GlobalError";

import {
    TextField, Button, InputAdornment, Tooltip,
    TablePagination, Typography, Switch, Grid, Paper,
    Card, Avatar, CardHeader, CardActionArea, CardActions,
    CardContent, CardMedia
} from '@material-ui/core';

import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    alignGifs: {
        display: "flex",
        flexWrap: "wrap",
    },
    gifsPadding: {
        padding: '1vw'
    },
    darkAppBar: {
        background: "#202124"
    },
    media: {
        height: 200,
    },
    underline: {
        "&:before": {
            borderBottomColor: "#8ab4f8",
            borderWidth: "2px",
        },
        "&:after": {
            borderBottomColor: "#8ab4f8",
            borderWidth: "2px"
        }
    },
    tablePaginationCaption: {
        color: '#8ab4f8'
    },
    tablePaginationSelectIcon: {
        color: '#8ab4f8'
    },
    tablePaginationSelect: {
        color: '#8ab4f8'
    },
    tablePaginationActions: {
        color: '#8ab4f8'
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const SearchByGiphy = () => {
    const classes = useStyles();

    const [gigphyData, setGiphyData] = React.useState([]);
    const [error, setError] = useState(false);
    const [searchByName, setSearchByName] = React.useState('');
    const [loader, setLoader] = useState(false);
    const [snackbarShow, setSnackBar] = React.useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [rowPerPage, setRowPerPage] = useState(8);
    const [isDarkModeActive, setIsDarkModeActive] = useState(false);

    const handleSubmit = async () => {
        setLoader(true);
        setError(false);
        try {
            const result = await axios("https://api.giphy.com/v1/gifs/search", {
                params: {
                    api_key: "MhJmZckh9QS53Q6KJUZHF5NdyFUPZi0D",
                    q: searchByName,
                    limit: 1000
                }
            });
            setGiphyData([...result.data.data]);
        } catch (err) {
            setError(true);
        }
        setLoader(false);
    };

    const longDateFormat = (x) => {
        let dateString = new Date(x);
        let dateObject = dateString.toString();
        let res = dateObject.slice(4, 15);
        return res;
    }

    const displayGifs = () => {
        return (
            <Grid container spacing={2}>
                {
                    gigphyData.slice(currentPage * rowPerPage, (currentPage + 1) * rowPerPage).map(el => {
                        return (
                            <Grid key={el.id} item xs={12} sm={6} md={4} lg={3} >
                                <Card style={{
                                    background: isDarkModeActive && '#424242',
                                }}>
                                    <CardHeader
                                        avatar={
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                                {el.title.charAt(0).toUpperCase()}
                                            </Avatar>
                                        }
                                        title={
                                            <Typography variant='body1' style={{
                                                color: isDarkModeActive && '#fff'
                                            }}>
                                                {el.title}
                                            </Typography>
                                        }
                                        subheader={
                                            <Typography variant='body2' style={{
                                                color: isDarkModeActive ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.54)'
                                            }}>
                                                {longDateFormat(el.import_datetime)}
                                            </Typography>
                                        }
                                        style={{
                                            minHeight: '4vw'
                                        }}
                                    />
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={el.images.fixed_height.url}
                                        />
                                        <CardContent style={{ minHeight: "100px" }}>
                                            <Typography style={{
                                                color: isDarkModeActive && 'rgba(255, 255, 255, 0.7)'
                                            }}>
                                                {el.user && el.user.description ? el.user.description : 'No Description Available'}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions style={{
                                        padding: '5px 10px'
                                    }}>
                                        <a href={el.url} target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                            <Button size="small" color={isDarkModeActive ? "" : "primary"} variant='contained'>
                                                View
                                            </Button>
                                        </a>
                                        <a href={el.user && el.user.profile_url ? el.user.profile_url : '#'} target='_blank' rel="noopener noreferrer" style={{ pointerEvents: el.user && el.user.profile_url ? 'auto' : 'none', textDecoration: 'none' }}>
                                            <Button size="small" color={isDarkModeActive ? "" : "primary"} variant='contained'
                                                disabled={
                                                    el.user && el.user.profile_url ? false : true
                                                }
                                            >
                                                {el.user && el.user.profile_url ? 'Profile' : 'No Profile'}
                                            </Button>
                                        </a>
                                    </CardActions>
                                </Card>
                            </Grid>
                        );
                    })
                }
            </Grid>
        )
    };

    useEffect(() => {
        error ? setSnackBar(true) : setSnackBar(false);
    }, [error]);

    return (
        <div>
            <SimpleBackdrop
                open={loader || ''}
                value={loader ? 'Loading Data... please wait' : ''}
            />
            <GlobalError error={error} open={snackbarShow} />
            <Header
                Text={
                    <Tooltip title='Toogle light/dark theme' style={{
                        fontSize: 16
                    }}>
                        <Switch
                            color="default"
                            checked={isDarkModeActive}
                            onChange={(e) => {
                                setIsDarkModeActive(e.target.checked)
                            }}
                            icon={<Brightness5Icon />}
                            checkedIcon={<Brightness4Icon />}
                        />
                    </Tooltip>
                }
                isDarkModeActive={isDarkModeActive}
            />
            <div style={{
                padding: "1vw 2vw",
                background: isDarkModeActive && "#202124",
                height: "100%"
            }}>
                <TextField
                    id="input-with-icon-textfield"
                    label="Search By Name"
                    value={searchByName || ''}
                    onChange={(e) => {
                        setSearchByName(e.target.value);
                        setCurrentPage(0);
                    }}
                    inputProps={{
                        style: {
                            color: isDarkModeActive && '#8ab4f8'
                        }
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" style={{
                                color: isDarkModeActive && '#8ab4f8'
                            }}>
                                <SearchIcon />
                            </InputAdornment>
                        ),
                        classes: {
                            underline: isDarkModeActive && classes.underline
                        }
                    }}
                    InputLabelProps={{
                        style: { color: isDarkModeActive && '#8ab4f8' }
                    }}
                    style={{
                        verticalAlign: 'middle',
                        color: '#fff',
                        width: "50%"
                    }}
                />
                <Button variant='contained' color={isDarkModeActive ? 'default' : 'primary'} onClick={handleSubmit} style={{
                    verticalAlign: 'bottom',
                    margin: '0vw 1vw',
                    backgroundColor: isDarkModeActive && '#8ab4f8',
                    color: isDarkModeActive && '#202124'
                }}
                    disabled={searchByName === '' ? true : false}
                >
                    search
                </Button>

                {
                    gigphyData && gigphyData.length ?
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <Grid>
                                <TablePagination
                                    count={(gigphyData || []).length}
                                    onPageChange={(e, page) => { setCurrentPage(page) }}
                                    page={currentPage}
                                    rowsPerPage={rowPerPage}
                                    rowsPerPageOptions={[4, 8, 12, 16, 20]}
                                    onRowsPerPageChange={(e) => { setRowPerPage(e.target.value); setCurrentPage(0); }}
                                    labelRowsPerPage={'Gifs per page:'}
                                    classes={{
                                        caption: isDarkModeActive && classes.tablePaginationCaption,
                                        selectIcon: isDarkModeActive && classes.tablePaginationSelectIcon,
                                        select: isDarkModeActive && classes.tablePaginationSelect,
                                        actions: isDarkModeActive && classes.tablePaginationActions,
                                    }}
                                />
                            </Grid>
                        </Grid> : null
                }

                {
                    gigphyData && gigphyData.length ?
                        <Paper style={{
                            boxShadow: "none",
                            background: isDarkModeActive ? "#333" : '#F7F7FA 0% 0% no-repeat padding-box',
                        }}>
                            <div style={{ padding: "2vw" }}>
                                {displayGifs()}
                            </div>
                        </Paper>
                        : null
                }
            </div>
        </div>
    )
}
export default SearchByGiphy;