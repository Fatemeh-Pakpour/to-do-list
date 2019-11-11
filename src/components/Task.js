import React, { PureComponent } from "react";
import { Consumer } from "./Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import EditDelete from "./EditDelete";
import PropTypes from "prop-types";
import moment from "moment";

class Task extends PureComponent {
  static propTypes = {
    taskTitle: PropTypes.string.isRequired,
    id: PropTypes.instanceOf(Date),
    date: PropTypes.instanceOf(moment).isRequired,
    removeTask: PropTypes.func
  };

  state = { isEditing: false };

  saveTask = event => {
    event.preventDefault();
    const { id, editTask } = this.props;
    const newTaskTitle = event.target.taskTitle.value;
    editTask(id, newTaskTitle);
    this.setState({
      isEditing: false,
      isChecked: false
    });
  };

  toggleForm = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  handleChecked =() =>{
    this.setState({ isChecked: !this.state.isChecked });
  }

  getStyle = () =>{
    return{
      textDecoration:this.state.isChecked?'line-through' : 'none'
    }    
  };
 
  render() {
    const { taskTitle, id, date } = this.props;
    return (
      <div className="task">
        <Consumer>
          {context => {
            const saveTask = event => {
              event.preventDefault();
              const newTaskTitle = event.target.taskTitle.value;
              context.actions.editTask(id, newTaskTitle);
              this.setState({
                isEditing: false
              });
            };
            return (
              <span className="task-title">
                {!this.state.isEditing ? (
                  <div className="task-parent">
                    <input type="checkbox" className="styled" onChange={ this.handleChecked}/>
                    <label className="label-task" style={this.getStyle()}>{taskTitle}</label>
                    <label className="label-date">{date}</label>
                  </div>
                ) : (
                  <form className="edit-form" onSubmit={saveTask}>
                    <input
                      name="taskTitle"
                      type="text"
                      defaultValue={taskTitle}
                    />
                    <button>
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </button>
                  </form>
                )}
                <EditDelete
                  id={id}
                  isEditing={this.state.isEditing}
                  toggleForm={this.toggleForm}
                />
              </span>
            );
          }}
        </Consumer>
      </div>
    );
  }
}

export default Task;
