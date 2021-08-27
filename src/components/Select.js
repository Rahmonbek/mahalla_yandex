import React, { useState, useEffect } from "react";
import "./CSS/select.css";
import { Select, Button } from "antd";

const { Option } = Select;

function SelectMap(props) {
  const { onData, onUnnecessary } = props;
  const [data, setData] = useState(props.data);
  const [cities, setCities] = useState([]);
  const [neighborhoods, setNeighborhood] = useState([]);

  const [tumanlar, setTumanlar] = useState([
    ...new Set(data.map((item) => item.tuman)),
  ]);
  const [mahallalar, setMahallalar] = useState([
    ...new Set(data.map((item) => item.nomi)),
  ]);

  const AllProvinces = [...new Set(props.data.map((item) => item.viloyat))];

  useEffect(() => {
    setCities([...new Set(data.map((item) => item.tuman))]);
    setNeighborhood([...new Set(data.map((item) => item.nomi))]);
  }, []);

  const handleProvinceChange = (value) => {
    var g = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].viloyat === value) {
        g.push(data[i]);
      }
    }
    if (value === "1") {
      localStorage.setItem("data", JSON.stringify(data));
      //localStorage.setItem("param", JSON.stringify(data[0]));
      onUnnecessary(6);
    } else {
      localStorage.setItem("data", JSON.stringify(g));
      //localStorage.setItem("param", JSON.stringify(g[0]));
      onUnnecessary(8);
    }

    //Param set
    //onParam();
    //set tuman
    setTumanlar(g);
    setCities([...new Set(g.map((item) => item.tuman))]);
    onData();
  };
  const handleCityChange = (value) => {
    var g = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].tuman === value) {
        g.push(data[i]);
      }
    }
    if (value === "1") {
      localStorage.setItem("data", JSON.stringify(tumanlar));
      // localStorage.setItem("param", JSON.stringify(tumanlar[0]));
      onUnnecessary(8);
    } else {
      localStorage.setItem("data", JSON.stringify(g));
      // localStorage.setItem("param", JSON.stringify(g[0]));
      onUnnecessary(12);
    }
    //Param set
    //onParam();
    onData();

    //set mahalla
    setMahallalar(g);
    setNeighborhood([...new Set(g.map((item) => item.nomi))]);
  };
  const handleNeighborhoodsChange = (value) => {
    var g = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].nomi === value) {
        g.push(data[i]);
      }
    }
    if (value === "1") {
      localStorage.setItem("data", JSON.stringify(mahallalar));
      localStorage.setItem("param", JSON.stringify(mahallalar[0]));
      onUnnecessary(12);
    } else {
      localStorage.setItem("data", JSON.stringify(g));
      localStorage.setItem("param", JSON.stringify(g[0]));
      onUnnecessary(15);

      onData();
    } //Param set
    // onParam();
  };
  const Result = () => {
    setData(props.data);
    localStorage.removeItem("data");
    localStorage.removeItem("param");
    window.location.href = "/";
  };
  return (
    <div className="map_select">
      <div className="map_item">
        <Select
          defaultValue="Viloyat"
          style={{ width: 120 }}
          onChange={handleProvinceChange}
        >
          <Option key={1}>Hammasi</Option>
          {AllProvinces.map((province) => (
            <Option key={province}>{province}</Option>
          ))}
        </Select>
        <Select
          defaultValue="Tuman"
          style={{ width: 120 }}
          onChange={handleCityChange}
        >
          <Option key={1}>Hammasi</Option>
          {cities.map((item) => (
            <Option key={item}>{item}</Option>
          ))}
        </Select>
        <Select
          style={{ width: 120 }}
          defaultValue="Mahalla"
          onChange={handleNeighborhoodsChange}
        >
          <Option key={1}>Hammasi</Option>
          {neighborhoods.map((item) => (
            <Option key={item}>{item}</Option>
          ))}
        </Select>
        <Button onClick={Result}>Qaytish kiritish</Button>
      </div>
    </div>
  );
}

export default SelectMap;
