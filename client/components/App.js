import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className='blue-text text-darken-2'>Uploading image</h1>
        <input type="file" method="post" />
      </div>

    )
  }
};

export default App;
