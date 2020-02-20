import React, { Component } from 'react';
import scriptLoader from 'react-async-script-loader';
import './App.css';

import Main from './views/Home/main';

class App extends Component { 

  componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
      if (isScriptLoadSucceed) {
        // alert(isScriptLoadSucceed);
      }
      else this.props.onError()
    }
  }

  componentDidMount () {

    
    const { isScriptLoaded, isScriptLoadSucceed } = this.props
    if (isScriptLoaded && isScriptLoadSucceed) {
      alert('did mount');
    }
  }

  render() {


    return(
      <div className="App">           
          <Main/>        
      </div>    
    )
  }
}

export default scriptLoader(
  '/assets/js/jquery/jquery.min.js',
  '/assets/js/bootstrap/js/bootstrap.bundle.min.js',
  '/assets/js/jquery-easing/jquery.easing.min.js',
)(App);
