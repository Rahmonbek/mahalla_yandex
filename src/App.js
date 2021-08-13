
import React, {useState, useEffect} from 'react';
import {YMaps, Map, Clusterer, Placemark,   TypeSelector, ZoomControl, GeolocationControl, RouteButton, TrafficControl, Polygon, GeoObject, SearchControl } from 'react-yandex-maps'

import { Points} from './server'
import RingLoader from 'react-spinners/RingLoader'
import Dialog from './components/Dialog'
//import pin from './boy.png'
import 'antd/dist/antd.css'
import './App.css'
import Select from './components/Select'

function App() {

    const [points,setPoints]= useState('')
    const [loading,setLoading]= useState(true)
    const [forclick,setforclick]= useState(false)
    const [village, setVillage] = useState('')
    const [formouse,setformouse] = useState(true)
    const [name,setName] = useState('')
    const [coor,setCoor] = useState([])

    const [mapBool,setMapBool] = useState(false)
    const [param, setParam]= useState([41.311151, 69.279716])
    const [zoom,setZoom] = useState(6)
   
    useEffect(()=>{
        setPoints(Points)
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
        });
        var coord=[]
        Points.map(item=>{
          coord.push(item.coor)
        })
        console.log(coord)
        setCoor(coord)
        setLoading(false)
    },[])
    const onstart = (e) => {
      setformouse(false)
      setName(e)
    };
    const onclose = () => {
      setformouse(true)
    };
    
  

    const Information = ()=>{
      const dataJson = localStorage.getItem('selectNeighborhood')
      const data = JSON.parse(dataJson)
      setforclick(true)  
      setVillage(data[0])
    }
    const handleParam = ()=>{
      let param = localStorage.getItem('param')
      setParam(JSON.parse(param))
      setZoom(14)
      const dataJson = localStorage.getItem('selectNeighborhood')
      const data = JSON.parse(dataJson)
      if(data){
        setMapBool(true)
      }else{
        setMapBool(false)
      }

    }
    const handleClose = () => {
      setforclick(false);
    };
    
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
      <Select data={Points}  onParam={handleParam}/>
       <YMaps >
        <Map
          width='100vw'
          height='95vh'
          defaultState={{
            center: param,
            zoom,
       
          }
          }
          
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
        }}
      />
          <Clusterer options={{  preset: 'islands#invertedVioletClusterIcons',  groupByCoordinates: false, }}  >
          {mapBool ? <Placemark  geometry={param} onClick={Information} /> : '' }  
         </Clusterer> 
          <GeolocationControl options={{ float: 'left' }} />
          <TypeSelector options={{ float: 'right' }} />
          <TrafficControl options={{ float: 'right' }} />
          <RouteButton options={{ float: 'right' }} />
          <ZoomControl options={{  float: 'left' }} />
        </Map>
    </YMaps>
     
   </>
    )}
    </> 
  );
}
export default App;
