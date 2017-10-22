import React, { Component } from 'react';
import NavBar from './NavBar';
import Input from './Input';

class App extends Component {
  render() {
    return (
    	
    <div className="container" style={{backgroundColor: "#e8ff6a"}}>
    	<div className="col s4">
	    	<NavBar />

		  	<h1 className='blue-text text-darken-2 center' Text style={{fontFamily: 'lucida grande', fontWeight: 'bold'}}>ProtoPhoto</h1>
	        <Input />
	    </div>
    </div>
    )
  }
};

export default App;
