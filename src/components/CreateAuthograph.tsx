import React from 'react';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: 24
    }
}));

const CreateAuthograph:React.SFC = () => {
    const classes = useStyles();

    return (
        <Link to="/create">
            <Button>
                Create Authograph
            </Button>
        </Link>
    )
}

export default CreateAuthograph;
