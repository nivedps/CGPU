import React ,{ Component } from 'react' ;
import {Link} from 'react-router-dom'
import {FaHandshake,FaNetworkWired} from 'react-icons/fa'
import {FaThermometerHalf} from 'react-icons/fa'
import {IoIosPeople} from 'react-icons/io'
import {InputGroup,FormControl,Alert} from 'react-bootstrap'
import {Button, FormGroup,} from "react-bootstrap";
import firebase from '../firebase'



class Login extends Component
{

  constructor()
  {
    super();
    this.state = {
      item :[],
      isLogin : false,
      error : "",
      username :"",
      password: "",
    }
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
       alert('Username is required');

    }

    if (!this.state.password) {
      alert('Password is required');
    }

    if(this.state.username && this.state.password){
      this.login()
    }

    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }


  

  checker =() =>
  {
     // fetch('http://127.0.0.1:8000/api/login/')

      // .then(response =>response.json())
      // .then(json => {
      //   this.setState = ({
      //     isLoaded : 1,
      //     items : json.items,
      //   },console.log(this.state.isLoaded)); 
      // })
    // this.setState({isLoaded : 1});
    // this.setState({isLoaded:1},()=> console.log(this.state.isLoaded))
    console.log(this.state.items);
      console.log(this.state.isLoaded);
  }
 login()
  {
    const loginRef = firebase.database().ref('login').child(this.state.username)
    loginRef.on('value', snapshot => {
    const data = snapshot.val()
    this.setState ({isLoaded :1,item : data}) 
    console.log(data)
     
    

  })
  //   this.setState({isLoaded:1})
    // const response = await fetch('http://127.0.0.1:8000/api/login/nivedps/sucker');
    // const data = await response.json();
    // this.setState({items:data})
    // console.log(data); 


      //  .then(json => 
      //   console.log(json))
      // // .then(
      //   (result) => {this.setState ({
      //     isLoaded :true,
      //     userfields : result.items
      //   })}
      //     )
      this.checker()
      // console.log(this.state.items);
      // console.log(this.state.isLoaded);

  }
	render()
	{
		return(
			<div>
			<div className = 'about-heading'>
			<h5>Login</h5>
      </div>
        <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <label>User Name</label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

          <label>Password</label>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

          <input type="submit" value="Log In" data-test="submit" />
        </form>
      </div>
			
  <ul>
  
  <li>{this.state.isLoaded}</li>
  <li>{this.state.item.password}</li>
  </ul>
 

  </div>
			)
	}


}

export default Login
 // <ul>
  // {items.map(item => (
  //   <li>{item.username}</li>))}
  // </ul>
   // this.setState =({items : snapshot.val(),
   //      isLoaded : 1});
   //  console.log(snapshot.val() + "happy");

   // {this.state.items.map(item => (<li>{item.password}</li>))}