// import { makeStyles } from "@material-ui/core";
import React, { Component } from "react";
import { createMahalla, getMahalla } from "../host/Config";
// import { Points } from "../server";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Button, Modal } from "antd";
import { YMaps, Map, Clusterer, Placemark, TypeSelector, ZoomControl, GeolocationControl, RouteButton, TrafficControl, GeoObject } from "react-yandex-maps";
import LocationOnIcon from "@material-ui/icons/LocationOn";
// imoort 
import RingLoader from 'react-spinners/RingLoader'

import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { DataGrid } from '@material-ui/data-grid';
// import EditIcon from "@material-ui/icons/Edit";
// import pin from "../boy.png";
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Modal from './modal'
// import Modal from '@material-ui/core/Modal';
import { Container, Row, Col, Form, OverlayTrigger, Tooltip, Image } from "react-bootstrap";
import { IconButton } from "@material-ui/core";
import styles from "../components/CSS/Card.css";
// import {getMa} from 'st'

export default class Card2 extends Component {
  state = {
    rows: [],
    rowsa: [],
    number: 0,
    open: false,
    openMap: false,
    points: [],
    coor: [],
    tumanCheck: true,
    coords: [],
    show: false,
    key: null,
    openMapHud: false,
    coordsHud: [],
    loading:true
  };

  onMapClick = (e) => {
    var coords = e.get("coords");

    var a = this.state.rowsa;

    a[this.state.number] = {
      param: e.get("coords"),
    };
    console.log(this.state.number, a[this.state.number]);
    this.setState({ rowsa: a });
    this.setState({
      coords: coords,
    });
  };
    getMahalla = () => {
      console.log('dsdds')
      getMahalla().then((res) =>{
        this.setState({ 
          rows: res.data, 
          loading:false,
          rowsa: res.data, 
          number: res.data.length })
      }).catch((err) => console.log(err));
    
    };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleOpenMap = () => {
    this.setState({ openMap: true });
  };
  deleteHud=(id)=>{
    var a=this.state.coordsHud
    console.log(a)
    var b=this.state.coor
    b[this.state.number].splice(id, 1)
    a.splice(id, 1)
    this.setState({coordsHud:a, coor:b})
  }
  handleClose = () => {
    document.getElementById("formBasictuman").value = "";
    document.getElementById("formBasicname").value = "";
    document.getElementById("formBasicviloyat").value = "Toshkent shahri";
    document.getElementById("formBasicRaisFIO").value = "";
    document.getElementById("formBasicRaisTel").value = "";
    document.getElementById("formBasicemail").value = "";
    document.getElementById("formBasictel").value = "";
    document.getElementById("formBasicUchasFIO").value = "";
    document.getElementById("formBasicUchasTel").value = "";
    document.getElementById("formBasicPosbonFIO").value = "";
    document.getElementById("formBasicPosbonTel").value = "";
    document.getElementById("formBasicQariyalarFIO").value = "";
    document.getElementById("formBasicQariyalarTel").value = "";
    document.getElementById("formBasicRaisOrin1FIO").value = "";
    document.getElementById("formBasicRaisOrin1Tel").value = "";
    document.getElementById("formBasicRaisOrin2FIO").value = "";
    document.getElementById("formBasicRaisOrin2Tel").value = "";
    document.getElementById("formBasicRaisOrin3FIO").value = "";
    document.getElementById("formBasicRaisOrin3Tel").value = "";
    // document.getElementById("formBasicRaisOrin4FIO").value = "";
    // document.getElementById("formBasicRaisOrin4Tel").value = "";
    document.getElementById("formBasickotibFIO").value = "";
    document.getElementById("formBasickotibTel").value = "";
    this.setState({ open: false, coords: [] });
  };

  handleCloseMap = () => {
    this.setState({ openMap: false });
  };

