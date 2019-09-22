import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

import TextField from '@material-ui/core/TextField';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { getWalletAddress } from '../modules/wallet'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    avatar: {
        margin: 10,
    },
    textField: {
        marginLeft: '16px',
        marginRight: '16px',
        width: '250px'
      },
    profileBox: {
        marginTop: '16px',
        height: '100%',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        display: 'flex'
      },
}));

const Profile:React.SFC = () => {
    const classes = useStyles();
    const [address, setAddress] = React.useState('');

    React.useEffect(() => {
        if(!address) {
            setAddress(getWalletAddress())
        }
    }, [address])

    return (address ? 
        <Box className={classes.profileBox}>
            <Box style={{ display: 'flex', alignContent:'center', flexDirection: 'row'}}>
                <Typography variant="h5" component="p">
                    John <b>DOE</b> Profile
                </Typography>
                <Avatar className={classes.avatar}>JD</Avatar>
            </Box>
            <Divider />
            <Typography variant="h6" component="h6">
                
            </Typography>
            <Box>
                <TextField id="standard-input" className={classes.textField} label="Wallet" defaultValue={address.toLowerCase()} margin="normal" />
            </Box>
            <Box>
                <Button>Copy</Button>
                <Button color="secondary">Reveal secret</Button>
            </Box>
        </Box>
    : null)
}

export default Profile;
