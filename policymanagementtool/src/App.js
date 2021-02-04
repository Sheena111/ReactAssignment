import React, { Component } from 'react';
import Headersection from './UI_Components/headersection/headersection'
import Footersection from './UI_Components/Footersection/Footersection'


class App extends Component {
  render() {
    return (
      <div>
        <Headersection/>
        <Footersection/>
      </div>
    );
  }
}

export default App;
