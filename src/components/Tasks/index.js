import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './Tasks.css';

export default function Tasks ({ handleDelete, handleEdit, tasks }) {
  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={task}>
          {task}
          <span>
            <FaEdit
              onClick={(e) => handleEdit(e, index)}
              className="edit"
            />
            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
