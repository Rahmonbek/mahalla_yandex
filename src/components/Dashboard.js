import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import { TOKEN_AUTH } from '../contact';
import Admin2 from '../pages/Admin2';
function Dashboard() {
const onChiqish = ()=>{
    localStorage.removeItem(TOKEN_AUTH)
}
    return (<div>
<<<<<<< Updated upstream
<Admin2/>        
        </div>
 )
=======
        <h1 style={{textAlign: 'center'}}>
            <Button type='primary' onClick={onChiqish}><Link to='/'>Chiqish</Link></Button>
        </h1>
        </div> )
>>>>>>> Stashed changes
}

export default Dashboard
