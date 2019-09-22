import React from 'react';
import Box from '@material-ui/core/Box';
import { withRouter } from 'react-router'

import { makeStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

import { claimAutograph } from '../modules/autograph'
import { async } from 'q';

const useStyles = makeStyles(() => ({
    box: {
        display: 'flex',
        justifyContent: 'center'
    },
    progress: {
        margin: 24,
    }
}));

const claimAuth = async (id: string, cb: any) => {
    const confirmed = await claimAutograph(id)
    if (confirmed === 'confirmed') {
        cb()
    }
}

const Get:React.SFC = ({match, history}: any) => {
    const classes = useStyles();

    React.useEffect(() => {
        claimAuth(match.params.id, () => history.push(`/profile/claimed`))
    })


    return <Box className={classes.box}><CircularProgress className={classes.progress} color="secondary" /></Box>
}

export default withRouter(Get);
