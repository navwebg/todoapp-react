import { useState } from "react";

function ToDoItem({ task, index, deleteTask, toggleTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing && newText.trim() !== "") {
      editTask(index, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <input 
          type="text" 
          value={newText} 
          onChange={(e) => setNewText(e.target.value)} 
        />
      ) : (
        <span 
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.text}
        </span>
      )}

      <div className="buttons">
        {/* Complete/Undo button */}
        <button onClick={() => toggleTask(index)}>
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        <button onClick={() => deleteTask(index)}>Delete</button>
      </div>
    </li>
  );
}

export default ToDoItem;
