import { Button } from 'antd'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TOKEN_AUTH } from '../contact';
import Admin2 from '../pages/Admin2'
function Dashboard() {
const onChiqish = ()=>{
    localStorage.removeItem(TOKEN_AUTH)
}
    return (<div>
<Admin2/>


        <h1 style={{textAlign: 'center'}}>
            <Button type='primary' onClick={onChiqish}><Link to='/'>Chiqish</Link></Button>
        </h1></div>
    )
}

export default Dashboard
