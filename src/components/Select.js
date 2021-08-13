import React, {useState} from 'react'
import './CSS/select.css'
import { Select, Button } from 'antd';

const { Option } = Select;

function SelectMap(props) {
  const {onParam, onData} = props
  const [data,setData]  = useState(props.data)  
  const [cities,setCities] = useState([])
  const [neighborhoods,setNeighborhood] = useState([])

  const AllProvinces =[ ...new Set(props.data.map(item=>item.viloyat))]
  const handleProvinceChange = value => {
    const selectProvince = data.filter(item => item.viloyat === value)  
          setData(selectProvince)
          setCities([ ...new Set(selectProvince.map(item=>item.tuman))])
          localStorage.setItem('data',JSON.stringify(selectProvince))
          onData()
  };
  const handleCityChange = value => {
    const selectCity = data.filter(item => item.tuman === value) 
          setNeighborhood([ ...new Set(selectCity.map(item=>item.name))])
          localStorage.setItem('data',JSON.stringify(selectCity))
          setData(selectCity)
          onData()
  };
  
  const handleNeighborhoodsChange = value=>{
    const selectNeighborhood = data.filter(item => item.name === value)
          localStorage.setItem('selectNeighborhood', JSON.stringify(selectNeighborhood))
          // localStorage.setItem('param', JSON.stringify(selectNeighborhood[0].param))
          onParam()
  }
  const Result = ()=>{
    setData(props.data)
    localStorage.removeItem('data')
    localStorage.removeItem('param')
    onParam()
    window.location.href='/'
  }
    return (
        <div className="map_select">
        <div className="map_item">
        <Select 
           defaultValue='Viloyat'  style={{ width: 120 }} onChange={handleProvinceChange}>
                {AllProvinces.map(province => (
                <Option key={province}>{province}</Option>
                ))}
            </Select>
             <Select defaultValue='Tuman' style={{ width: 120 }} onChange={handleCityChange}>
                {cities.map(item => (
                <Option key={item}>{item}</Option>
                ))}
            </Select> 
            <Select style={{ width: 120 }} defaultValue='Mahalla' onChange={handleNeighborhoodsChange}>
                {neighborhoods.map(item => (
                <Option key={item}>{item}</Option>
                ))}
            </Select>
            <Button onClick={Result}>Qaytish kiritish</Button>

        </div>
        </div>
    )
}

export default SelectMap
