import React, { Component } from 'react';

class NavBar extends Component {
	render(){
		return( 
			<div className="navbar-fixed">
		    <nav className="orange z-depth-5  container">
			    <div className="nav-wrapper container">
			      <a href="#" className="brand-logo center">Logo</a>
			      <ul className="left hide-on-med-and-down">
			        <li><a href="#" className="waves-effect waves-light btn"><i className="material-icons left">home</i>Home</a></li>
			        <li><a href="#" className="waves-effect waves-light btn"><i className="material-icons left">info</i>About</a></li>
			      </ul>
			    </div>
		  	</nav>
	  	</div>
		)

	}
}	

export default NavBar;
