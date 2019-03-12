import React, { Component } from 'react';
import './App.css';

import FeedbackForm from './components/FeedbackForm';

class App extends Component {
  render() {
    return (
      <div className="App appFlex centerFlex">
        <FeedbackForm></FeedbackForm>
      </div>
    );
  }
}

export default App;
