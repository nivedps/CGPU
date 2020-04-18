import React,{ Component } from 'react';
//import Navbar from './Navbar';
import {Link} from 'react-router-dom'
import title from './title.jpg'


class About extends Component
{
	render()
	{
		return(
			<div className = 'about'>
			<div className = 'about-heading'>
			<h5> About CGPU </h5>
			</div>
			<p>The Career Guidance and Placement Unit (CGPU) was started in this college as a voluntary organization in January 1984. The Placement Officer who is assisted by student representatives from all the departments heads this unit. The Principal of the institution and all other faculty members have extended their wholehearted support to the functioning of the unit.
The unit is spread over an area of over 3500 sq.ft. It can accommodate 500 students at a time for written test. It has an amphitheatre for Pre-Placement Talk. The unit is equipped with a PA system, OHP, TV, VCR and an LCD projector. Other facilities include air-conditioned rooms for group discussions and interviews.
			</p>
			<h6>Objectives of the Unit</h6>
			<ul>
			<li>To place final year students in respectable organizations through campus recruitment.</li>
			<br/>
			<li>To provide industrial training to students during their course of study. </li>
			<br/>
			<li>To organize lectures, seminars, group discussions, mock interviews etc. for career guidance, entrepreneurship and personality development</li>
			<br/>
			<li>To provide information and assistance to students regarding. </li>
			<br/>
			<li>Job opportunities in India and abroad</li>
			<br/>
			<li>Opportunities for self-employment.</li>
			<br/>
			<li>Opportunities for higher studies in India and abroad.</li>
			<br/>
			<li>Competitive examinations like GRE, GMAT, TOEFL, GATE, CAT etc.</li>
			<br/>
			</ul>



			</div>

			)
	}


}

export default About