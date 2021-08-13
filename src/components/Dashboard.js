import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import { TOKEN_AUTH } from '../contact';
import Admin2 from '../pages/Admin2'
function Dashboard() {
const onChiqish = ()=>{
    localStorage.removeItem(TOKEN_AUTH)
}
    return (<div>
<Admin2/>

</div>
    )
}

export default Dashboard
