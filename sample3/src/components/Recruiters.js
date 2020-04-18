import React,{ Component } from 'react';
import {Link} from 'react-router-dom'
import title from './title.jpg'
import {Button,ButtonGroup,ButtonToolbar,} from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'

class Recruiters extends Component
{
 constructor()
 {
 	super();
 	this.state = { value :'',isHash : 1,
        comp :[ {alp:'a',name:'ABB'},
{ alp:'a',name:'ACC'},
{ alp:'a',name:'ACCENTURE'},
{ alp:'a',name:'ACCENTURE'},
{ alp:'a',name:'ANALG DEVICES'},
{ alp:'a',name:'ANGLO EASTERN'},
{ alp:'a',name:'APPLIED MATERIALS'},
{ alp:'a',name:'AREVA'},
{ alp:'a',name:'ASHOK LEYLAND'},
{ alp:'a',name:'AMAZON'},
{ alp:'b',name:'BPCL'},
{ alp:'b',name:'BEL'},
{ alp:'c',name:'COGNIZANT'},
{ alp:'c',name:'CISCO'},
{ alp:'c',name:'CATERPILLAR'},
{ alp:'c',name:'CELSTREAM'},
{ alp:'c',name:'CHAPO ( DUBAI )'},
{ alp:'c',name:'COSMIC CIRCUIT'},
{ alp:'d',name:'DELOITTE'},
{ alp:'d',name:'DELPHI'},
{ alp:'e',name:'EARNEST & YOUNG'},
{ alp:'e',name:'ELGI'},
{ alp:'e',name:'EXETER'},
{ alp:'f',name:'FIDELITY'},
{ alp:'g',name:'GOOGLE'},
{ alp:'g',name:'GREAVES COTTON'},
{ alp:'h',name:'HP'},
{ alp:'i',name:'IBM'},
{ alp:'i',name:'IBS'},
{ alp:'i',name:'INFORMATICA'},
{ alp:'i',name:'INFOSYS'},
{ alp:'i',name:'INTERGRAPH'},
{ alp:'i',name:'IOC'},
{ alp:'i',name:'ITC'},
{ alp:'i',name:'IVRCL'},
{ alp:'k',name:'KALKI'},
{ alp:'l',name:'L&T ENGINEERING'},
{ alp:'l',name:'L&T ECC'},
{ alp:'l',name:'L&T VALDEL'},
{ alp:'m',name:'MAHINDRA & MAHINDRA'},
{ alp:'m',name:'MICROSOFT'},
{ alp:'m',name:'MIL CONTROLS'},
{ alp:'m',name:'MINDTECK'},
{ alp:'m',name:'MINDTREE'},
{ alp:'m',name:'MOTOROLA'},
{ alp:'m',name:'MURUGAPPA'},
{ alp:'m',name:'MUSIGMA'},
{ alp:'n',name:'NEST'},
{ alp:'n',name:'NOKIA-SIEMENS'},
{ alp:'o',name:'ON MOBILE'},
{ alp:'p',name:'PATNI'},
{ alp:'p',name:'PEC'},
{ alp:'s',name:'SAINT GOBAIN'},
{ alp:'s',name:'SAMSUNG'},
{ alp:'s',name:'SATYAM'},
{ alp:'s',name:'SHAPPOORJI'},
{ alp:'s',name:'SIMPLEX'},
{ alp:'t',name:'TATA ELXSI'},
{ alp:'t',name:'TATA-TELE'},
{ alp:'t',name:'TCS'},
{ alp:'t',name:'TEBMA'},
{ alp:'t',name:'TELCON'},
{ alp:'t',name:'THOUGHTWORKS'},
{ alp:'t',name:'TOSHIBA'},
{ alp:'t',name:'TOTAL ENVIRONMENT'},
{ alp:'t',name:'TRIUNE'},
{ alp:'u',name:'US TECH'},
{ alp:'v',name:'VEDANTA'},
{ alp:'v',name:'VERIZON'},
{ alp:'w',name:'WIPRO'},]
}
}

sort = (ret) =>
{
    this.setState({value: ret,isHash : 0})
    
}

sorti = (ret) =>
{
  this.sort('#')
  this.setState({isHash:1})
}




	render()
	{
       return(
			<div className ='rec'>
      <div className = 'about-heading'>
      <h5>Our Recruiters</h5>
      </div>
			<ButtonToolbar >
    <ButtonGroup className='rec-button' >
    <Button onClick = {() => this.sorti('#')} className='rb'>#</Button>                  <Button onClick = {() => this.sort('a')} className='rb' >A</Button><Button onClick = {() => this.sort('b')}  className='rb'>B</Button><Button onClick = {() => this.sort('c')} className='rb'>C</Button>
    <Button onClick = {() => this.sort('d')} className='rb'>D</Button><Button onClick = {() => this.sort('e')} className='rb'>E</Button>
    <Button onClick = {() => this.sort('f')} className='rb'>F</Button><Button onClick = {() => this.sort('g')} className='rb'>G</Button><Button onClick = {() => this.sort('h')} className='rb'>H</Button><Button onClick = {() => this.sort('i')} className='rb'>I</Button>
    <Button onClick = {() => this.sort('j')} className='rb'>J</Button><Button onClick = {() => this.sort('k')} className='rb'>K</Button><Button onClick = {() => this.sort('l')} className='rb'>L</Button><Button onClick = {() => this.sort('m')} className='rb'>M</Button>
    <Button onClick = {() => this.sort('n')} className='rb'>N</Button><Button onClick = {() => this.sort('o')} className='rb'>O</Button><Button onClick = {() => this.sort('p')} className='rb'>P</Button><Button onClick = {() => this.sort('q')} className='rb'>Q</Button>
    <Button onClick = {() => this.sort('r')} className='rb'>R</Button><Button onClick = {() => this.sort('s')} className='rb'>S</Button><Button onClick = {() => this.sort('t')} className='rb'>T</Button><Button onClick = {() => this.sort('u')} className='rb'>U</Button>
    <Button onClick = {() => this.sort('v')} className='rb'>V</Button><Button onClick = {() => this.sort('w')} className='rb'>W</Button><Button onClick = {() => this.sort('x')} className='rb'>X</Button><Button onClick = {() => this.sort('y')} className='rb'>Y</Button>
    <Button onClick = {() => this.sort('z')} className='rb'>Z</Button>
  </ButtonGroup>
  </ButtonToolbar>

{
this.state.comp.filter((item)=> item.alp===this.state.value).map(fp => (<div><p className="ralert">
{fp.name}
</p></div>))
}

{
  this.state.comp.filter((item)=> this.state.isHash===1).map(f => (<div><p variant="danger" className="ralert" >
  {f.name}
  </p></div>))
}
</div>
	
			)
	}
}

export default Recruiters