import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import PetsIcon from '@material-ui/icons/Pets';
import SearchIcon from '@material-ui/icons/Search';
import Card from './Card'

import Footer from './Footer'
import Viloyat from './Viloyat'


import ModalNavbar from './NavbarModal'
import 'bootstrap/dist/css/bootstrap.min.css';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));




export default function SearchAppBar() {
  const classes = useStyles();
  

   const rows = [
     { id: 1, Viloyat: 'Toshkent', firstName: 'Jon', age: 35 },
     { id: 2, Viloyat: 'Fargona', firstName: 'Cersei', age: 42 },
     { id: 3, Viloyat: 'Qarshi', firstName: 'Jaime', age: 45 },
     { id: 4, Viloyat: 'Navoiy', firstName: 'Arya', age: 16 },
     { id: 5, Viloyat: 'Xorazm', firstName: 'Daenerys', age: null },
     { id: 6, Viloyat: 'Jizzax', firstName: null, age: 150 },
     { id: 7, Viloyat: 'Andijon', firstName: 'Ferrara', age: 44 },
     { id: 8, Viloyat: 'Namangan', firstName: 'Rossini', age: 36 },
     { id: 9, Viloyat: 'Samarqand', firstName: 'Harvey', age: 65 },
   ];


  const [state, setState] = useState({
    value:'',
    show:'false'
});

const handleChange = (e) => {
setState({value: e.target.value})
}



  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            < PetsIcon  />
          </IconButton>
          <Typography className={classes.title} style={{display:'flex'}} variant="h6" noWrap>
            Shaxsiy admin panel
          </Typography>
          <ModalNavbar/>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
          value={state.value} 
          onChange={(e)=>handleChange(e)}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <div style={{display:'flex'}}>
        <Viloyat/>
      <Card  />

</div>
<Footer/>
    </div>
  );
}