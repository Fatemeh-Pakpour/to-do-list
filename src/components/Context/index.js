import React, { Component } from "react";
import * as moment from "moment";

// this is going to setup the provide and consumer
const todoListContext = React.createContext();

export class Provider extends Component {
  state = {
    tasks: [
      {
        title: "ali",
        date: moment(new Date()).format("YYYY-MM-DD"),
        id: new Date()
      }
    ]
  };

  handleAddNewTask = (title, date) => {
    const taskItem = {
      title: title,
      date: moment(date).format("YYYY-MM-DD"),
      // id: Math.random().toString(36).substr(2, 9)
      id: new Date()
    };

    this.setState({ tasks: [...this.state.tasks, taskItem] }, () => {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    });
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [
      {
        title: "Example Task",
        date: moment(new Date()).format("YYYY-MM-DD"),
        id: new Date()
      }
    ];
    this.setState({
      tasks: tasks
    });
  }
  handleRemoveTask = id => {
    this.setState(
      prevState => ({
        tasks: prevState.tasks.filter(task => task.id !== id)
      }),
      () => {
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      }
    );
  };
  handleEditTask = (id, newTaskTitle) => {
    const index = this.state.tasks.findIndex(task => task.id === id);
    const newArray = [...this.state.tasks];
    newArray.splice(index, 1, { ...newArray[index], title: newTaskTitle });
    this.setState(
      {
        tasks: newArray
      },
      () => {
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      }
    );
  };

  render() {
    return (
      <todoListContext.Provider
        value={{
          tasks: this.state.tasks,
          actions: {
            removeTask: this.handleRemoveTask,
            addNewTask: this.handleAddNewTask,
            editTask: this.handleEditTask
          }
        }}
      >
        {this.props.children}
      </todoListContext.Provider>
    );
  }
}

export const Consumer = todoListContext.Consumer;
