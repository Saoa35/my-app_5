import React from 'react';
import List1 from '../List1/List1';

import './App.css';

export default class App extends React.Component {

  state = {
    items: [],
    flag: true
  }

  constructor(props) {
    super(props);

    for(let i = 0; i < 10; i++) {
      
    }
  }
  
  render() {

    return (
      <div className="App">
        <List1/>
      </div>
    );
  }
}
