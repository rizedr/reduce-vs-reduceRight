import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const performance = window.performance;

    const t4 = performance.now();
    const array = this.getTestCase();
    const t5 = performance.now();
    console.log('getTestCase: ' + (t5 - t4) + ' milliseconds.');

    const t2 = performance.now();
    const result1 = this.testReduceRight(array);
    const t3 = performance.now();
    console.log('testReduceRight: ' + (t3 - t2) + ' milliseconds. ' + result1);

    const t0 = performance.now();
    const result2 = this.testReduce(array);
    const t1 = performance.now();
    console.log('testReduce: ' + (t1 - t0) + ' milliseconds. ' + result2);

  }

  // define testcase
  getTestCase = () => {
    const result = [];

    for (let i = 0; i < 1e6; i++) {
      result.push(i);
    }

    return result;
  };

  testReduce = (array) => array.reduce((acc, value) => acc + value);

  testReduceRight = (array) => array.reduceRight((acc, value) => acc + value);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
