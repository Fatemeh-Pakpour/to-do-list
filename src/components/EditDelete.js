import React from "react";
import PropTypes from "prop-types";
import { Consumer } from "./Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const EditDelete = ({ id, toggleForm }) => {
  return (
    <Consumer>
      {context => (
        <span>
          <button
            className="remove-task style-icon"
            onClick={() => {
              context.actions.removeTask(id);
            }}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
          <button
            className="edit-task style-icon"
            onClick={() => {
              toggleForm();
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </span>
      )}
    </Consumer>
  );
};

EditDelete.propTypes = {
  id: PropTypes.instanceOf(Date),
  toggleForm: PropTypes.func
};
export default EditDelete;
