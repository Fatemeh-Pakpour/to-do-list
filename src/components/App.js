import React from "react";
import Header from "./Header";
import NewTask from "./NewTask";
import Container from "react-bootstrap/Container";
import TaskList from "./TaskList";

const App = () => {
  return (
    <Container className="todo-ist">
      <Header />
      <Container className="tasks-container">
        <TaskList />
      </Container>
      <NewTask />
    </Container>
  );
};
export default App;
