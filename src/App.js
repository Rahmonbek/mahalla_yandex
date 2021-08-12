import React, {useState, useEffect} from 'react';
import {YMaps, Map, Clusterer, Placemark,   TypeSelector, ZoomControl, GeolocationControl, RouteButton, TrafficControl } from 'react-yandex-maps'
import { Points} from './server'
import RingLoader from 'react-spinners/RingLoader'
import Dialog from './components/Dialog'
import Typography from '@material-ui/core/Typography';
import pin from './boy.png'
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

    useEffect(()=>{
        setPoints(Points)
        setLoading(false)
    },[])
    const onstart = (e) => {
      setformouse(false)
      setName(e)
    };
    const onclose = () => {
      setformouse(true)
    };
    
    const Information = (e)=>{
      setforclick(true)
      setVillage(e)
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
      {!formouse ? <Typography className='tooltip_map'>{name}</Typography>: ''}
      <h1 style={{textAlign: 'center'}}>Online Mahalla </h1>
      {forclick ? <Dialog open={forclick} onClose={handleClose} village={village}/> : ''}
      <Select/>
      <YMaps >
        <Map
          width='100vw'
          height='95vh'
          defaultState={{
            center: [41.311151, 69.279716],
            zoom: 12
          }}
        >
          <Clusterer options={{  preset: 'islands#invertedVioletClusterIcons',  groupByCoordinates: false, }}  >
            {points.map((coordinates, index) =>{
                return( 
                        <Placemark key={index} 
                        onMouseEnter={()=>onstart(coordinates.name)}
                        onMouseLeave={()=>onclose()}
                        onClick={()=>Information(coordinates)}
                        geometry={coordinates.param}
                          />
            )})}
            <Placemark  
                        geometry={[41.329151, 69.27916]}
                        options={{
                          iconLayout: 'default#image',
                          iconImageHref: pin,
                          iconImageSize: [40, 40], 
                          hideIconOnBalloonOpen: false,
                          balloonOffset: [3, -40]
                      }} />
          </Clusterer> 
          <GeolocationControl options={{ float: 'left' }} />
          <TypeSelector options={{ float: 'right' }} />
          <TrafficControl options={{ float: 'right' }} />
          <RouteButton options={{ float: 'right' }} />
          <ZoomControl options={{ float: 'left' }} />
        </Map>
    </YMaps>
    
  </>
    )}
    </>
  );
}
export default App;
