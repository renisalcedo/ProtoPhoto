import React, { Component } from 'react';
import NavBar from './NavBar';

import Generate from './Generate';

class App extends Component {
  render() {
    return (

    <div className="container" style={{backgroundColor: "#e8ff6a"}}>
    	<NavBar />
	  	<h1 className='blue-text text-darken-2 center'>ProtoPhoto</h1>

		<div className="row">
			<div class="col s12 m6 l3">
				<input type='file' />
			</div>
	    </div>

      <Generate />
    </div>
    )
  }
};

export default App;
