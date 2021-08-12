import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch,  Route, Redirect} from "react-router-dom";
import Form from './components/Form'
//import TextAria from './components/TextAria';
import Dashboard from './components/Dashboard';
import { TOKEN_AUTH } from './contact';
import NotFound from './components/NotFound';
const token = localStorage.getItem(TOKEN_AUTH)

ReactDOM.render(
  <React.StrictMode>
     <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path='/admin' >
            {token ? <Redirect to='/dashboard'/> : <Redirect to='/login' />}
          </Route>
          <Route path='/login' component={Form}/>
          {token ? <Route path='/dashboard' component={Dashboard} /> 
                 : <Route path='*' component={NotFound} />}
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);