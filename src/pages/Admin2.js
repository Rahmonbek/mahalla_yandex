import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import PetsIcon from '@material-ui/icons/Pets';
import SearchIcon from '@material-ui/icons/Search';
import Card from './Card'
import style from '../components/CSS/State.module.css'
import ModalNavbar from './NavbarModal'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './Footer'
// import Viloyat from './Viloyat'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { Search } = Input;
const onSearch = value => console.log(value);
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer,  } = Layout;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));




export default function Admin2() {
  const classes = useStyles();
  

   const rows = [
     { id: 1, Viloyat: 'Toshkent', firstName: 'Jon', age: 35 },
     { id: 2, Viloyat: 'Fargona', firstName: 'Cersei', age: 42 },
     { id: 3, Viloyat: 'Qarshi', firstName: 'Jaime', age: 45 },
     { id: 4, Viloyat: 'Navoiy', firstName: 'Arya', age: 16 },
     { id: 5, Viloyat: 'Xorazm', firstName: 'Daenerys', age: null },
     { id: 6, Viloyat: 'Jizzax', firstName: null, age: 150 },
     { id: 7, Viloyat: 'Andijon', firstName: 'Ferrara', age: 44 },
     { id: 8, Viloyat: 'Namangan', firstName: 'Rossini', age: 36 },
     { id: 9, Viloyat: 'Samarqand', firstName: 'Harvey', age: 65 },
   ];


  const [state, setState] = useState({
    value:'',
    show:'false'
});

const handleChange = (e) => {
setState({value: e.target.value})
}



  return (
    <div className={classes.root}>
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      Online Mahalla admin paneli 
    
       <Space direction="vertical" className={style.logo1}>
       <Search
       type="primary"
      placeholder="Qidirish"
      allowClear
      enterButton="Izlash"
      size="large"
      onSearch={onSearch}
    />
  </Space>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background"
         onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          // defaultOpenKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
          Buxoro
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          Buxoro
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          Buxoro
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          Buxoro
        </Menu.Item>
        <Menu.Item key="5" icon={<UserOutlined />}>
          Buxoro
        </Menu.Item>
        <Menu.Item key="6" icon={<UserOutlined />}>
          Buxoro
        </Menu.Item>

        </Menu>
      </Sider>
      <Layout style={{ padding: '0 14px 14px', marginTop:'20px' }}>
      
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            height: 530,
            overflow:'auto',
          }}
        >
         <Card/>
          <Footer style={{ textAlign: 'center', marginTop:'20px' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Content>
       
      </Layout>
    </Layout>
  </Layout>

    </div>
  );
}