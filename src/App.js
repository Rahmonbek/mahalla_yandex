import React,{useState, useEffect} from 'react';
import {YMaps, Map, Clusterer, Placemark, 
        TypeSelector, ZoomControl, GeolocationControl, RouteButton, TrafficControl, GeoObject } from 'react-yandex-maps'
import { Points} from './server'
import RingLoader from 'react-spinners/RingLoader'
import Dialog from './components/Dialog'
import 'antd/dist/antd.css'
import './App.css'
import pin from './boy.png'
import Select from './components/Select'
import Footer from './components/Footer'

function App() {
     const [loading,setLoading]= useState(true)
     const [forclick,setforclick]= useState(false)
     const [village, setVillage] = useState('')
     const [param, setParam]= useState([41.311151, 69.279716])
     const [data,setData] = useState([])
     const [zoom,setZoom] = useState(6)
     const [coor,setCoor] = useState([])

     useEffect(()=>{
        setData(Points)
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
        });
        var coord=[]
        Points.map(item=>coord.push(item.coor))
        console.log(coord)
        setCoor(coord)
        setLoading(false)
     },[])

    const Information = ()=>{
      const dataJson = localStorage.getItem('selectNeighborhood')
      const data = JSON.parse(dataJson)
      setforclick(true)  
      setVillage(data[0])
    }
    const handleParam = ()=>{
      let param = localStorage.getItem('param')
      setParam(JSON.parse(param))
      const dataJson = localStorage.getItem('selectNeighborhood')
      const data = JSON.parse(dataJson)
      console.log(data)
    }
    const handleClose = () => {
      setforclick(false);
    };
    const handleData = ()=>{
      setData(JSON.parse(localStorage.getItem('data')))
      setZoom(9)
    }
      
      return (
    <>
     {loading ? (
      <div style={{width: '100vw', height: '100vh', display:'flex', justifyContent: 'center', alignItems: 'center' }}>
        <RingLoader loading={loading} size={150} color={'#f37a24'}></RingLoader>
      </div>
    ) : (
      <>
      <h1 style={{textAlign: 'center'}}>Online Mahalla </h1> 
      {forclick ? <Dialog open={forclick} onClose={handleClose} village={village}/> : ''} 
      <Select data={Points} onParam={handleParam} onData={handleData}/>
       <YMaps >
        <Map
          width='100vw'
          height='95vh'
          defaultState={{
            center: param,
            zoom
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
          iconImageHref: pin,
          iconImageSize: [40, 40], 
          hideIconOnBalloonOpen: false,
          balloonOffset: [3, -40]
        }}
      />
          <Clusterer options={{  preset: 'islands#invertedVioletClusterIcons',  groupByCoordinates: false, }}  >
            {data.map((info,index)=>{
            
            return<Placemark
              key={index}  
              geometry={info.param}
              onClick={Information}
              properties={{
                balloonContent: info.name,
              }}
            />})}
            
                {/* <Placemark  
                    options={{
                      }}
              /> */}
         </Clusterer> 
          <GeolocationControl options={{ float: 'left' }} />
          <TypeSelector options={{ float: 'right' }} />
          <TrafficControl options={{ float: 'right' }} />
          <RouteButton options={{ float: 'right' }} />
          <ZoomControl  options={{ float: 'left' }} />
        </Map>
    </YMaps>
     
   </>
    )}
    <Footer/>
    </> 
  );
}
export default App;
