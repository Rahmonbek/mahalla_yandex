import React, { useState } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.min.css";


import { Layout, Menu} from "antd";
import { UserOutlined} from "@ant-design/icons";
import Card2 from "./Card2";
import {Link} from 'react-router-dom'

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Admin2() {
  const classes = useStyles();

  const rows = [
    { id: 1, Viloyat: "Toshkent", firstName: "Jon", age: 35 },
    { id: 2, Viloyat: "Fargona", firstName: "Cersei", age: 42 },
    { id: 3, Viloyat: "Qarshi", firstName: "Jaime", age: 45 },
    { id: 4, Viloyat: "Navoiy", firstName: "Arya", age: 16 },
    { id: 5, Viloyat: "Xorazm", firstName: "Daenerys", age: null },
    { id: 6, Viloyat: "Jizzax", firstName: null, age: 150 },
    { id: 7, Viloyat: "Andijon", firstName: "Ferrara", age: 44 },
    { id: 8, Viloyat: "Namangan", firstName: "Rossini", age: 36 },
    { id: 9, Viloyat: "Samarqand", firstName: "Harvey", age: 65 },
  ];

  const [state, setState] = useState({
    value: "",
    show: "false",
  });
  const [key, setKey] = useState("Hammasi");
  const handleChange = (e) => {
    setState({ value: e.target.value });
  };
  const selectedKey = (e) => {
    setKey(e.key);
    
  };

  return (
    <div className={classes.root}>
      <Layout>
        <Header className="header">
          <div className="logo" style={{ float: "left", margin: "0 20px 0 0", padding: "0", height: "64px" }}>
            <img style={{borderRadius:'50%'}} src="https://yuz.uz/file/news/9ee76fefe2b125d5372e2cd584d74806.jpg" height="100%" alt="" />
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider
            width={200}
            className="site-layout-background"
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <Menu mode="inline" defaultSelectedKeys={["15"]} style={{ height: "590px", overflowY:'auto', borderRight: 0 }} onSelect={selectedKey}>
              <Menu.Item key="Hammasi" icon={<UserOutlined />}>
              <Link style={{textDecoration:'none'}} to="Hammasi">  Hammasi</Link>
              </Menu.Item>
              <Menu.Item key="Andijon viloyat" icon={<UserOutlined />}>
              <Link style={{textDecoration:'none'}} to="Andijon viloyat">  Andijon viloyat</Link>
              </Menu.Item>
              <Menu.Item key="Buxoro viloyat" icon={<UserOutlined />}>
              <Link style={{textDecoration:'none'}} to="Buxoro viloyat">  Buxoro viloyat</Link>
              </Menu.Item>
              <Menu.Item key="Fargona viloyat" icon={<UserOutlined />}>
              <Link style={{textDecoration:'none'}} to="Fargona viloyat">  Farg'ona viloyat</Link>
              </Menu.Item>
              <Menu.Item key="Jizzax viloyat" icon={<UserOutlined />}>
              <Link style={{textDecoration:'none'}} to="Jizzax viloyat">  Jizzax viloyat</Link>
              </Menu.Item>
              <Menu.Item key="Xorazm viloyat" icon={<UserOutlined />}>
              <Link style={{textDecoration:'none'}} to="Xorazm viloyat">  Xorazm viloyat</Link>
              </Menu.Item>
              <Menu.Item key="Namangan viloyat" icon={<UserOutlined />}>
              <Link style={{textDecoration:'none'}} to="Namangan viloyat">  Namangan viloyat</Link>
              </Menu.Item>
              <Menu.Item key="Navoiy viloyat" icon={<UserOutlined />}>
              <Link style={{textDecoration:'none'}} to="Navoiy viloyat">  Navoiy viloyat</Link>
              </Menu.Item>
              <Menu.Item key="Qashqadaryo viloyat" icon={<UserOutlined />}>
              <Link style={{textDecoration:'none'}} to="Qashqadaryo viloyat">  Qashqadaryo viloyat</Link>
              </Menu.Item>
              <Menu.Item key="Qoraqalpog'iston Respublikasi" icon={<UserOutlined />}>
              <Link style={{textDecoration:'none'}} to="Qoraqalpog'iston Respublikasi">  Qoraqalpog'iston Respublikasi</Link>
              </Menu.Item>
              <Menu.Item key="Samarqand viloyat" icon={<UserOutlined />}>
              <Link style={{textDecoration:'none'}} to="Samarqand viloyat">  Samarqand viloyat</Link>
              </Menu.Item>
              <Menu.Item key="Sirdaryo viloyat" icon={<UserOutlined />}>
              <Link style={{textDecoration:'none'}} to="Sirdaryo viloyat">  Sirdaryo viloyat</Link>
              </Menu.Item>
              <Menu.Item key="Surxondaryo viloyat" icon={<UserOutlined />}>
              <Link style={{textDecoration:'none'}} to="Surxondaryo viloyat">  Surxondaryo viloyat</Link>
              </Menu.Item>
              <Menu.Item key="Toshkent shahri" icon={<UserOutlined />}>
              <Link style={{textDecoration:'none'}} to="Toshkent shahri">  Toshkent shahri</Link>
              </Menu.Item>
              <Menu.Item key="Toshkent viloyat" icon={<UserOutlined />}>
              <Link style={{textDecoration:'none'}} to="Toshkent viloyat">  Toshkent viloyat</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 14px 14px", marginTop: "20px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                height: 530,
                overflow: "auto",
              }}
            >
              <Card2 vil={key} />
              <Footer style={{ textAlign: "center", marginTop: "20px" }}>©2021 IT Tower tomonidan yaratildi.</Footer>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
