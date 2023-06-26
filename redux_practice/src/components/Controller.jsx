import React, { Component } from 'react'

export default class Controller extends Component {
  render() {
    return (
      <ul>
        <li>
          <a href="create">create</a>
        </li>
        <li>
          <a href="update">update</a>
        </li>
        <li>
          <input type="button" value="Delete">
            Delete
          </input>
        </li>
      </ul>
    );
  }
}
