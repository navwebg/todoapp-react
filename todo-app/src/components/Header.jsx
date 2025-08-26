import { useState } from "react";

function Header({ addTask }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addTask(input);
    setInput("");
  };

  return (
    <header className="header">
      <h1>My To-Do List</h1>
      <div className="input-section">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Enter a task"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </header>
  );
}

export default Header;
