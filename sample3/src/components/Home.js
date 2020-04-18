import React ,{ Component }from 'react';
import logo from './logo.png';
import clogo from './clogo.png';
import cover from './cover.jpg';
import  NavBar from './NavBar'
import Tve from './Tve'
import Welcome from './Welcome'
import {Link} from 'react-router-dom'
import Homedescription from './Homedescription'
import Previousyear from './Previousyear'
import Facilities from './Facilities'
import { Route,Switch } from 'react-router-dom'
import About from './About'
import Login from './Login'
import WhyCET from './WhyCET'

class Home extends Component
{
    handel()
    {
      alert('reroute to CET website')
    }

    render()
    {
    	return(
    		 <div className="Home">
         
    		 
      
      <h2>Career Guidence and Placement Unit</h2>
      <img  src ={cover} />
      < Homedescription />
      <Previousyear />
      <Facilities />

      </div>
    		)
    }
}

export default Home