  coo = () => {
    var coord = [];
    this.state.rows.map((item) => coord.push(item.coor));
    coord.push([])
    this.setState({ coor: coord, });

  };
  createPoints = () => {
    var str = document.getElementById("formBasictuman").value;
    if (str.indexOf(" tumani") === -1 || str.indexOf(" shahri") === -1) {
      if (str.indexOf(" ") === -1) {
        str += " tumani";
      } else {
        var a = str.substr(0, str.indexOf(" "));
        str = a;
        str += " tumani";
      }
    }
    var point = {
      nomi: document.getElementById("formBasicname").value,
      viloyat: document.getElementById("formBasicviloyat").value,
      tuman: str,
      tel: document.getElementById("formBasictel").value,
      email: document.getElementById("formBasicemail").value,
      raisFIO: document.getElementById("formBasicRaisFIO").value,
      raisTel: document.getElementById("formBasicRaisTel").value,
      uchasFIO: document.getElementById("formBasicUchasFIO").value,
      uchasTel: document.getElementById("formBasicUchasTel").value,
      posbonFIO: document.getElementById("formBasicPosbonFIO").value,
      posbonTel: document.getElementById("formBasicPosbonTel").value,
      qariyalarFIO: document.getElementById("formBasicQariyalarFIO").value,
      qariyalarTel: document.getElementById("formBasicQariyalarTel").value,
      raiszami1FIO: document.getElementById("formBasicRaisOrin1FIO").value,
      raiszami1Tel: document.getElementById("formBasicRaisOrin1Tel").value,
      raiszami2FIO: document.getElementById("formBasicRaisOrin2FIO").value,
      raiszami2Tel: document.getElementById("formBasicRaisOrin2Tel").value,
      raiszami3FIO: document.getElementById("formBasicRaisOrin3FIO").value,
      raiszami3Tel: document.getElementById("formBasicRaisOrin3Tel").value,
      RaisOrin4FIO: document.getElementById("formBasicRaisOrin4FIO").value,
      RaisOrin4Tel: document.getElementById("formBasicRaisOrin4Tel").value,
      kotibaFIO: document.getElementById("formBasickotibFIO").value,
      kotibaTel: document.getElementById("formBasickotibTel").value,
      param: this.state.coords,
      coor: this.state.coor[this.state.number],
    };
    createMahalla(point).then((res) => console.log(res)).catch((err) => console.log(err));
    this.getMahalla()
    this.handleClose();
  };

  showPointsRead = (id) => {
    this.setState({ show: true, key: id });
  };
  handleOpenMapHud = () => {
    this.setState({ openMapHud: true });
  };
  handleCloseMapHud = () => {
    this.setState({ openMapHud: false });
  };
  onMapClickHud = (e) => {
    const coords = e.get("coords");

    var a = this.state.coor;
    var b = this.state.coordsHud;
    b.push(coords);

    a[this.state.number].push(coords);


    this.setState({ coor: a, 
      coordsHud: b });
  };
  handleCancel = () => {
    this.setState({ show: false });
  };
    componentDidMount() {
      this.getMahalla()   
      this.coo()  
      console.log(this.state.number,this.state.rows) 
    }
      
