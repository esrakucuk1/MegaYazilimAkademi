import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { name: taskInput.trim(), completed: false }]);
      setTaskInput('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  const deleteAllTasks = () => {
    setTasks([]); // Tüm görevleri sil
  };
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div id="app">
      <h1>To-Do List</h1>
      <input
        className="custom-input"
        type="text"
        placeholder="Yapılacak..."
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value.toUpperCase())}
      />
      <button onClick={addTask}>Ekle</button>
      
      <ul>
        
        {tasks.map((task, index) => (
          <li key={index } className={task.completed ? 'completed' : ''}>
            <span
              onClick={() => toggleComplete(index)}
              style={{ textDecoration: task.completed ? 'line-through' :'none' }}
            >
              {task.name}
            </span>
            <button onClick={() => deleteTask(index)}>Sil</button>
          </li>
        ))}
      </ul>
      <button onClick={deleteAllTasks}>Tümünü Sil</button> {/* Tümünü Sil butonu */}
    </div>
  );
}

export default App;