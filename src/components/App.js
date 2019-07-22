import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import '../App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
          <Exercises/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
