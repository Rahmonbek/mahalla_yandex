import React, { useState, useEffect } from "react";
//import { Points} from './server'
import {
  YMaps,
  Map,
  Clusterer,
  Placemark,
  TypeSelector,
  ZoomControl,
  GeolocationControl,
  RouteButton,
  TrafficControl,
  GeoObject,
} from "react-yandex-maps";
import person from "./person.png";
import oila from "./pages/new.jpg";
import pin from "./boy.png";
import RingLoader from "react-spinners/RingLoader";
import Dialog from "./components/Dialog";
import "antd/dist/antd.css";
import "./App.css";
import Select from "./components/Select";
import Footer from "./components/Footer";
import axios from "axios";
import { url } from "./host/Host";

function App() {
  const [loading, setLoading] = useState(true);
  const [forclick, setforclick] = useState(false);
  const [village, setVillage] = useState("");
  //const [param, setParam] = useState([41.311151, 69.279716]);
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [coor, setCoor] = useState([]);
  const [Points, setPoints] = useState([]);

  const [zoom, setZoom] = useState(6);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
      setPoints(res.data);

      navigator.geolocation.getCurrentPosition(function (position) {
        setUser([position.coords.latitude, position.coords.longitude]);
        // console.log("Longitude is :", position.coords.longitude);
      });

      var coord = [];
      res.data.map((item) => {
        if (item.coor !== null) {
          coord.push(item.coor);
        } else {
          coord.push([]);
        }
      });
      setCoor(coord);
      console.log(coord);
      setLoading(false);
    });
  }, []);

  const handleUnnecessary = (e) => {
    setZoom(e);
  };

  const Information = (data) => {
    setforclick(true);
    setVillage(data);
  };
  const handleParam = () => {
    // let param = localStorage.getItem("param");
    // setParam(JSON.parse(param).param);
  };
  const handleClose = () => {
    setforclick(false);
  };
  const handleData = () => {
    setData(JSON.parse(localStorage.getItem("data")));
    var g = [];
    for (let i = 0; i < JSON.parse(localStorage.getItem("data")).length; i++) {
      g.push(JSON.parse(localStorage.getItem("data"))[i].coor);
    }
    setCoor(g);
    console.log(JSON.parse(localStorage.getItem("data")), coor);
  };
  return (
    <>
      {loading ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RingLoader
            loading={loading}
            size={150}
            color={"darkblue"}
          ></RingLoader>
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FCFCE7",
            }}
          >
            <img
              style={{
                borderRadius: "50%",
                height: "70px",
                width: "70px",
                marginLeft: "30px",
              }}
              src={oila}
              alt=""
            />
            <h1
              style={{
                fontSize: "22px",
                paddingLeft: "20px",
                marginRight: "30px",
              }}
            >
              O`zbekiston Reapublikasi mahalla va oilani qo`llab-quvvatlash
              vazirligi{" "}
            </h1>{" "}
          </div>
          {forclick ? (
            <Dialog open={forclick} onClose={handleClose} village={village} />
          ) : (
            ""
          )}
          <Select
            data={Points}
            onParam={handleParam}
            onData={handleData}
            onUnnecessary={handleUnnecessary}
          />
          <YMaps key={"uz_UZ"} query={{ lang: "uz_UZ" }}>
            <Map
              onLoad={(ymaps) => console.log(ymaps)}
              width="100vw"
              height="95vh"
              state={{
                center: user,
                zoom,
              }}
            >
              <GeoObject
                geometry={{
                  type: "Polygon",
                  coordinates: coor,
                  fillRule: 1,
                }}
                properties={{
                  balloonContent: "Многоугольник",
                }}
                options={{
                  fillColor: `rgba(255,255,0,0.4)`,
                  strokeColor: "#0000FF",
                  opacity: 0.5,
                  strokeWidth: 5,
                  strokeStyle: "shortdash",
                  iconLayout: "default#image",
                  iconImageHref: pin,
                  iconImageSize: [40, 40],
                  hideIconOnBalloonOpen: false,
                  balloonOffset: [3, -40],
                }}
              />
              <Clusterer
                options={{
                  preset: "islands#invertedVioletClusterIcons",
                  groupByCoordinates: false,
                }}
              >
                {data.map((info, index) => {
                  return (
                    <Placemark
                      key={index}
                      onMouse
                      className="placeMark"
                      geometry={info.param !== null ? info.param : []}
                      onClick={() => Information(info)}
                      properties={{
                        balloonContent: info.nomi,
                      }}
                      options={{ balloonContentLayout: info.nomi }}
                    />
                  );
                })}
              </Clusterer>
              <Clusterer
                options={{
                  preset: "islands#invertedRedClusterIcons",
                  groupByCoordinates: false,
                }}
              >
                <Placemark
                  key={-1}
                  geometry={user}
                  options={{
                    iconLayout: "default#image",
                    iconImageHref: person,
                    iconImageSize: [60, 90],
                    hideIconOnBalloonOpen: false,
                    balloonOffset: [3, 40],
                    iconImageOffset: [-1, -28],
                  }}
                  properties={{
                    balloonContent: "Siz",
                  }}
                />
              </Clusterer>
              <GeolocationControl options={{ float: "left" }} />
              <TypeSelector options={{ float: "right" }} />
              <TrafficControl options={{ float: "right" }} />
              <RouteButton options={{ float: "right" }} />
              <ZoomControl options={{ float: "left" }} />
            </Map>
          </YMaps>
        </>
      )}
      <Footer />
    </>
  );
}
export default App;
