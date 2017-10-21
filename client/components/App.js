import React, { Component } from 'react';

class App extends Component {
  render() {
    return (

    <div style={{backgroundColor: "#e8ff6a"}}>
    	<div className="navbar-fixed">
		    <nav className="orange z-depth-5">
			    <div className="nav-wrapper container">
			      <a href="#" className="brand-logo center">Logo</a>
			      <ul className="left hide-on-med-and-down">
			        <li><a href="#" className="waves-effect waves-light pulse btn"><i className="material-icons left">home</i>Home</a></li>
			        <li><a href="#" className="waves-effect waves-light pulse btn"><i className="material-icons left">info</i>About</a></li>
			      </ul>
			    </div>
		  	</nav>
	  	</div>

	  	<h1 className='blue-text text-darken-2 center'>ProtoPhoto</h1>

		<div className="row">
			<div class="col s12 m6 l3">
				<input type='file' />
			</div>
	    </div>
    </div>
    )
  }
};

export default App;
