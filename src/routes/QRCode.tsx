import React from 'react';

import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Box from '@material-ui/core/Box';
import { make } from '../utils/qrcode'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    introBox: {
      
    }
}));


const QRCode:React.SFC = ({match}: any) => {
    const classes = useStyles();
    const qr = make(`${process.env.REACT_APP_BASE_URL}/#/qrcode/get/${match.params.id}`)
    const QRCodeComponent = qr && qr.createSvgTag(2, 3)

    return (
        <Box className={classes.introBox}>
            <div style={{ maxHeight: 320, width: '100%'}} dangerouslySetInnerHTML={{__html: QRCodeComponent || ""}}></div>
            <Button component={Link} to="/" color="secondary">Close</Button>
        </Box>
    )
}

export default withRouter(QRCode);
