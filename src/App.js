import React,{useState, useEffect} from 'react';
import { Points} from './server'
import {YMaps, Map, Clusterer, Placemark, 
  TypeSelector, ZoomControl, GeolocationControl, RouteButton, TrafficControl, GeoObject } from 'react-yandex-maps'
import pin from './boy.png'
import RingLoader from 'react-spinners/RingLoader'
import Dialog from './components/Dialog'
import 'antd/dist/antd.css'
import './App.css'
import Select from './components/Select'
import Footer from './components/Footer'
import axios  from 'axios';
import {url} from './host/Host'
function App() {
     const [loading,setLoading]= useState(true)
     const [forclick,setforclick]= useState(false)
     const [village, setVillage] = useState('')
     const [param, setParam]= useState([41.311151, 69.279716])
     const [data,setData] = useState([])
     const [coor,setCoor] = useState([])
     useEffect(()=>{
        axios.get(url).then((res)=>{
          console.log(res.data)
          setData(Points)
        })
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
    }
    const handleClose = () => {
      setforclick(false);
    };
    const handleData = ()=>{
      setData(JSON.parse(localStorage.getItem('data')))
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
      {forclick ? <Dialog open= {forclick} onClose={handleClose} village={village}/> : ''} 
      <Select data={Points} onParam={handleParam} onData={handleData}/>
        <YMaps key={'uz_UZ'}  query={{lang: 'uz_UZ'}} >
        <Map
          width='100vw'
          height='95vh'
          defaultState={{
            center: param,
            zoom : 6
          }}
        >
         <GeoObject  
          geometry={{
          type: 'Polygon',
          coordinates: coor,
          fillRule: 1,
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
