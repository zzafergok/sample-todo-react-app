import React, { useState, useContext, useEffect } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoItemList from "./TodoItemList";
import "../assets/style/todo_form.scss";

function TodoForm() {
  const {
    addTodo,
    edit,
    updateTodo,
    editTitle,
    setEdit,
    setEditTitle,
    title,
    setTitle,
    handleEdit,
  } = useContext(TodoContext);

  const [valid, setValid] = useState(false);

  useEffect(() => {
    handleEdit();
  }, [edit]);

  return (
    <div className="todo">
      <div className="todo-form">
        <input
          className="todo-form-input"
          type="text"
          placeholder="New Task"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (edit === false) {
                if (title.length > 0) {
                  addTodo(title);
                  setTitle("");
                  setEditTitle({ id: editTitle.id, title: "" });
                  setValid(false);
                } else {
                  setValid(true);
                }
              } else if (
                edit === true &&
                editTitle.title !== title &&
                title.length > 0
              ) {
                updateTodo(editTitle.id, title);
                setEdit(false);
                setEditTitle({ id: editTitle.id, title: "" });
                setTitle("");
                setValid(false);
              } else {
                setValid(true);
              }
            }
          }}
        />
        <button
          className="todo-form-button"
          onClick={(e) => {
            if (edit === false) {
              if (title.length > 0) {
                addTodo(title);
                setTitle("");
                setEditTitle({ id: editTitle.id, title: "" });
                setValid(false);
              } else {
                setValid(true);
              }
            } else if (
              edit === true &&
              editTitle.title !== title &&
              title.length > 0
            ) {
              updateTodo(editTitle.id, title);
              setEdit(false);
              setEditTitle({ id: editTitle.id, title: "" });
              setTitle("");
              setValid(false);
            } else {
              setValid(true);
            }
          }}
        >
          {edit === true ? "Update" : "Add"}
        </button>
        {valid && (
          <div className="todo-form-error">Please enter a correct title</div>
        )}
      </div>
      <TodoItemList />
    </div>
  );
}

export default TodoForm;
