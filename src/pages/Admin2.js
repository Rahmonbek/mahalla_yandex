import React, { useState } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.min.css";

import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Card2 from "./Card2";
import { Link } from "react-router-dom";

// const { SubMenu } = Menu;
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

  // const [state, setState] = useState({
  //   value: "",
  //   show: "false",
  // });
  const [key, setKey] = useState("Hammasi");
  // const handleChange = (e) => {
  //   setState({ value: e.target.value });
  // };
  const selectedKey = (e) => {
    setKey(e.key);
  };

  return (
    <div className={classes.root}>
      <Layout>
        <Header className="header">
          <div className="logo" style={{ float: "left", margin: "0 20px 0 0", padding: "0", height: "64px" }}>
            <img style={{ borderRadius: "50%" }} src="https://yuz.uz/file/news/9ee76fefe2b125d5372e2cd584d74806.jpg" height="100%" alt="" />
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          Online Mahalla admin paneli
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
            <Menu mode="inline" defaultSelectedKeys={["Hammasi"]} style={{ height: "560px", overflowY: "auto", overflowX: "hidden", borderRight: 0 }} onSelect={selectedKey}>
              <Menu.Item key="Hammasi" icon={<UserOutlined />}>
                <Link style={{ textDecoration: "none" }} to="Hammasi">
                  {" "}
                  Hammasi
                </Link>
              </Menu.Item>
              <Menu.Item key="Andijon viloyati" icon={<UserOutlined />}>
                <Link style={{ textDecoration: "none" }} to="Andijon viloyati">
                  {" "}
                  Andijon viloyati
                </Link>
              </Menu.Item>
              <Menu.Item key="Buxoro viloyati" icon={<UserOutlined />}>
                <Link style={{ textDecoration: "none" }} to="Buxoro viloyati">
                  {" "}
                  Buxoro viloyati
                </Link>
              </Menu.Item>
              <Menu.Item key="Fargona viloyati" icon={<UserOutlined />}>
                <Link style={{ textDecoration: "none" }} to="Fargona viloyati">
                  {" "}
                  Farg'ona viloyati
                </Link>
              </Menu.Item>
              <Menu.Item key="Jizzax viloyati" icon={<UserOutlined />}>
                <Link style={{ textDecoration: "none" }} to="Jizzax viloyati">
                  {" "}
                  Jizzax viloyati
                </Link>
              </Menu.Item>
              <Menu.Item key="Xorazm viloyati" icon={<UserOutlined />}>
                <Link style={{ textDecoration: "none" }} to="Xorazm viloyati">
                  {" "}
                  Xorazm viloyati
                </Link>
              </Menu.Item>
              <Menu.Item key="Namangan viloyati" icon={<UserOutlined />}>
                <Link style={{ textDecoration: "none" }} to="Namangan viloyati">
                  {" "}
                  Namangan viloyati
                </Link>
              </Menu.Item>
              <Menu.Item key="Navoiy viloyati" icon={<UserOutlined />}>
                <Link style={{ textDecoration: "none" }} to="Navoiy viloyati">
                  {" "}
                  Navoiy viloyati
                </Link>
              </Menu.Item>
              <Menu.Item key="Qashqadaryo viloyati" icon={<UserOutlined />}>
                <Link style={{ textDecoration: "none" }} to="Qashqadaryo viloyati">
                  {" "}
                  Qashqadaryo viloyati
                </Link>
              </Menu.Item>
              <Menu.Item key="Qoraqalpog'iston Respublikasi" icon={<UserOutlined />}>
                <Link style={{ textDecoration: "none" }} to="Qoraqalpog'iston Respublikasi">
                  {" "}
                  Qoraqalpog'iston Respublikasi
                </Link>
              </Menu.Item>
              <Menu.Item key="Samarqand viloyati" icon={<UserOutlined />}>
                <Link style={{ textDecoration: "none" }} to="Samarqand viloyati">
                  {" "}
                  Samarqand viloyati
                </Link>
              </Menu.Item>
              <Menu.Item key="Sirdaryo viloyati" icon={<UserOutlined />}>
                <Link style={{ textDecoration: "none" }} to="Sirdaryo viloyati">
                  {" "}
                  Sirdaryo viloyati
                </Link>
              </Menu.Item>
              <Menu.Item key="Surxondaryo viloyati" icon={<UserOutlined />}>
                <Link style={{ textDecoration: "none" }} to="Surxondaryo viloyati">
                  {" "}
                  Surxondaryo viloyati
                </Link>
              </Menu.Item>
              <Menu.Item key="Toshkent shahri" icon={<UserOutlined />}>
                <Link style={{ textDecoration: "none" }} to="Toshkent shahri">
                  {" "}
                  Toshkent shahri
                </Link>
              </Menu.Item>
              <Menu.Item key="Toshkent viloyati" icon={<UserOutlined />}>
                <Link style={{ textDecoration: "none" }} to="Toshkent viloyati">
                  {" "}
                  Toshkent viloyati
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 14px 14px", marginTop: "20px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                height: "530px",
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
