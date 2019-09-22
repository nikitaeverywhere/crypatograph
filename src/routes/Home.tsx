import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import GetAuthograph from '../components/GetAuthograph'
import CreateAuthograph from '../components/CreateAuthograph'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: 24
    },
    introBox: {},
    buttonBox: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

const Home:React.SFC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.introBox}>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    Welcome to <b>Crypatograph</b>
                </Typography>
                <br/>
                <Typography component="p">
                    <b>Crypatograph</b> can be used to collect authographs and proofs of meeting from people you met.
                </Typography>
                <br/>
                <Box className={classes.buttonBox}>
                    <CreateAuthograph />
                    {/* <GetAuthograph /> */}
                </Box>
            </Paper>
        </Box>
    )
}

export default Home;
