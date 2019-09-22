import React from 'react';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: 24
    },
    icon: {
        marginRight: '8px'
    }
}));

const CreateAuthograph:React.SFC = () => {
    const classes = useStyles();

    return (
        <Link to="/create">
            <Button variant="contained" size="large" color="primary">
                <AddIcon className={classes.icon} />
                Create Authograph
            </Button>
        </Link>
    )
}

export default CreateAuthograph;
