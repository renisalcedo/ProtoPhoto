import React, { Component } from 'react';

class Footer extends Component {
	render(){
		return(
        <footer className="page-footer orange z-depth-5">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">ProtoPhoto</h5>
                <p className="grey-text text-lighten-4">Generates a webpage with an upload of a picture</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Home</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">About</a></li>

                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright white-text">
            <div className="container">
            © 2017 Copyright ProtoPhoto
            <a className="white-text right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    )
  }
};

export default Footer;
