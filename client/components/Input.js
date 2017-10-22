import React, { Component } from 'react';

class Input extends Component {
	render(){
		return(
      <div className="row">
        <div className="container">
          <h5 style={{fontFamily: 'lucida grande'}}>Please upload an image.</h5>
          <br />
        </div>
          <br />
          <div className="col l3">
      			<form action="#">
              <div className="file-field input-field">
                <div className="btn">
                  <span>Upload File</span>
                  <br />  
                  <input type="file" />
                </div>
                <br />
                  <div className="file-wrapper">
                  <br />
                    <input className="file-path validate" type="text" />
                  </div>
              </div>
            </form>
          </div>
      </div>
		)
	}
};

export default Input;