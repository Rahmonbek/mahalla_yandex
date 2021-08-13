import { Button } from 'antd'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TOKEN_AUTH } from '../contact';

function Dashboard() {
const onChiqish = ()=>{
    localStorage.removeItem(TOKEN_AUTH)
}
    return (
        <h1 style={{textAlign: 'center'}}>
            <Button type='primary' onClick={onChiqish}><Link to='/'>Chiqish</Link></Button>
        </h1>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Dashboard
