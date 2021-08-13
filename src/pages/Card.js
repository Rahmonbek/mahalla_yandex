import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Button, Modal } from "antd";
import {YMaps, Map, Clusterer, Placemark, TypeSelector, ZoomControl, GeolocationControl, RouteButton, TrafficControl, GeoObject } from 'react-yandex-maps'
import LocationOnIcon from '@material-ui/icons/LocationOn';

import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
// import { DataGrid } from '@material-ui/data-grid';
import EditIcon from "@material-ui/icons/Edit";
import pin from "../boy.png";
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Modal from './modal'
// import Modal from '@material-ui/core/Modal';
import { Container, Row, Col, Form } from "react-bootstrap";
import { Points } from "../server";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
});

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.getValue(params.id, "firstName") || ""} ${params.getValue(params.id, "lastName") || ""}`,
  },
];

export default function MediaCard() {
  const classes = useStyles();
  const [rows, setRows] = useState(Points);
  const [rowsa, setRowsa] = useState(Points);
  const [number, setNumber]= useState(Points.length);
  // getModalStyle is not a pure function, we roll the style only on the first render

  const [open, setOpen] = React.useState(false);
  const [openMap, setOpenMap] = React.useState(false);
  // const [tumancheck, setTumancheck] = React.useState(true);

  const [points, setPoints] = useState([]);
  const [coor, setCoor] = useState([]);
  const [coords, setCoords] = useState([]);
  
  const onMapClick = (e) => {
    const coords = e.get("coords");
    
  var a=rowsa;
  
  a[number]={
    param: e.get("coords")
  }
  console.log(number, a[number])
  setRowsa(a)
  setCoords(coords )  
};
  const handleOpen = () => {
    setOpen(true);
    };
  const handleOpenMap = () => {
    setOpenMap(true);
    };

  const handleClose = () => {
    setOpen(false);
    document.getElementById("formBasictuman").value=''
document.getElementById("formBasicname").value=''
document.getElementById("formBasicviloyat").value=''
document.getElementById("formBasicRaisFIO").value=''
document.getElementById("formBasicRaisTel").value=''
document.getElementById("formBasicemail").value=''
document.getElementById("formBasictel").value=''
document.getElementById("formBasicUchasFIO").value=''
document.getElementById("formBasicUchasTel").value=''
document.getElementById("formBasicPosbonFIO").value=''
document.getElementById("formBasicPosbonTel").value=''
document.getElementById("formBasicQariyalarFIO").value=''
document.getElementById("formBasicQariyalarTel").value=''
document.getElementById("formBasicRaisOrin1FIO").value=''
document.getElementById("formBasicRaisOrin1Tel").value=''
document.getElementById("formBasicRaisOrin2FIO").value=''
document.getElementById("formBasicRaisOrin2Tel").value=''
document.getElementById("formBasicRaisOrin3FIO").value=''
document.getElementById("formBasicRaisOrin3Tel").value=''
document.getElementById("formBasicRaisOrin4FIO").value=''
document.getElementById("formBasicRaisOrin4Tel").value=''
document.getElementById("formBasickotibFIO").value=''
document.getElementById("formBasickotibTel").value=''
setCoords([])
  };
  
  const handleCloseMap = () => {
    setOpenMap(false);
  };

const coo=()=>{
  var coord=[]
  rows.map(item=>coord.push(item.coor))
  setCoor(coord)
}
  useEffect(()=>{
 coo()
}, [])



  const createPoints = () => {
    var str=document.getElementById("formBasictuman").value
    if(str.indexOf(' tumani')===-1 || str.indexOf(' shahri')===-1){
      if(str.indexOf(' ')===-1){
        str+=" tumani"
      }
      else{
        var a=str.substr(0, str.indexOf(' '))
        str=a
        str+=" tumani"
        
      }
      
    }
    var point = {

      name: document.getElementById("formBasicname").value,
      viloyat: document.getElementById("formBasicviloyat").value,
      tuman: str,
      RaisFIO: document.getElementById("formBasicRaisFIO").value,
      RaisTel: document.getElementById("formBasicRaisTel").value,
      email: document.getElementById("formBasicemail").value,
      tel: document.getElementById("formBasictel").value,
      UchasFIO:document.getElementById("formBasicUchasFIO").value,
UchasTel:document.getElementById("formBasicUchasTel").value,
PosbonFIO:document.getElementById("formBasicPosbonFIO").value,
PosbonTel:document.getElementById("formBasicPosbonTel").value,
QariyalarFIO:document.getElementById("formBasicQariyalarFIO").value,
QariyalarTel:document.getElementById("formBasicQariyalarTel").value,
RaisOrin1FIO:document.getElementById("formBasicRaisOrin1FIO").value,
RaisOrin1Tel:document.getElementById("formBasicRaisOrin1Tel").value,
RaisOrin2FIO:document.getElementById("formBasicRaisOrin2FIO").value,
RaisOrin2Tel:document.getElementById("formBasicRaisOrin2Tel").value,
RaisOrin3FIO:document.getElementById("formBasicRaisOrin3FIO").value,
RaisOrin3Tel:document.getElementById("formBasicRaisOrin3Tel").value,
RaisOrin4FIO:document.getElementById("formBasicRaisOrin4FIO").value,
RaisOrin4Tel:document.getElementById("formBasicRaisOrin4Tel").value,
kotibFIO:document.getElementById("formBasickotibFIO").value,
kotibTel:document.getElementById("formBasickotibTel").value,
param:coords,    
};
    console.log(point)
  };

  return (
    <div>
      <Modal title="Mahalla yaratish" width="80%" visible={open} onCancel={handleClose} footer={false} onFinish={createPoints}>
      <Form>
          <Row>
            <Col lg={6} md={12}>
              <Form.Group className="mb-3" controlId="formBasicname">
                <Form.Label style={{ fontSize: "14px" }}>Mahallani nomi</Form.Label>
                <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" placeholder="Mahallani nomi" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicviloyat">
                <Form.Label style={{ fontSize: "14px" }}>Viloyatni kiriting</Form.Label>
                <select id="formBasicviloyat" className="selectVil">
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
                <Form.Label style={{ fontSize: "14px" }}>Tumanni kiriting</Form.Label>
                <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required list="tuman" type="text" placeholder="Yunusobod tumani" />

                <datalist id="tuman">
                  <option value="Shofirkon tumani" />
                  <option value="Buxoro shahri" />
                  <option value="G'ijduvon tumani" />
                  <option value="Jondor tumani" />
                  <option value="Qorako'l tumani" />
                </datalist>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasictel">
                <Form.Label style={{ fontSize: "14px" }}>Mahallani telefon raqami</Form.Label>
                <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" placeholder="Telefon raqam" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicemail">
                <Form.Label style={{ fontSize: "14px" }}>Mahalla elektron pochtasi</Form.Label>
                <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRaisFIO">
                <Form.Label style={{ fontSize: "14px" }}>Rais familiya ism ochistvasi</Form.Label>
                <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required type="text" placeholder="Familiya ism ochistva" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRaisTel">
                <Form.Label style={{ fontSize: "14px" }}>Rais telefon raqami</Form.Label>
                <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required type="text" placeholder="Telefon raqam" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRaisOrin1FIO">
                <Form.Label style={{ fontSize: "14px" }}>Rais 1-o'rinbosari familiya ism ochistvasi</Form.Label>
                <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required type="text" placeholder="Familiya ism ochistva" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRaisOrin1Tel">
                <Form.Label style={{ fontSize: "14px" }}>Rais 1-o'rinbosari telefon raqami</Form.Label>
                <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required type="text" placeholder="Telefon raqam" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRaisOrin2FIO">
                <Form.Label style={{ fontSize: "14px" }}>Rais 2-o'rinbosari familiya ism ochistvasi</Form.Label>
                <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required type="text" placeholder="Familiya ism ochistva" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRaisOrin2Tel">
                <Form.Label style={{ fontSize: "14px" }}>Rais 2-o'rinbosari telefon raqami</Form.Label>
                <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required type="text" placeholder="Telefon raqam" />
              </Form.Group>
            </Col>

            <Col lg={6} md={12}>
              <Form.Group className="mb-3" controlId="formBasicRaisOrin3FIO">
                <Form.Label style={{ fontSize: "14px" }}>Rais 3-o'rinbosari familiya ism ochistvasi</Form.Label>
                <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required type="text" placeholder="Familiya ism ochistva" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRaisOrin3Tel">
                <Form.Label style={{ fontSize: "14px" }}>Rais 3-o'rinbosari telefon raqami</Form.Label>
                <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required type="text" placeholder="Telefon raqam" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRaisOrin4FIO">
                <Form.Label style={{ fontSize: "14px" }}>Rais 4-o'rinbosari familiya ism ochistvasi</Form.Label>
                <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required type="text" placeholder="Familiya ism ochistva" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRaisOrin4Tel">
                <Form.Label style={{ fontSize: "14px" }}>Rais 4-o'rinbosari telefon raqami</Form.Label>
                <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required type="text" placeholder="Telefon raqam" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUchasFIO">
                <Form.Label style={{ fontSize: "14px" }}>Uchastkavoy familiya ism ochistvasi</Form.Label>
                <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required type="text" placeholder="Familiya ism ochistva" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUchasTel">
                <Form.Label style={{ fontSize: "14px" }}>Uchastkavoy telefon raqami</Form.Label>
                <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required type="text" placeholder="Telefon raqam" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPosbonFIO">
                <Form.Label style={{ fontSize: "14px" }}>Mahalla posboni familiya ism ochistvasi</Form.Label>
                <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required type="text" placeholder="Mahalla Familiya ism ochistva" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPosbonTel">
                <Form.Label style={{ fontSize: "14px" }}>Mahalla posboni telefon raqami</Form.Label>
                <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required type="text" placeholder="Telefon raqam" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicQariyalarFIO">
                <Form.Label style={{ fontSize: "14px" }}>Qariyalar familiya ism ochistvasi</Form.Label>
                <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required type="text" placeholder="Familiya ism ochistva" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicQariyalarTel">
                <Form.Label style={{ fontSize: "14px" }}>Qariyalar telefon raqami</Form.Label>
                <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required type="text" placeholder="Telefon raqam" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicKotibFIO">
                <Form.Label style={{ fontSize: "14px" }}>Kotib familiya ism ochistvasi</Form.Label>
                <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required type="text" placeholder="Familiya ism ochistva" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicKotibTel">
                <Form.Label style={{ fontSize: "14px" }}>Kotib telefon raqami</Form.Label>
                <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required type="text" placeholder="Telefon raqam" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicKotibTel">
                <Form.Label style={{ fontSize: "14px" }}>Kotib telefon raqami</Form.Label>
              
                <Button onClick={handleOpenMap}><LocationOnIcon /></Button>
</Form.Group>
              
            </Col>
          </Row>

          <Button type="primary" htmlType="button">
            Bekor qilish
          </Button>

          <Button type="primary" htmlType="button">
            Yaratish
          </Button>
        </Form>
    
      </Modal>

      <Container>
        <Button onClick={handleOpen} type="primary">
          Mahalla qo'shish{" "}
        </Button>
        <Row>
          {rows.map((text, index) => (
            <Col lg={4} md={6} sm={12}>
              <Card style={{ marginTop: "30px", marginLeft: "20px" }} className={classes.root}>
                <CardActionArea>
                  <CardMedia className={classes.media}>
                    <YMaps>
                      <Map style={{ height: "140px" }} defaultState={{ center: text.param, zoom: 12 }}>
                        <GeoObject
                          geometry={{
                            type: "Polygon",
                            coordinates: text.coor,
                            fillRule: "nonZero",
                          }}
                          properties={{
                            balloonContent: "Многоугольник",
                          }}
                          options={{
                            fillColor: "#00FF00",
                            strokeColor: "#0000FF",
                            opacity: 0.5,
                            strokeWidth: 3,
                            strokeStyle: "shortdash",
                          }}
                        />

                        <Placemark key={0} geometry={text.param} />
                      </Map>
                    </YMaps>
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      {text.viloyat + " " + text.tuman + " " + text.name + " MFY"}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button style={{ fontSize: "14px", textTransform: "capitalize" }} type="primary">
                    <EditIcon style={{ fontSize: "16px" }} /> Edit
                  </Button>
                  <Button style={{ fontSize: "14px", textTransform: "capitalize" }} type="primary">
                    <DeleteIcon style={{ fontSize: "16px" }} /> Delete
                  </Button>
                  <Button style={{ fontSize: "14px", textTransform: "capitalize" }} type="primary">
                    <DeleteIcon style={{ fontSize: "16px" }} />
                    To'liq ma'lumot
                  </Button>
                </CardActions>
              </Card>
            </Col>
          ))}
        </Row>
        <Modal title="Mahalla binosini belgilash" bodyStyle={{ padding: "0", zIndex:'52434' }} width="80%" visible={openMap} onCancel={handleCloseMap}>
        <YMaps >
        <Map
        onClick={onMapClick}
          width='100%'
          height='65vh'
          defaultState={{
            center: rows[0].param,
            zoom:6,
          }}
        >
          
          <GeoObject
        geometry={{
          type: 'Polygon',
          coordinates: coor,
          fillRule: 'nonZero',
        }}
        properties={{
          balloonContent: 'Многоугольник',
        }}
        options={{
          fillColor: '#00FF00',
          strokeColor: '#0000FF',
          opacity: 0.5,
          strokeWidth: 5,
          strokeStyle: 'shortdash',
          iconLayout: 'default#image',
       }}
      />
          <Clusterer options={{  preset: 'islands#invertedVioletClusterIcons',  groupByCoordinates: false, }}  >
            {rowsa.map((info,index)=>{
            
            return(<Placemark
              key={index}  
              geometry={info.param}
              properties={{
                balloonContent: info.name,
              }}
            />)})}
            
         </Clusterer> 
          <GeolocationControl options={{ float: 'left' }} />
          <TypeSelector options={{ float: 'right' }} />
          <TrafficControl options={{ float: 'right' }} />
          <RouteButton options={{ float: 'right' }} />
          <ZoomControl  options={{ float: 'left' }} />
        </Map>
    </YMaps>
                </Modal>
      
      </Container>
    </div>
  );
}
