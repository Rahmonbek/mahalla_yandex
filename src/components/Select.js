import React, {useState} from 'react'
import './CSS/select.css'
import { Select, Button } from 'antd';

const { Option } = Select;

function SelectMap(props) {
  const {onParam} = props
  const [data,setData]  = useState(props.data)  
  const [cities,setCities] = useState([])
  const [neighborhoods,setNeighborhood] = useState([])
  const [citybool, setCityBool] = useState(false)
  const [mahallabool, setMahallBool] = useState(false)
  const [provincebool,setProcince] =  useState(true)

  const AllProvinces =[ ...new Set(props.data.map(item=>item.viloyat))] 
  //const provinces = [ ...new Set(props.data.map(item=>item.viloyat))]
  const handleProvinceChange = value => {
    const selectProvince = data.filter(item => item.viloyat === value)  
    setData(selectProvince)
    setCities([ ...new Set(selectProvince.map(item=>item.tuman))])
    setCityBool(true)
    setProcince(false)
  };
  const handleCityChange = value => {
    const selectCity = data.filter(item => item.tuman === value) 
    setNeighborhood([ ...new Set(selectCity.map(item=>item.name))])
    setData(selectCity)
    setCityBool(false)
    setMahallBool(true)
  };
  
  const handleNeighborhoodsChange = value=>{
    const selectNeighborhood = data.filter(item => item.name === value)
    localStorage.setItem('selectNeighborhood', JSON.stringify(selectNeighborhood))
    localStorage.setItem('param',JSON.stringify(selectNeighborhood[0].param))
    onParam()
  }
  const Result = ()=>{
    setData(props.data)
    localStorage.removeItem('selectNeighborhood')
    localStorage.removeItem('param')
    onParam()
    setCityBool(false)
    setMahallBool(false)
    setProcince(true)
  }
    return (
        <div className="map_select">
          {provincebool ? <Select 
           defaultValue='Viloyat'  style={{ width: 120 }} onChange={handleProvinceChange}>
                {AllProvinces.map(province => (
                <Option key={province}>{province}</Option>
                ))}
            </Select> : '' } 
            {citybool ? <Select defaultValue='Tuman' style={{ width: 120 }} onChange={handleCityChange}>
                {cities.map(item => (
                <Option key={item}>{item}</Option>
                ))}
            </Select> : ''}
           { mahallabool ? <Select style={{ width: 120 }} defaultValue='Mahalla' onChange={handleNeighborhoodsChange}>
                {neighborhoods.map(item => (
                <Option key={item}>{item}</Option>
                ))}
            </Select> : ''}
            <Button onClick={Result}>Result</Button>
        </div>
    )
}

export default SelectMap
