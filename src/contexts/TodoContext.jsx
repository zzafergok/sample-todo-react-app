import React, { useState, useEffect, createContext } from "react";
import { nanoid } from "nanoid";
import axios from "axios";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [theme, setTheme] = useState(false);
  const [editTitle, setEditTitle] = useState({
    id: "",
    title: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const handleEdit = () => {
    if (edit === true) {
      return setTitle(editTitle.title);
    } else {
      return setTitle("");
    }
  };

  async function getData() {
    await axios
      .get("/todos")
      .then((res) => {
        setTodos(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function addTodo(title) {
    await axios
      .post("/todos", {
        id: nanoid(),
        isCompleted: false,
        title,
      })
      .then((res) => {
        setTodos([res.data.items, ...todos]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function removeTodo(id) {
    await axios
      .delete(`/todos/${id}`)
      .then((res) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function toggleTodo(id) {
    await axios
      .put(`/todos/${id}`)
      .then((res) => {
        setTodos(
          todos?.map((todo) => {
            if (todo.id === id) {
              todo.isCompleted = !todo.isCompleted;
            }
            return todo;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function updateTodo(id, title) {
    await axios
      .put(`/todos/${id}`)
      .then((res) => {
        setTodos(
          todos?.map((todo) => {
            if (todo.id === id) {
              todo.title = title;
            }
            return todo;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
        updateTodo,
        edit,
        setEdit,
        editTitle,
        setEditTitle,
        title,
        setTitle,
        handleEdit,
        theme,
        setTheme,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
