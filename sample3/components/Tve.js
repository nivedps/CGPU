import React , { Component } from 'react'
import Reactdom from 'react-dom'

class Tve extends Component
{
	constructor(props)
	{
		super(props)
		this.state = {username :'Love YOU'}
	}

	handleusername = event =>{
        this.setState(
        	{username : event.target.value})
	}

	chand()
	{
		alert("Machane")
	}
	render()
	{
		return (
			<form>
            <div>
			<h1 style ={{color :"blue"}}> New Component </h1>
			<button onClick = {this.chand}>Click</button>
			</div>
			<div>
			<label>username</label>
			<input type="text" 
			value = {this.state.username} 
			onChange = {this.handleusername}
			/>
			</div>
			</form>
			)
	}
}	

export default Tve