import React from 'react';
import List from './List';

function Board (props){
  return(
    <>
      <h1>To Do List</h1>
      {props.todolist.map((item) => <List item={item} />)}
    </>
  )
}

export default Board;