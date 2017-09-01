import React, { Component } from 'react';
import RestaurantSearch from './Components/RestaurantSearch';

import './App.css';

class App extends Component {
  render() {
    return (
<div>

      <div className="App">
        <h2>What's for Dinner?</h2>
        </div>
       
      <RestaurantSearch />
        
</div>   
    )
  }
}

export default App;
