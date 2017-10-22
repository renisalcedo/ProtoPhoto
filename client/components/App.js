import React, { Component } from 'react';
import NavBar from './NavBar';
import Input from './Input';
import Footer from './Footer';
import Generate from './Generate';

class App extends Component {
  render() {
    return (

     <div> 
    <div className="container" style={{backgroundColor: "#e8ff6a"}}>
    	<div className="col s4">
	    	<NavBar />

		  	<h1 className='blue-text text-darken-2 center' Text style={{fontFamily: 'lucida grande', fontWeight: 'bold'}}>ProtoPhoto</h1>
	        <Input />
	    </div>

      <Generate />
    </div>
    <Footer />
    </div>
    )
  }
};

export default App;
