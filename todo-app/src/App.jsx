import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = (text) => {
    if (text.trim() === "") return;
    setTasks([...tasks, { text, completed: false }]);
  };

  // Delete a task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Toggle completed
  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  // Edit a task
  const editTask = (index, newText) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newText } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <Header addTask={addTask} />
      <ToDoList 
        tasks={tasks} 
        deleteTask={deleteTask} 
        toggleTask={toggleTask} 
        editTask={editTask} 
      />
    </div>
  );
}

export default App;
