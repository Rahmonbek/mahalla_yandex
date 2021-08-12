import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/form.css'
import Login from './Login'

export default function Signup(){
    return(
        <>
 <div className="login-root">
    <div className="box-root flex-flex flex-direction--column" style={{minHeight: '100vh',flexGrow: 1}}>
      <div className="loginbackground box-background--white padding-top--64">
        <div className="loginbackground-gridContainer">
          <div className="box-root flex-flex" style={{gridArea: 'top / start / 8 / end'}} >
            <div className="box-root" style={{backgroundImage: 'linear-gradient(white 0%, rgb(247, 250, 252) 33%)', flexGrow: 1}}></div>
          </div>
          <div className="box-root flex-flex" style={{gridArea: '4 / 2 / auto / 5'}} >
            <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ flexGrow: 1}}></div>
        </div>  
          <div className="box-root flex-flex" style={{gridArea: '6 / start / auto / 2'}} >
            <div className="box-root box-background--blue800" style={{backgroundColor: '#212d63', flexGrow: 1}}></div>
          </div>
          <div className="box-root flex-flex" style={{gridArea: '7 / start / auto / 4'}} >
            <div className="box-root box-background--blue animationLeftRight" style={{backgroundColor: '#5469d4', flexGrow: 1}}></div>
          </div>
          <div className="box-root flex-flex" style={{gridArea: '8 / 4 / auto / 6'}} >
            <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{backgroundColor: '#e3e8ee', flexGrow: 1}}></div>
          </div>
          <div className="box-root flex-flex" style={{gridArea: '2 / 15 / auto / end'}}>
            <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{backgroundColor: '#7fd3ed', flexGrow: 1}}></div>
          </div>
          <div className="box-root flex-flex" style={{gridArea: '3 / 14 / auto / end'}} >
            <div className="box-root box-background--blue animationRightLeft" style={{backgroundColor: '#5469d4', flexGrow: 1}}></div>
          </div>
          <div className="box-root flex-flex" style={{gridArea: '4/17/auto/ 20'}} >
            <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{backgroundColor: '#e3e8ee', flexGrow: 1}}></div>
          </div>
          <div className="box-root flex-flex" style={{gridArea: '5 / 14 / auto / 17'}} >
            <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ flexGrow: 1}}></div>
          </div> 
      </div>
    </div>
    <div className='form_body'>    
        <Card className="form_card">
            <Card.Body>
                <h2 className="text-center mb-4">Sign In</h2>
                <Login/>
            </Card.Body>
        </Card>
    </div>
  </div>
</div>
</>
    )
}
