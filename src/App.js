import React, { Component } from 'react';
import './App.css';

import FeedbackForm from './components/FeedbackForm';

class App extends Component {
  render() {
    return (
      <div className="App application centerRowFlex">
        {/* {[1,2,3,4,5,6,7,8,9,10].map(() => {
          return(
            <div style={{'width': '10px', 'height': '10px', 'backgroundColor': 'white'}}> </div>
            )
        })} */}
        <FeedbackForm></FeedbackForm>
      </div>
    );
  }
}

export default App;
