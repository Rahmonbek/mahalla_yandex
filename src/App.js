import React,{useState, useEffect} from 'react';
import {YMaps, Map, Clusterer, Placemark,   TypeSelector, ZoomControl, GeolocationControl, RouteButton, TrafficControl } from 'react-yandex-maps'
import { Points} from './server'
import RingLoader from 'react-spinners/RingLoader'
import Dialog from './components/Dialog'
//import pin from './boy.png'
import 'antd/dist/antd.css'
import './App.css'
import Select from './components/Select'

function App() {
     const [loading,setLoading]= useState(true)
     const [forclick,setforclick]= useState(false)
     const [village, setVillage] = useState('')
     const [mapBool,setMapBool] = useState(false)
     const [param, setParam]= useState([41.311151, 69.279716])
     const [zoom,setZoom] = useState(6)
     useEffect(()=>{
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
      setZoom(14)
      const dataJson = localStorage.getItem('selectNeighborhood')
      const data = JSON.parse(dataJson)
      console.log(data)
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
      <Select data={Points} onParam={handleParam}/>
       <YMaps >
        <Map
          width='100vw'
          height='95vh'
          defaultState={{
            center: param,
            zoom
          }}
        >
          <Clusterer options={{  preset: 'islands#invertedVioletClusterIcons',  groupByCoordinates: false, }}  >
          {mapBool ? <Placemark  
                        geometry={param}
                        onClick={Information}
                        // options={{
                        //   iconLayout: 'default#image',
                        //   iconImageHref: pin,
                        //   iconImageSize: [40, 40], 
                        //   hideIconOnBalloonOpen: false,
                        //   balloonOffset: [3, -40]}} 
                      /> : '' }  
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
