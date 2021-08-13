import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { YMaps, Map, } from 'react-yandex-maps';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {  Grid  } from '@material-ui/core';
import Modal from './modal'


const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
 
});
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
  

export default function MediaCard() {
  const classes = useStyles();

  return (<div> <Grid container spacing={3}  style={{margin :'auto',textAlign:'center',alignItem:'center'}}>
     {rows.map((text, index) => (
   <Card style={{marginTop:"30px",marginLeft:'20px'}} className={classes.root}>     
      <CardActionArea>
        <CardMedia
          className={classes.media} 
        ><YMaps >
        <div >
          <Map style={{height:'140px'}} defaultState={{ center: [55.75, 37.57], zoom: 13, }} />
       
        </div>
      </YMaps></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {text.Viloyat}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<EditIcon />}
      >
        Edit
      </Button>
        <Button
         size="small"
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    
       
    <div style={{margin:'auto',marginRight:'80px'}}><Modal  /></div>
   


      </CardActions> 
     
    </Card> ))}
    </ Grid>
    </div>
  );
}

