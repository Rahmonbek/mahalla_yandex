import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import { Button, Form } from "react-bootstrap";
import style from "../components/CSS/LearningCenter.module.css";
// import { YMaps, Map, ZoomControl, FullscreenControl, SearchControl, GeolocationControl, Placemark } from "react-yandex-maps";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const rows = [
  { id: 1, Viloyat: "Toshkent", firstName: "Jon", age: 35 },
  { id: 2, Viloyat: "Fargona", firstName: "Cersei", age: 42 },
  { id: 3, Viloyat: "Qarshi", firstName: "Jaime", age: 45 },
  { id: 4, Viloyat: "Navoiy", firstName: "Arya", age: 16 },
  { id: 5, Viloyat: "Xorazm", firstName: "Daenerys", age: null },
  { id: 6, Viloyat: "Jizzax", firstName: null, age: 150 },
  { id: 7, Viloyat: "Andijon", firstName: "Ferrara", age: 44 },
  { id: 8, Viloyat: "Namangan", firstName: "Rossini", age: 36 },
  { id: 9, Viloyat: "Samarqand", firstName: "Harvey", age: 65 },
];

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "80%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  // const [openm, setOpenm] = React.useState(false);
  const [state, setState] = React.useState({
    ft: false,
    isModalVisible: false,
    coordinates: null,
    data: {},
    mapState: {
      center: [41.2825125, 69.1392826],
      zoom: 9,
    },
  });
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const handleCancel = () => {
  //   setState({
  //       isModalVisible: false
  //   })
  // }
  // const onMapClick = (e) => {
  //     const coords = e.get("coords");
  //     setState({coords: coords })
  //     console.log(coords)
  // };

  // const handleOk = () => {
  //     handleCancel()
  // }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Yangi ma`lumotlar uchun</h2>
      <p id="simple-modal-description">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Viloyat:</Form.Label>
            <Form.Select aria-label="Default select example">
              {rows.map((text, index) => (
                <option>{text.Viloyat}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tuman:</Form.Label>
            <Form.Control type="Text" placeholder="Tunamni kiriting" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Shahar:</Form.Label>
            <Form.Control type="Text" placeholder="Shaharni kiriting" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mahalla:</Form.Label>
            <Form.Control type="Text" placeholder="Mahallani kiriting" />
          </Form.Group>
          <Button className={style.btnm} onClick={() => setState({ isModalVisible: true })}>
            <LocationOnIcon />
          </Button>
          <div className={style.input}>
            <input placeholder=" " type="text" className={style.inputField} required />
            <label className={style.inputLabel}>Manzili</label>
          </div>
          <Button onClick={handleClose} style={{ marginLeft: "24px" }}>
            Oynani yopish{" "}
          </Button>

          <Button variant="primary" style={{ marginLeft: "24px" }}>
            {" "}
            Saqlash{" "}
          </Button>
        </Form>
      </p>
    </div>
  );

  return (
    <div>
      <PlaylistAddIcon onClick={handleOpen} style={{ margin: "auto", marginRight: "30px" }} />

      <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
        {body}
      </Modal>

      {/* <Modal title="Basic Modal" bodyStyle={{ padding: "0", zIndex:"22" }} visible={state.isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                     <YMaps query={{ apikey: "" }}>
                    <Map
                        modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
                        onClick={onMapClick}
                        state={state.mapState}
                        width='100%'
                        height='500px'
                    >
                        {state.coords!==[] ? <Placemark geometry={state.coords} /> : null}
                        <ZoomControl />
                        <FullscreenControl />
                        <SearchControl data={state.data!=={}?state.data:{}}/>
                        <GeolocationControl />
                    </Map>
                </YMaps>
                </Modal> */}
    </div>
  );
}
