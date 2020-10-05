import React from 'react';
import '../../App.css';

import { getData, writeData } from '../utils/util';

class App extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
      count : 0,
      date: new Date(),
      loading: true

    };
  }

  async componentDidMount() {
    let currentCount = await getData()
    this.setState({
      count: currentCount,
      date: new Date(),
      loading: false
    });
  }

  render() {
    if (this.state.loading) {
      return(
        <div className="App">
          <header className="App-header">
          <label className="hero-text">Loading...</label>
          </header>
        </div>
      )
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <label className="hero-text">{this.state.count}</label>
            <button id="counter" className="button" onClick={() => writeData(this.setState.bind(this))}>Increase</button>
          </header>
        </div>
      );
    }
  }
}

export default App;
