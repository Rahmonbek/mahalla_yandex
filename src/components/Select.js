import React from 'react'
import './CSS/select.css'
import { Select } from 'antd';

const { Option } = Select;

function SelectMap() {
    
  const provinceData = ['Zhejiang', 'Jiangsu'];
  const cityData = {
        Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
        Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
  };
  const [cities, setCities] = React.useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = React.useState(cityData[provinceData[0]][0]);
    

  const handleProvinceChange = value => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = value => {
    setSecondCity(value);
  };
    return (
        <div className="map_select">
            <Select defaultValue={provinceData[0]} style={{ width: 120 }} onChange={handleProvinceChange}>
                {provinceData.map(province => (
                <Option key={province}>{province}</Option>
                ))}
            </Select>
            <Select style={{ width: 120 }} value={secondCity} onChange={onSecondCityChange}>
                {cities.map(city => (
                <Option key={city}>{city}</Option>
                ))}
            </Select>
        </div>
    )
}

export default SelectMap
