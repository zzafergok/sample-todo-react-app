import React, { useContext } from "react";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import ModeEditOutlineTwoToneIcon from "@mui/icons-material/ModeEditOutlineTwoTone";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { TodoContext } from "../contexts/TodoContext";
import "../assets/style/todo_item.scss";

const TodoItem = ({ todo, arr }) => {
  const { toggleTodo, removeTodo, setEdit, setEditTitle, edit, editTitle } =
    useContext(TodoContext);

  const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 500,
      fontSize: "13px",
    },
  });

  return (
    <div
      className={`item ${
        arr.slice(-1)[0].id === todo.id ? "item-border-radius" : "item-border"
      }`}
    >
      <div className="item-group">
        <input
          type="checkbox"
          className="item-check"
          onChange={() => {
            return toggleTodo(todo.id);
          }}
          checked={todo.isCompleted}
        />
        {todo.title.length > 100 ? (
          <CustomWidthTooltip title={todo.title}>
            <p
              className={`item-title ${
                todo.isCompleted === true ? "item-check" : "item-unCheck"
              }`}
              onClick={() => {
                return toggleTodo(todo.id);
              }}
            >
              {todo.title}
            </p>
          </CustomWidthTooltip>
        ) : (
          <p
            className={`item-title ${
              todo.isCompleted === true ? "item-check" : "item-unCheck"
            }`}
            onClick={() => {
              return toggleTodo(todo.id);
            }}
          >
            {todo.title}
          </p>
        )}
        <ModeEditOutlineTwoToneIcon
          className="edit-icon"
          onClick={() => {
            setEditTitle({
              id: todo.id,
              title: todo.title,
            });
            setEdit(!edit);
          }}
        />
        <DeleteForeverRoundedIcon
          className={`delete-icon ${
            edit === true && editTitle.id === todo.id ? "editTrue" : "editFalse"
          }`}
          onClick={() => {
            if (edit === true && editTitle.id === todo.id) {
              return null;
            } else {
              return removeTodo(todo.id);
            }
          }}
        />
      </div>
    </div>
  );
};

export default TodoItem;
