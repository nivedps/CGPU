import React ,{ Component } from 'react' ;
import {Link} from 'react-router-dom'
import logo from './logo.png';
import clogo from './clogo.png';
import {Navbar, Nav, NavItem, NavDropdown, Glyphicon, Grid, Row, Col} from 'react-bootstrap'
import {FaHome} from 'react-icons/fa'


class WhyCET extends Component
{
	handel()
	{
		alert ("reroute to CET")
	}
	render()
	{
		return(
			<div className = "about" >
			<div className = "about-heading">
			<h5 onClick = {this.handel}>About CET</h5>
			</div>
			<p>The College of Engineering, Trivandrum, since its inception in 1939 has been synonymous with engineering excellence. Year after year CET equips and enriches young men and women with quality engineering education in order to meet the challenges of our ever growing world though innovation and sheer technical brilliance. Our record breaking placements offers from the ivy league of companies in India and abroad are a standing testimony to this fact, not to mention the creme'de la creme of the state opting to study in this prestigious institution.<br/><br/></p>
			<p1><br/><br/><br/>As Aldus Huxley once said, "Being in the company of giants makes you a giant, not a dwarf."</p1>
			<p2><br/><b>That's the feeling that echoes in the heart of every CET - ian.</b></p2>
			</div>
			)
	}

}

export default WhyCET