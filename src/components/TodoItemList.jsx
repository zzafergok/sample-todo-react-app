import React, {useContext} from 'react'
import {TodoContext} from '../contexts/TodoContext'
import TodoItem from './TodoItem'
import '../assets/style/todo_item_list.scss'

function TodoItemList() {
  const {todos} = useContext(TodoContext);
  return todos.length > 0 ? (
    <div className="item-list">
      {todos.map((todo, index, arr) => {
        return <TodoItem key={index} todo={todo} arr={arr} />;
      })}
    </div>
  ) : (
    <div className="item-list">
      <div className="item-list-empty">
        <span>No Tasks</span>
      </div>
    </div>
  );
  
}

export default TodoItemList
