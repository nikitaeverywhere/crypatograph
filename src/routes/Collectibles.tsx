import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Divider from '@material-ui/core/Divider';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Box from "@material-ui/core/Box";
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import ImageIcon from '@material-ui/icons/VerifiedUser';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360
  },
  collectiblesBox: {}
}));

const Collectibles: React.SFC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.collectiblesBox}>
      <Box
        style={{
          display: "flex",
          alignContent: "center",
          flexDirection: "row"
        }}
      >
        <Typography variant="h5" component="p">
          John <b>DOE</b> Collectibles
        </Typography>
      </Box>
      <Divider />
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              JJ
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Joanna JOSE" secondary="Jan 9, 2014 | kyiv, UA" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              JD
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="John DOE" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              DJ
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Dow JONES" secondary="July 20, 2014 | new york, USA" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Badge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent={<ImageIcon color="action"/>}>
                <Avatar>
                     PJ
                </Avatar>
            </Badge>
          </ListItemAvatar>
          <ListItemText primary="Polly Jean HARVEY" secondary="July 21, 2014 | glastonbury, UK" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Collectibles;
