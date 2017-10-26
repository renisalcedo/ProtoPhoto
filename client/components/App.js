import React, { Component } from 'react';
import NavBar from './NavBar';
import Input from './Input';
import Footer from './Footer';
import Generate from './Generate.js';

class App extends Component {
  render() {
    return (

    <div className="container" style={{backgroundColor: "#e8ff6a"}}>
	    	<NavBar />

		  	<h1 className='blue-text text-darken-2 center' Text style={{fontFamily: 'lucida grande', fontWeight: 'bold'}}>ProtoPhoto</h1>
		  	<br />
	        <Input/>

          <Generate />
    		<Footer />
    </div>
    )
  }
};

export default App;
