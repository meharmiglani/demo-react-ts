import React, { Component } from 'react';
import Person from './Person';
import { Context } from './Context';
import './App.css';

interface StudentListItemProps {
  val: Person;
}

class PersonItem extends Component<StudentListItemProps> {
  render() {
    return (
      <Context.Consumer>
        {(value) => (
          <div className='student-item'>
            <div>
              <strong>Name: </strong>
              {this.props.val.name}
            </div>
            <div>
              <strong>Email: </strong>
              {this.props.val.email}
            </div>
            <div>
              <strong>Age: </strong>
              {this.props.val.age}
            </div>
            <button onClick={() => value!.delete(this.props.val.id)}>
              Delete Item
            </button>
          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default PersonItem;
