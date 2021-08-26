import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Header from "../Header";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
const useStyles = makeStyles((theme) => ({
    image: {
        backgroundImage: 'url(./search.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        height: "75vh"
    }
}));

const Landing = () => {
    const classes = useStyles();

    return (
        <div>
            <Header></Header>
            <Grid container className={classes.root}>
                <Grid item xs={false} sm={4} md={7} lg={6} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} lg={6} style={{
                    alignSelf: "center",
                }}>
                    <Typography variant="h6" style={{
                        color: '#2B2B2B',
                        fontSize: 28,
                        fontWeight: "bold",
                        letterSpacing: "- 1.35px"
                    }}>
                        Let's make everyone Happy ....
                    </Typography>
                    <Typography variant='body2' component='p' style={{
                        fontSize: "18px",
                        color: '#2B2B2B',
                        letterSpacing: "- .45px",
                        lineHeight: "35px"
                    }}>
                        GIFs can break the tedium of long paragraphs of text, make <br></br>
                        your readers pause and chuckle, and transform your blog <br></br>into a lively, relatable piece.
                    </Typography>
                    <Link to='/search' style={{
                        textDecoration: "none"
                    }}>
                        <Button variant="contained" color='primary' style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            margin: "2vw 0vw",
                            padding: "0px 25px"
                        }}
                            endIcon={<ArrowRightAltIcon style={{
                                fontSize: "28px"
                            }}>send</ArrowRightAltIcon>}
                        >
                            Get Started
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}
export default Landing;