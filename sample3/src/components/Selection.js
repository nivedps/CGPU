import React ,{ Component } from 'react' ;
import {Link} from 'react-router-dom'
import logo from './logo.png';
import clogo from './clogo.png';
import {Navbar, Nav, NavItem, NavDropdown, Glyphicon, Grid, Row, Col} from 'react-bootstrap'
import {FaHome} from 'react-icons/fa'


class Selection extends Component
{
	render()
	{
		return (
			<div className = 'about'>
			<div className = 'about-heading'>
			<h5>Selection Procedure for CET</h5>
			</div>
			<p>To be a student in the best engineering instituite in the state, one has to secure an excellent rank in the Kerala Engineering Architecture Medical (KEAM)entrance(Engineering) examination conducted by the state government. Year after year the competition is getting stiffer and the ranks of the elite few securing an admission to the college are getting lower. The students are given a preference of their branch depending upon their performance in the KEAM.</p>
			<p><br/><br/><br/>The general trend has been that more students prefer the circuit engineering branches such as computer science or electronics and communication to the traditional engineering subjects such as mechanical engineering but in CET all branches are equally vied by the students, thanks to the excellent facilities, the faculty and the mind blowing placement records.</p>
			</div>

			)
	}
}

export default Selection