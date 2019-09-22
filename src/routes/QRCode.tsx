import React from 'react';

import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
import { make } from '../utils/qrcode'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    introBox: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      height: '100%',
      display: 'flex'
    }
}));


const QRCode:React.SFC = ({match}: any) => {
    const classes = useStyles();
    const qr = make(`${process.env.REACT_APP_BASE_URL}/#/qrcode/get/${match.params.id}`)
    const QRCodeComponent = qr && qr.createSvgTag(2, 3)

    return (
        <Box className={classes.introBox}>
            <Box>
              <div style={{ marginTop: 16, width: '100%' }}>
              <Typography variant="h5" component="p">
                    John <b>DOE</b> Autograph #1
                </Typography>
              </div>
              <div style={{ marginTop: 16, width: '100%' }}>
              <Typography component="p">
                    Show it to anyone (parents, <s>girlfriend</s>, <s>fans</s>).
                </Typography>
              </div>
            </Box>
            <Box><div style={{ marginTop: 16, maxHeight: 320, width: '100%'}} dangerouslySetInnerHTML={{__html: QRCodeComponent || ""}}></div></Box>
            <Box style={{ display: 'flex', marginLeft: 16, marginTop: 32, width: '100%' }}><Button variant="contained" size="large" component={Link} to="/" color="secondary">Close</Button></Box>
        </Box>
    )
}

export default withRouter(QRCode);