      render() {
    return (
      <div>
          {this.state.loading ? 
      <div style={{position:'fixed', top:"0px", left:'0px', alignItems: 'center', zIndex:'3945',width: '100%', height: '100vh', display:'flex', justifyContent: 'center',  }}>
        <RingLoader loading={this.state.loading} size={150} color={'#f37a24'}></RingLoader>
      </div>
     :
       <> <Modal title="Mahalla yaratish" width="80%" visible={this.state.open} onCancel={this.handleClose} footer={false} onFinish={this.createPoints}>
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
                  <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required type="text" placeholder="Familiya ism ochistva" />
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

                <Form.Group className="mb-3" controlId="formBasickotibFIO">
                  <Form.Label style={{ fontSize: "14px" }}>Kotib(a) familiya ism ochistvasi</Form.Label>
                  <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required type="text" placeholder="Familiya ism ochistva" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasickotibTel">
                  <Form.Label style={{ fontSize: "14px" }}>Kotib(a) telefon raqami</Form.Label>
                  <Form.Control style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} required type="text" placeholder="Telefon raqam" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicKotibTel">
                  <Form.Label style={{ fontSize: "14px" }}>Mahalla binosini belgilang</Form.Label>

                  <Button className="btnXarita" onClick={this.handleOpenMap}>
                    <LocationOnIcon />
                  </Button>
                  <br />
                  <br />
                  <Form.Label style={{ fontSize: "14px" }}>Mahalla hududini belgilang</Form.Label>

                  <Button className="btnXarita" onClick={this.handleOpenMapHud}>
                    <LocationOnIcon />
                  </Button>
                </Form.Group>
              </Col>
            </Row>

            <Button type="primary" htmlType="button" onClick={() => this.handleClose()}>
              Bekor qilish
            </Button>

            <Button type="primary" htmlType="button" onClick={() => this.createPoints()}>
              Yaratish
            </Button>
          </Form>
        </Modal>

        <Container>
          <Button onClick={this.handleOpen} type="primary">
            Mahalla qo'shish{" "}
          </Button>
          <Row>
            {this.state.rows.map((text, index) => (
              <Col lg={4} md={6} sm={12}>
                <Card style={{ marginTop: "30px", marginLeft: "20px" }} className={styles.root}>
                  <CardActionArea>
                    <CardMedia className={styles.media}>
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
                        {text.viloyat + " " + text.tuman + " " + text.nomi + " MFY"}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions disableSpacing style={{ display: "flex", justifyContent: "space-around" }}>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id="button-tooltip-2" style={{ marginTop: "15px", marginLeft: "14px" }}>
                          O'zgartirish
                        </Tooltip>
                      }
                    >
                      {({ ref, ...triggerHandler }) => (
                        <Button onClick={() => this.editPoints(index)} variant="success" {...triggerHandler} className="d-inline-flex align-items-center">
                          <Image ref={ref} />

                          <IconButton>
                            <BorderColorIcon style={{ color: "green" }} />
                          </IconButton>
                        </Button>
                      )}
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id="button-tooltip-2" style={{ marginTop: "15px", marginLeft: "15px" }}>
                          O'chirish
                        </Tooltip>
                      }
                    >
                      {({ ref, ...triggerHandler }) => (
                        <Button onClick={() => this.deletePoints} variant="#f30838" {...triggerHandler} className="d-inline-flex align-items-center">
                          <Image ref={ref} />

                          <IconButton>
                            <DeleteIcon style={{ color: "#f30838" }} />
                          </IconButton>
                        </Button>
                      )}
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id="button-tooltip-2" style={{ marginTop: "15px", marginLeft: "18px" }}>
                          Mahalla haqida batafsil ma'lumot
                        </Tooltip>
                      }
                    >
                      {({ ref, ...triggerHandler }) => (
                        <Button variant="black" {...triggerHandler} className="d-inline-flex align-items-center">
                          <Image ref={ref} />
                          <IconButton onClick={() => this.showPointsRead(index)} aria-label="Ko'proq ma'lumotni ko'rish">
                            <ExpandMoreIcon style={{ color: "black" }} />
                          </IconButton>
                        </Button>
                      )}
                    </OverlayTrigger>
                  </CardActions>
                </Card>
              </Col>
            ))}
          </Row>
          <Modal title="Mahalla binosini belgilash" bodyStyle={{ padding: "0", zIndex: "52434" }} width="80%" visible={this.state.openMap} onCancel={this.handleCloseMap}>
            <YMaps>
              <Map
                onClick={this.onMapClick}
                width="100%"
                height="65vh"
                defaultState={{
                  center:  this.state.rows!==[]?this.state.rows[0].param:[],
                  zoom: 6,
                }}
              >
              
                <Clusterer options={{ preset: "islands#invertedVioletClusterIcons", groupByCoordinates: false }}>
                  {this.state.rowsa.map((info, index) => {
                    return (
                      <Placemark
                        key={index}
                        geometry={info.param!==[] || info.param!==null?info.param:''}
                        properties={{
                          balloonContent: info.name,
                        }}
                      />
                    );
                  })}
                </Clusterer>
                <GeolocationControl options={{ float: "left" }} />
                <TypeSelector options={{ float: "right" }} />
                <TrafficControl options={{ float: "right" }} />
                <RouteButton options={{ float: "right" }} />
                <ZoomControl options={{ float: "left" }} />
              </Map>
            </YMaps>
          </Modal>
        </Container>
        <Modal title="Mahalla haqida batafsil ma'lumot" width="60%" visible={this.state.show} footer={false} onCancel={this.handleCancel}>
          {this.state.key !== null ? (
            <Form>
              <Row>
                <Col lg={6} md={12}>
                  <Form.Group className="mb-3" controlId="readname">
                    <Form.Label style={{ fontSize: "14px" }}>Mahallani nomi</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" value={this.state.rows[this.state.key].name} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="readviloyat">
                    <Form.Label style={{ fontSize: "14px" }}>Viloyatni kiriting</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} value={this.state.rows[this.state.key].viloyat} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="readtuman">
                    <Form.Label style={{ fontSize: "14px" }}>Tumanni kiriting</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" value={this.state.rows[this.state.key].tuman} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="readtel">
                    <Form.Label style={{ fontSize: "14px" }}>Mahallani telefon raqami</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" value={this.state.rows[this.state.key].tel} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="reademail">
                    <Form.Label style={{ fontSize: "14px" }}>Mahalla elektron pochtasi</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="email" value={this.state.rows[this.state.key].email} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="readRaisFIO">
                    <Form.Label style={{ fontSize: "14px" }}>Rais familiya ism ochistvasi</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" value={this.state.rows[this.state.key].RaisFIO} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="readRaisTel">
                    <Form.Label style={{ fontSize: "14px" }}>Rais telefon raqami</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" value={this.state.rows[this.state.key].RaisTel} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="readRaisOrin1FIO">
                    <Form.Label style={{ fontSize: "14px" }}>Rais 1-o'rinbosari familiya ism ochistvasi</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" value={this.state.rows[this.state.key].RaisOrin1FIO} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="readRaisOrin1Tel">
                    <Form.Label style={{ fontSize: "14px" }}>Rais 1-o'rinbosari telefon raqami</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" value={this.state.rows[this.state.key].RaisOrin1Tel} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="readRaisOrin2FIO">
                    <Form.Label style={{ fontSize: "14px" }}>Rais 2-o'rinbosari familiya ism ochistvasi</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" value={this.state.rows[this.state.key].RaisOrin2FIO} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="readRaisOrin2Tel">
                    <Form.Label style={{ fontSize: "14px" }}>Rais 2-o'rinbosari telefon raqami</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" value={this.state.rows[this.state.key].RaisOrin2Tel} />
                  </Form.Group>
                </Col>

                <Col lg={6} md={12}>
                  <Form.Group className="mb-3" controlId="readRaisOrin3FIO">
                    <Form.Label style={{ fontSize: "14px" }}>Rais 3-o'rinbosari familiya ism ochistvasi</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" value={this.state.rows[this.state.key].RaisOrin3FIO} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="readRaisOrin3Tel">
                    <Form.Label style={{ fontSize: "14px" }}>Rais 3-o'rinbosari telefon raqami</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" value={this.state.rows[this.state.key].RaisOrin3Tel} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="readRaisOrin4FIO">
                    <Form.Label style={{ fontSize: "14px" }}>Rais 4-o'rinbosari familiya ism ochistvasi</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" value={this.state.rows[this.state.key].RaisOrin4FIO} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="readRaisOrin4Tel">
                    <Form.Label style={{ fontSize: "14px" }}>Rais 4-o'rinbosari telefon raqami</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" value={this.state.rows[this.state.key].RaisOrin4Tel} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="readUchasFIO">
                    <Form.Label style={{ fontSize: "14px" }}>Uchastkavoy familiya ism ochistvasi</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" value={this.state.rows[this.state.key].UchasFIO} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="readUchaTel">
                    <Form.Label style={{ fontSize: "14px" }}>Uchastkavoy telefon raqami</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" value={this.state.rows[this.state.key].UchaTel} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="readPosbonFIO">
                    <Form.Label style={{ fontSize: "14px" }}>Mahalla posboni familiya ism ochistvasi</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" value={this.state.rows[this.state.key].PosbonFIO} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="readPosbonTel">
                    <Form.Label style={{ fontSize: "14px" }}>Mahalla posboni telefon raqami</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" value={this.state.rows[this.state.key].PosbonTel} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="readQariyalarFIO">
                    <Form.Label style={{ fontSize: "14px" }}>Qariyalar familiya ism ochistvasi</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" value={this.state.rows[this.state.key].QariyalarFIO} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="readQariyalarTel">
                    <Form.Label style={{ fontSize: "14px" }}>Qariyalar telefon raqami</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" value={this.state.rows[this.state.key].QariyalarTel} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="readKotibFIO">
                    <Form.Label style={{ fontSize: "14px" }}>Kotib familiya ism ochistvasi</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" value={this.state.rows[this.state.key].kotibFIO} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="readKotibTel">
                    <Form.Label style={{ fontSize: "14px" }}>Kotib telefon raqami</Form.Label>
                    <Form.Control readOnly style={{ fontSize: "13px", backgroundColor: "#c2ffff91" }} type="text" value={this.state.rows[this.state.key].kotibTel} />
                  </Form.Group>
                </Col>
              </Row>
              <Button type="primary" onClick={() => this.handleCancel()}>
                Yopish
              </Button>
            </Form>
          ) : (
            ""
          )}
        </Modal>
        <Modal title="Mahalla binosini belgilash" bodyStyle={{ padding: "0", zIndex: "52434" }} width="80%" visible={this.state.openMapHud} onCancel={this.handleCloseMapHud} onOk={this.handleCloseMapHud}>
          <YMaps>
            <Map
              onClick={this.onMapClickHud}
              width="100%"
              height="65vh"
              defaultState={{
                center: this.state.rows!==[]?this.state.rows[0].param:[],
                zoom: 6,
              }}
            >
              <GeoObject
                geometry={{
                  type: "Polygon",
                  coordinates: this.state.coor,
                  fillRule: "nonZero",
                }}
                properties={{
                  balloonContent: "Многоугольник",
                }}
                options={{
                  fillColor: "#00FF00",
                  strokeColor: "#0000FF",
                  opacity: 0.5,
                  strokeWidth: 5,
                  strokeStyle: "shortdash",
                  iconLayout: "default#image",
                }}
              />
              <Clusterer options={{ preset: "islands#invertedVioletClusterIcons", groupByCoordinates: false }}>
                {this.state.rows.map((info, index) => {
                  return (
                    <Placemark
                      key={index}
                      geometry={info.param}
                      properties={{
                        balloonContent: info.name,
                      }}
                    />
                  );
                })}
              </Clusterer>
              <Clusterer options={{ preset: "islands#invertedRedClusterIcons", groupByCoordinates: false }}>
              
                {this.state.coordsHud.map((info, index) => {
                  return (
                    <Placemark
                      key={index}
                      geometry={info}
                    onClick={()=>{this.deleteHud(index)}}
                      properties={{
                        balloonContent: info.name,
                      }}
                    />
                  );
                })}
              </Clusterer>
              <GeoObject
                geometry={{
                  type: "Polygon",
                  coordinates:[this.state.coor[this.state.number]],
                  fillRule: "nonZero",
                }}
                properties={{
                  balloonContent: "Многоугольник",
                }}
                options={{
                  fillColor: "#00FF00",
                  strokeColor: "#0000FF",
                  opacity: 0.5,
                  strokeWidth: 4,
                  strokeStyle: "shortdash",
                  iconLayout: "default#image",
                 }}
              />
              <GeolocationControl options={{ float: "left" }} />
              <TypeSelector options={{ float: "right" }} />
              <TrafficControl options={{ float: "right" }} />
              <RouteButton options={{ float: "right" }} />
              <ZoomControl options={{ float: "left" }} />
            </Map>
          </YMaps>
        </Modal>
        </>}
      </div>
    );
  }
}
