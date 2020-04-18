import React ,{ Component } from 'react' ;
import {Link} from 'react-router-dom'
import logo from './logo.png';
import clogo from './clogo.png';
import {Navbar, Nav, NavItem, NavDropdown, Glyphicon, Grid, Row, Col} from 'react-bootstrap'
import {FaHome} from 'react-icons/fa'
import {Dropdown,DropdownButton,Button} from 'react-bootstrap'


class NavBar extends Component
{
	state = {isOpen : false}

	handletoggle = ()=>
	{
		this.setState = {isOpen : !this.state.isOpen}
	}


	render()   
	{
		return(
			<div className = 'fixed'>
			<div className = 'heading'>
			<nav className = "navbar" activeKey = '/Home' >
			<Nav.Item className ='b'>
			<Nav.Link className = 'a' href = '/Home'><FaHome/></Nav.Link>
			</Nav.Item>
			<Nav.Item className ='b'>
			<Nav.Link className = 'a' href = '/About'>About</Nav.Link>
			</Nav.Item>
			<Nav.Item className ='b'>
			<Nav.Link className = 'a' href = '/Login'>Login</Nav.Link>
			</Nav.Item>
			<Nav.Item className ='b'>
			<Nav.Link className = 'a' href = '/Recruiters'>Recruiters</Nav.Link>
			</Nav.Item>
			<Nav.Item className ='b'>
			<Nav.Link className = 'a' href = '/WhyCET'>W</Nav.Link>
			</Nav.Item>
			<Nav.Item className ='b'>
			<Nav.Link className = 'a' href = '/Placements'>Placements1</Nav.Link>
			</Nav.Item>
			<Nav.Item className ='b'>
			<Dropdown className = 'dropdown'>
			<Button className ='dbut' >WhyCET</Button>
			<div className = 'down'>
  			<Dropdown.Item className='ab' href ='/Selection'>Selection</Dropdown.Item>
  			<Dropdown.Item className='ab' href = '/Alumini'>Alumini</Dropdown.Item>
  			<Dropdown.Item className='ab'>Something else</Dropdown.Item>
  			</div>
  			</Dropdown>
   			</Nav.Item>
  		
			</nav>
			
			</div>
			<img src ={clogo}/>
			</div>

			
			);
		
    }
}

export default NavBar


// <ul className ='nav-ul'>
			
// 			<li className ="linking" style ={{ float : 'right'}}>
// 			<Link to = "/About"> About </Link>
// 			</li>
// 			<li className ="linking" style ={{ float : 'right'}}>
// 			<Link to = "/Login" >Login </Link>
// 			</li>
// 			<li className="linking" style ={{ float : 'right'}}>
// 			<Link to ="/tve" >CET </Link>
// 			</li>
// 			<li className ="linking" style ={{ float : 'right'}}>
// 			<Link to="/Home" > Home </Link>
// 			</li>
// 			<li className ="linking" style ={{ float : 'right'}}>
// 			<Link to="/Placements : slug " > Placements </Link>
// 			</li>
// 			</ul>
//<h1 style ={{color : 'black',left : 400, top : -10}}> CGPU</h1> 