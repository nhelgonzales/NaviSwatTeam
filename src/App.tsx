import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <h1>Welcome Nelson!</h1>
      <hr />
      <h1> {count} </h1>
      <hr />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>Add</button>
        <button onClick={() => setCount((count) => count - 1)}>Subtract</button>
      </div>
    </div>
  );
}

export default App;
