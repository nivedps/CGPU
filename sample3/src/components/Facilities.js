import React ,{ Component } from 'react' ;
import {Link} from 'react-router-dom'
import {FaHandshake,FaNetworkWired} from 'react-icons/fa'
import {FaThermometerHalf} from 'react-icons/fa'
import {IoIosPeople} from 'react-icons/io'

class Facilities extends Component
{
	state = {services :[
	{
		icon :<FaHandshake />,
		info: "The Main Office and Reception room are accommodated over 1400 sq feet area. All the CGPU activities are coordinated in the Main Office and it is the hub of all placement activities"
	},
	{
		icon :<FaThermometerHalf />,
		info : "The placement activities are undertaken in the seven air-conditioned interview rooms and GD sessions are held in the two separate rooms provided for the same."
	},
	{
		icon : <IoIosPeople />,
		info : "An amphitheatre which can accommodate around 200 people is provided. All placement presentations and pre-placement talks are conducted here. This presentation hall is also equipped with audio visual & desktop publishing facility."

	},
	{
		icon : <FaNetworkWired />,
        info : "Network connectivity is provided in all rooms in which the CGPU activities are coordinated."

	}]
}

	render()
	{
		return(
			<section className = "services">
			<h4 className = "service-head">Facilities</h4>
			<div className = "services-center">
			{ this.state.services.map((item,index)=> {
				return (
				<article key ={index} className="service">
				<span>{item.icon}</span>
				<p>{item.info}</p>
				</article>
				);
			})}

			</div>
			</section>

			)
		
		
	}

}

export default Facilities
