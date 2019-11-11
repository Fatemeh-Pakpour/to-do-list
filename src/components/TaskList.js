import React from "react";
import PropTypes from "prop-types";
import { Consumer } from "./Context";
import Task from "./Task";

const TaskList = props => {
  return (
    <Consumer>
      {context => (
        <React.Fragment>
          {context.tasks.map(task => (
            <Task
              taskTitle={task.title}
              date={task.date}
              id={task.id}
              key={task.id}
              removeTask={props.removeTask}
              editTask={props.editTask}
            />
          ))}
        </React.Fragment>
      )}
    </Consumer>
  );
};

TaskList.propTypes = {
  removeTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired
};

export default TaskList;
