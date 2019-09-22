import React from 'react';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
    box: {
        display: 'flex',
        justifyContent: 'center'
    },
    progress: {
        margin: 24,
    }
}));

const Get:React.SFC = () => {
    const classes = useStyles();
    return <Box className={classes.box}><CircularProgress className={classes.progress} color="secondary" /></Box>
}

export default Get;
