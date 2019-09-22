import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';

import { default as routes } from './routes/routes'

import { getWalletAddress } from './modules/wallet'

import Loading from './components/Loading'

import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  main: {
    height: 'calc(100vh - 112px)',
    justifyContent: 'center',
    flexDirection: 'column',
    display: 'flex'
  },
  introBox: {
    
  }
}));

function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}


const App: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [address, setAddress] = React.useState('');

  React.useEffect(() => {
    if(!address) {
      setAddress(getWalletAddress())
    }
  }, [address])

  return (
    <div className={classes.root}>
      <Box style={{ backgroundColor: '#fff' }}>
        <Router basename="crypatograph-ai">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Crypatograph.ai
              </Typography>
            </Toolbar>
          </AppBar>
            <Container maxWidth="sm" className={classes.main}>
              {!address && <Loading />}
              {address && routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Container>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction component={Link} label="Home" icon={<FavoriteIcon />} to="/" />
            <BottomNavigationAction component={Link} label="Profile" icon={<PersonIcon />} to="/profile" />
            <BottomNavigationAction component={Link} label="Collectibles" icon={<RestoreIcon />} to="/collectibles" />
          </BottomNavigation>
        </Router>
    </Box>
    </div>
  );

}

export default App;
