// src/mocks/handlers.js
import { rest } from "msw";
import { nanoid } from "nanoid";

let tasks = [
  {
    id: nanoid(),
    isCompleted: true,
    title: "First item",
  },
  {
    id: nanoid(),
    isCompleted: false,
    title: "Second item",
  },
  {
    id: nanoid(),
    isCompleted: false,
    title: "Third item",
  },
];

export const handlers = [
  //! GET
  rest.get("/todos", (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({ items: tasks })
    );
  }),
  //! POST
  rest.post("/todos", (req, res, ctx) => {
    const todo = { id: nanoid(), isCompleted: false, title: req.body.title };
    tasks.push(todo);

    return res(
      // Respond with a 201 status code
      ctx.status(201),
      ctx.json({ items: todo })
    );
  }),
  //! PUT
  rest.put("/todos/:id", (req, res, ctx) => {
    const id = req.params.id;
    const todo = tasks.find((todo) => todo.id === id);
    todo.title = req.body.title;
    todo.isCompleted = req.body.isCompleted;

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({ items: todo })
    );
  }),
  //! DELETE
  //delete rest method
  rest.delete("/todos/:id", (req, res, ctx) => {
    const id = req.params.id;
    const index = tasks.findIndex((task) => task.id === id);
    if (index > -1) {
      tasks.splice(index, 1);
    }

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({ items: tasks })
    );
  }),
];
