import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Scottamoosh'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.name}
          </p>
          <button onClick={() => {
            this.setState({ name: 'Yahoo' });
            console.log('Button Clicked');
          }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
