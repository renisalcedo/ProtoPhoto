import React, { Component } from 'react';
import axios from 'axios';

class Generate extends Component {
  render() {
    return (
      <ul>
        {this.textRender()}
      </ul>
    )
  }

  textRender() {
    const fullText = axios.get('http://localhost:3000/fullText')
      .then((res) => {
        const data = res.data.fullTextAnnotation.pages[0].blocks[0].paragraphs[0].words[0].symbols;
        console.log(data);

      return data.map((item, index) => {
        return (
          <li key={index}>{item.text}</li>
        )
      })
    })
  }
};

export default Generate;
