import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import PetsIcon from "@material-ui/icons/Pets";
import SearchIcon from "@material-ui/icons/Search";
import Card from "./Card";

import ModalNavbar from "./NavbarModal";
import "bootstrap/dist/css/bootstrap.min.css";
// import Footer from './Footer'
// import Viloyat from './Viloyat'
import { Layout, Menu, Breadcrumb } from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
import Card2 from "./Card2";

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
    // vertical padding + font size from searchIcon
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
  const [key, setKey] = useState(15);
  const handleChange = (e) => {
    setState({ value: e.target.value });
  };
  const selectedKey = (e) => {
    setKey(e.key);
    console.log(e.key);
  };

  return (
    <div className={classes.root}>
      <Layout>
        <Header className="header">
          <div className="logo" style={{ float: "left", margin: "0 20px 0 0", padding: "0", height: "64px" }}>
            <img src="https://yuz.uz/file/news/9ee76fefe2b125d5372e2cd584d74806.jpg" height="100%" alt="" />
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
            <Menu mode="inline" defaultSelectedKeys={["15"]} style={{ height: "100%", borderRight: 0 }} onSelect={selectedKey}>
              <Menu.Item key="15" icon={<UserOutlined />}>
                Hammasi
              </Menu.Item>
              <Menu.Item key="1" icon={<UserOutlined />}>
                Andijon viloyat
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                Buxoro viloyat
              </Menu.Item>
              <Menu.Item key="3" icon={<UserOutlined />}>
                Farg'ona viloyat
              </Menu.Item>
              <Menu.Item key="4" icon={<UserOutlined />}>
                Jizzax viloyat
              </Menu.Item>
              <Menu.Item key="14" icon={<UserOutlined />}>
                Xorazm viloyat
              </Menu.Item>
              <Menu.Item key="5" icon={<UserOutlined />}>
                Namangan viloyat
              </Menu.Item>
              <Menu.Item key="6" icon={<UserOutlined />}>
                Navoiy viloyat
              </Menu.Item>
              <Menu.Item key="7" icon={<UserOutlined />}>
                Qashqadaryo viloyat
              </Menu.Item>
              <Menu.Item key="8" icon={<UserOutlined />}>
                Qoraqalpog'iston Respublikasi
              </Menu.Item>
              <Menu.Item key="9" icon={<UserOutlined />}>
                Samarqand viloyat
              </Menu.Item>
              <Menu.Item key="10" icon={<UserOutlined />}>
                Sirdaryo viloyat
              </Menu.Item>
              <Menu.Item key="11" icon={<UserOutlined />}>
                Surxondaryo viloyat
              </Menu.Item>
              <Menu.Item key="12" icon={<UserOutlined />}>
                Toshkent shahri
              </Menu.Item>
              <Menu.Item key="13" icon={<UserOutlined />}>
                Toshkent viloyat
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
              <Card2 key={key} />
              <Footer style={{ textAlign: "center", marginTop: "20px" }}>©2021 IT Tower tomonidan yaratildi.</Footer>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
