import React, { Component } from 'react';

class Input extends Component {
	render(){
		return(
      <div className="container">
  			<form action="#">
          <div className="file-field input-field">
            <div className="btn">
              <span>Upload File</span>
              <input type="file" />
            </div>
              <div className="file-path-wrapper col s1">
              <input className="file-path validate" />
            </div>
          </div>
        </form>
      </div>
		)
	}
};

export default Input;