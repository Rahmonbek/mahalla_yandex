import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Menu} from 'antd';
import {
  ContainerOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;



class Viloyat extends Component {
    state = {

         Viloyat: [
            { id: 1, lastName: 'Toshtent',},
            { id: 2, lastName: 'Navoiy' },
            { id: 3, lastName: 'Namangan' },
            { id: 4, lastName: 'Buxoro' },
            { id: 5, lastName: 'Xorazm'},
            { id: 6, lastName: 'Andijon' },
            { id: 7, lastName: 'Qarshi'},
            { id: 8, lastName: 'Fargina' },
            { id: 9, lastName: 'Jizzax'},
          ],



        collapsed: false,
      };
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render() {
        return (
     <div style={{ width: 256 }}>
       
        <Menu
        style={{height:'100vh', width:'400px'}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <SubMenu icon={<ContainerOutlined  />}>
          {this.state.Viloyat.map((text, index) => (
          <SubMenu key={text.lastName} icon={<ContainerOutlined  />} title={text.lastName}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>))}
           </SubMenu>
        </Menu>
            </div>
        );
    }
}

export default Viloyat;