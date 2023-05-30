import React, { Component } from 'react';

interface AppProps {
  message: string;
}

class App extends Component<AppProps> {
  render() {
    return (
      <div className="App">
        <h1>{this.props.message}</h1>
        <svg>
  <path d="M 20 20 C 20 110, 110 110, 110 20" stroke="black"  fill="transparent" />
</svg>
      </div>
    );
  }
}

export default App;