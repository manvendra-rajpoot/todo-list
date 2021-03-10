import React,{ FC } from 'react';
import './App.css';

const App: FC = () => {
  return (
    <div className="app">
      <div className="header">
        <div className="header__inputs">
          <input type="text" placeholder="Task..." />
          <input type="number" placeholder="Deadline (in days)..." />
        </div>
        <button>Add Task</button>
      </div>
      <div className="list">
      </div>
    </div>
  );
  
}

export default App;
