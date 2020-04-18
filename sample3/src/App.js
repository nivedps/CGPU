import React ,{ Component }from 'react';
import './App.css';
import logo from './components/logo.png';
import clogo from './components/clogo.png';
import cover from './components/cover.jpg';
import  NavBar from './components/NavBar'
import Tve from './components/Tve'
import Welcome from './components/Welcome'
import {Link} from 'react-router-dom'
import Homedescription from './components/Homedescription'
import Previousyear from './components/Previousyear'
import Facilities from './components/Facilities'
import { Route,Switch } from 'react-router-dom'
import About from './components/About'
import Login from './components/Login'
import Home from './components/Home'
import Recruiters from'./components/Recruiters'
import WhyCET from './components/WhyCET'
import Selection from './components/Selection'
import Alumini from './components/Alumini'
import firebase from './firebase'


class App extends Component
{
    
    render()
    {
      return (<>
        <title>cgpu</title>
        <div className="App">
        <NavBar />
        <switch>
        <Route exact path = '/' component={Home} />
        <Route exact path = '/Home' component={Home} />
        <Route exact path = '/About' component={About} />
        <Route exact path = '/Login' component={Login} />
        <Route exact path = '/Recruiters' component={Recruiters} />
        <Route exact path = '/WhyCET'component ={WhyCET}/>
        <Route exact path = '/Selection' component ={Selection}/>
        <Route exact path = '/Alumini' component ={Alumini}/>
        </switch>

    

      </div>
      </>);
    }
}
export default App;
