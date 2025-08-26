import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, deleteTask, toggleTask, editTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <ToDoItem
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
