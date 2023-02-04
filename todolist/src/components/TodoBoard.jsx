import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard (props) {

  return (
    <>
      <h1>To Do List</h1>
      {props.todolist.map((item) => <TodoItem item={item} />)}
    </>
  )
}

export default TodoBoard