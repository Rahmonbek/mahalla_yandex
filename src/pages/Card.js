import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button, Modal} from 'antd';
import Typography from '@material-ui/core/Typography';
import { YMaps, Map, GeoObject, Placemark, } from 'react-yandex-maps';
import DeleteIcon from '@material-ui/icons/Delete';
// import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import pin from '../boy.png'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Modal from './modal'
// import Modal from '@material-ui/core/Modal';
import { Container, Row, Col, Form,} from 'react-bootstrap';
import { Points } from '../server';



const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
 
});

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
  
  

export default function MediaCard() {
  const classes = useStyles();
const [rows, setRows]=useState(Points)
  // getModalStyle is not a pure function, we roll the style only on the first render
  
  const [open, setOpen] = React.useState(false);
  const [tumancheck, setTumancheck] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
    console.log(open)
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (<div> 
   
   <Modal title="Mahalla yaratish" visible={open} onCancel={handleClose} footer={false}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicname">
            <Form.Label>Mahallani nomi</Form.Label>
            <Form.Control type="text" placeholder="Mahallani nomi" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasictel">
            <Form.Label>Mahallani telefon raqami</Form.Label>
            <Form.Control type="text" placeholder="Telefon raqam" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicviloyat">
            <Form.Label>Viloyatni kiriting</Form.Label>
            <select className="selectVil">
              <option value="Toshkent shahri">Toshkent shahri</option>
              <option value="Toshkent viloyati">Toshkent viloyati</option>
              <option value="Buxoro viloyati">Buxoro viloyati</option>
              <option value="Xorazm viloyati">Xorazm viloyati</option>
              <option value="Surxondaryo viloyati">Surxondaryo viloyati</option>
              <option value="Qashqadaryo viloyati">Qashqadaryo viloyati</option>
              <option value="Andijon viloyati">Andijon viloyati</option>
              <option value="Navoiy viloyati">Navoiy viloyati</option>
              <option value="Farg'ona viloyati">Farg'ona viloyati</option>
              <option value="Namangan viloyati">Namangan viloyati</option>
              <option value="Jizzax viloyati">Jizzax viloyati</option>
              <option value="Samarqand viloyati">Samarqand viloyati</option>
              <option value="Sirdaryo viloyati">Sirdaryo viloyati</option>
              <option value="Qoraqalpog'iston Respublikasi">Qoraqalpog'iston Respublikasi</option>
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasictuman">
            <Form.Label>Tumanni kiriting</Form.Label>
            <Form.Control required list="tuman" type="text" placeholder="Yunusobod tumani" />

            <datalist id="tuman">
              <option value="Shofirkon tumani" />
              <option value="Buxoro shahri" />
              <option value="G'ijduvon tumani" />
              <option value="Jondor tumani" />
              <option value="Qorako'l tumani" />
            </datalist>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRaisFIO">
            <Form.Label>Rais F.I.O.</Form.Label>
            <Form.Control required type="text" placeholder="Rais F.I.O." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRaisTel">
            <Form.Label>Rais telefon raqami</Form.Label>
            <Form.Control required type="text" placeholder="+998991234567" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mahalla elektron pochtasi</Form.Label>
            <Form.Control required type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTel">
            <Form.Label>Mahalla telefon raqami</Form.Label>
            <Form.Control required type="text" placeholder="+998991234567" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUchasFIO">
            <Form.Label>Uchaskavoy F.I.O.</Form.Label>
            <Form.Control required type="text" placeholder="Uchaskavoy F.I.O." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUchasTel">
            <Form.Label>Uchaskavoy telefon raqami</Form.Label>
            <Form.Control required type="text" placeholder="+998991234567" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPosbonFIO">
            <Form.Label>Mahalla posboni F.I.O.</Form.Label>
            <Form.Control required type="text" placeholder="Mahalla posboni F.I.O." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPosbonTel">
            <Form.Label>Mahalla posboni telefon raqami</Form.Label>
            <Form.Control required type="text" placeholder="+998991234567" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicQariyalarFIO">
            <Form.Label>Qariyalar F.I.O.</Form.Label>
            <Form.Control required type="text" placeholder="Qariyalar F.I.O." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicQariyalarTel">
            <Form.Label>Qariyalar telefon raqami</Form.Label>
            <Form.Control required type="text" placeholder="+998991234567" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRaisOrin1FIO">
            <Form.Label>Rais 1-o'rinbosari F.I.O.</Form.Label>
            <Form.Control required type="text" placeholder="Rais 1-o'rinbosari F.I.O." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRaisOrin1Tel">
            <Form.Label>Rais 1-o'rinbosari telefon raqami</Form.Label>
            <Form.Control required type="text" placeholder="+998991234567" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRaisOrin2FIO">
            <Form.Label>Rais 2-o'rinbosari F.I.O.</Form.Label>
            <Form.Control required type="text" placeholder="Rais 2-o'rinbosari F.I.O." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRaisOrin2Tel">
            <Form.Label>Rais 2-o'rinbosari telefon raqami</Form.Label>
            <Form.Control required type="text" placeholder="+998991234567" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRaisOrin3FIO">
            <Form.Label>Rais 3-o'rinbosari F.I.O.</Form.Label>
            <Form.Control required type="text" placeholder="Rais 3-o'rinbosari F.I.O." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRaisOrin3Tel">
            <Form.Label>Rais 3-o'rinbosari telefon raqami</Form.Label>
            <Form.Control required type="text" placeholder="+998991234567" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRaisOrin4FIO">
            <Form.Label>Rais 4-o'rinbosari F.I.O.</Form.Label>
            <Form.Control required type="text" placeholder="Rais 4-o'rinbosari F.I.O." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRaisOrin4Tel">
            <Form.Label>Rais 4-o'rinbosari telefon raqami</Form.Label>
            <Form.Control required type="text" placeholder="+998991234567" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicKotibFIO">
            <Form.Label>Kotib F.I.O.</Form.Label>
            <Form.Control required type="text" placeholder="Kotib F.I.O." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicKotibTel">
            <Form.Label>Kotib telefon raqami</Form.Label>
            <Form.Control required type="text" placeholder="+998991234567" />
          </Form.Group>

          <Button type="primary" htmlType="button">
            Bekor qilish
          </Button>

          <Button type="primary" htmlType="submit">
            Yaratish
          </Button>
        </Form>
      </Modal>

   
    <Container>
   <Button onClick={handleOpen} type="primary">Mahalla qo'shish </Button>
     <Row>
    
     {rows.map((text, index) => (
       
       <Col lg={4} md={6} sm={12}>
    
   <Card style={{marginTop:"30px",marginLeft:'20px'}} className={classes.root}>     
      <CardActionArea>
        <CardMedia
          className={classes.media} >
            <YMaps >
        
          <Map style={{height:'140px'}} defaultState={{ center: text.param, zoom: 12, }} >
         <GeoObject
        geometry={{
          type: 'Polygon',
          coordinates: text.coor,
          fillRule: 'nonZero',
        }}
        properties={{
          balloonContent: 'Многоугольник',
        }}
        options={{
          fillColor: '#00FF00',
          strokeColor: '#0000FF',
          opacity: 0.5,
          strokeWidth: 3,
          strokeStyle: 'shortdash',
          
        }}/>

<Placemark key={0} geometry={text.param}/>
         </Map>
      </YMaps></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          {text.viloyat+' '+text.tuman+' '+text.name+' MFY'} 
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button
      style={{fontSize:"14px", textTransform:'capitalize'}}
        type="primary"
       
      >
       <EditIcon style={{fontSize:"16px",}} /> Edit
      </Button>
      <Button
      style={{fontSize:"14px", textTransform:'capitalize'}}
      
        type="primary"
 
      >
       <DeleteIcon style={{fontSize:"16px",}} /> Delete
      </Button>
      <Button
      style={{fontSize:"14px", textTransform:'capitalize'}}
      
        type="primary"
 
      >
        <DeleteIcon style={{fontSize:"16px",}} />To'liq ma'lumot
      </Button>
      
    
   


      </CardActions> 
     
    </Card></Col> ))}
     </Row>
   
     
     
  
     </Container>
    
    </div>
  );
}

