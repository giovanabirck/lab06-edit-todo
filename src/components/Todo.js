import deleteIcon from "../icons/delete.png";
import editIcon from "../icons/edit.svg";
import { useState } from "react";

export default function Todo(props) {
  const task = props.task;
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title || "");

  function handleDelete() {
    props.remove(task);
  }

  function handleStatusChange() {
    props.toggleTask(task);
  }

  function handleEditClick() {
    setEditing(true);
  }

  function handleEditInputChange(e) {
    setEditedTitle(e.target.value);
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    props.edit(task, editedTitle);
    setEditing(false);
  }

  return (
    <li className="task">
      <div className="task-details">
        <div className="left-side">
          <input
            type="checkbox"
            onChange={handleStatusChange}
            value={task.done}
          />
          {editing ? (
            <div>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => handleEditInputChange(e)}
              />
              <button onClick={handleEditSubmit}>Edit</button>
            </div>
          ) : (
            <p>{task.done === true ? <del>{task.title}</del> : task.title}</p>
          )}
          <span>{task.artist}</span>
        </div>

        <div className="right-side">
          {!editing && (
            <form>
              <img src={editIcon} alt="edit icon" onClick={handleEditClick} />
            </form>
          )}
          <img src={deleteIcon} alt="delete icon" onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
