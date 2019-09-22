import React from 'react';
import Box from '@material-ui/core/Box';
import { withRouter } from 'react-router'

import { makeStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

import { createAutograph } from '../modules/autograph' 

const useStyles = makeStyles(() => ({
    box: {
        display: 'flex',
        justifyContent: 'center'
    },
    progress: {
        margin: 24,
    }
}));

const createAuth = async (cb: any) => {
    const string = await createAutograph()
    cb(string)
}

const Create:React.SFC = ({ history } : any) => {
    const classes = useStyles();

    React.useEffect(() => {
        createAuth((url: string) => history.push(`/qrcode/${url}`))
    })
    
    
    return <Box className={classes.box}><CircularProgress className={classes.progress} /></Box>
}

export default withRouter(Create);
