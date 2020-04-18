import React,{ Component } from 'react';
import {Link} from 'react-router-dom'
import title from './title.jpg'


class Alumini extends Component
{
	render()
	{
		return(
			<div className = 'about' >
			<div className = 'about-heading'>
			<h5>Alumini</h5>
			</div>
			<p>CET alumni are distinguished  forerunners in every possible technological field across the world. The CET Alumni association, the CEETA is very much active in the college bringing together the CET-ians of yesteryears and the present cream</p>
			<h6>CEETA</h6>
			<ul>
			<li>15 chapters all over the world</li>
			<li>Annual GB Meeting</li>
			<li>CETAA Day celebration on 2nd  Saturday of November every year</li>
			<li>Awards day </li>
			<li>More than 50 awards for students</li>
			<li>Financial Assistance to students 10 students supported</li>
			<li>Undertakes infrastructure development activities</li>
			</ul>
			</div>
			)
	}


}

export default Alumini