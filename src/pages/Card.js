import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Button} from 'antd';
import Typography from '@material-ui/core/Typography';
import { YMaps, Map, } from 'react-yandex-maps';
import DeleteIcon from '@material-ui/icons/Delete';
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Modal from './modal'
import Modal from '@material-ui/core/Modal';
import { Container, Row, Col } from 'react-bootstrap';



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
  const columns = [
    { field: 'id',
     headerName: 'ID',
      width: 90 
    },{
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
    },
  ];
  
  const rows1 = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  

export default function MediaCard() {
  const classes = useStyles();

  // getModalStyle is not a pure function, we roll the style only on the first render
  
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  return (<div> 
    <Container>
   
     <Row>
    
     {rows.map((text, index) => (
       
       <Col lg={4} md={6} sm={12}>
    
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
      style={{fontSize:"14px", padding:'4px 10px'}}
        type="primary"
       
      >
       <EditIcon style={{fontSize:"16px", position:'relative', top:'-2px'}} /> Edit
      </Button>
      <Button
      style={{fontSize:"14px", padding:'4px 10px'}}
      
        type="primary"
 
      >
       <DeleteIcon style={{fontSize:"16px", position:'relative', top:'-2px'}} /> Delete
      </Button>
      <Button
      style={{fontSize:"14px", padding:'4px 10px'}}
      
        type="primary"
 
      >
        <DeleteIcon style={{fontSize:"16px", position:'relative', top:'-2px'}} />To'liq ma'lumot
      </Button>
      
    
   


      </CardActions> 
     
    </Card></Col> ))}
     </Row>
   
     
     
  
     </Container>
    
    </div>
  );
}

