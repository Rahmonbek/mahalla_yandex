import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import { BrowserRouter as Router, Switch,  Route,
   Redirect
  } from "react-router-dom";
import Form from './components/Form'
import Admin2 from './pages/Admin2';
import { TOKEN_AUTH } from './contact';
import NotFound from './components/NotFound';

const token = localStorage.getItem(TOKEN_AUTH)

ReactDOM.render(
  <React.StrictMode>
     <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path='/admin/' >
            {token ? <Redirect to='/dashboard'/> : <Redirect to='/login' />}
          </Route>
          <Route path='/login' component={Form}/>
          {token ? <Route path='/dashboard/:id' component={Admin2} /> 
                 : <Route path='*' component={NotFound} />}
          <Route exact path='/login' component={Form}/>
          <Route exact path='/dashboard/:id' component={Admin2} /> 
          <Route exact path='*' component={NotFound} />
s        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);