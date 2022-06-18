import React, { useContext } from "react";
import { TodoContext } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import Container from "@material-ui/core/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./assets/style/app.scss";

function App() {
  const { theme } = useContext(TodoContext);
  return (
    <>
      <Navbar />
      <div className={`app ${theme === false ? "light" : "night"}`}>
        <Container maxWidth="md">
          <h2 className={`title ${theme === false ? "black" : "white"}`}>
            ToDo List
          </h2>
          <TodoForm />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default App;
