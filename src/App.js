import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import ContactsIcon from '@material-ui/icons/Contacts';
import AdbRoundedIcon from '@material-ui/icons/AdbRounded';
import ClassRoundedIcon from '@material-ui/icons/ClassRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountBalanceRoundedIcon from '@material-ui/icons/AccountBalanceRounded';
import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded';

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
  list: {
    width: 250,
  }
}));

function App() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} noWrap>
            Mohammad Salim
          </Typography>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer("left", false)}
          onKeyDown={toggleDrawer("left", false)}
        >
          <List>
              <ListItem button>
                <ListItemIcon><InfoRoundedIcon /></ListItemIcon>
                <ListItemText primary="About" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><WorkRoundedIcon /></ListItemIcon>
                <ListItemText primary="Experience" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><AccountBalanceRoundedIcon /></ListItemIcon>
                <ListItemText primary="Education" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><AdbRoundedIcon /></ListItemIcon>
                <ListItemText primary="Skill" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><ClassRoundedIcon /></ListItemIcon>
                <ListItemText primary="Project" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><ContactsIcon /></ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItem>
          </List>
          <Divider />
          <List>
              <ListItem button>
                <ListItemIcon><GroupAddRoundedIcon /></ListItemIcon>
                <ListItemText primary="Connect" />
              </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default App;
