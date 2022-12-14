import React from 'react';
import { faker } from '@faker-js/faker';
import { v4 } from 'uuid';
import List1 from '../List1/List1';
import List2 from '../List2/List2';
import './App.css';

export default class App extends React.Component {

  state = {
    items: [],
    flag: true
  }

  constructor(props) {
    super(props);

    for(let i = 0; i < 10; i++) {
      this.state.items.push({
        item: faker.internet.userName(),
        id: v4()
      })
    }
  }

  changeListType() {
    this.setState({
      flag: !this.state.flag
    })
  }

  addNewItemToStart() {
    const newItem = faker.internet.userName();

    this.setState({
      items: [
        {
          item:newItem,
          id: v4()
        },
        ...this.state.items,
      ]
    })
  }

  addNewItem() {
    const newItem = faker.internet.userName();

    this.setState({
      items: [
        ...this.state.items,
        {
          item:newItem,
          id: v4()
        },
      ]
    })
  }
  
  render() {

    return (
      <div className="App">
        
        <button onClick={this.changeListType.bind(this)}>Change List Type</button>

        <button onClick={this.addNewItem.bind(this)}>Add to the end</button>
        <button onClick={this.addNewItemToStart.bind(this)}>Add to the end</button>

        {this.state.flag ? <List1 items={this.state.items}/> : <List2 items={this.state.items}/>}

      </div>
    );
  }
}
