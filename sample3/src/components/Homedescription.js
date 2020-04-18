import React ,{ Component } from 'react' ;
import {Link} from 'react-router-dom'
class Homedescription extends Component
{
	render()
	{
		return(
			<div className = 'Homedescription'>
			<h3><b> Welcome to CGPU</b></h3>
			<div className = "home-quote">
			<p>"Ability is what you are capable of doing.
			Motivation decides what you do.Attitude determies how well
			you do it" -<b>Stephen King</b> </p>
			</div>
			<p className = "home-about"><br/>We at CET believe in combining the three facets that together spell success. Ability, Motivation and Attitude.
To carve their own unique niche in today's ever growing technical world, engineers require exemplary technical prowess combined with effective inter personal skills.
Today's dynamic corporate scenarios seek recruits who have both these skills in equal measure.  Increasingly recognized by recruiters for its abundant talent pool and excellent facilities, CET's placement process aims to match the requirements of recruiters and the aspirations of students.
The Career Guidance and Placement Unit (CGPU) was started in this college as a voluntary organization in January 1984. The Placement Officer who is assisted by student representatives from all the departments heads this unit. The Principal of the institution and all other faculty members have extended their wholehearted support to the functioning of the unit.
</p>

			</div>
			)
	}
}

export default Homedescription