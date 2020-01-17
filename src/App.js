import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [repos, setRepos] = useState('');
  const [search_input, setInput] = useState('');
  const [error, setError] = useState(null);

  return (
    <div className="App">
     <h1>Hello world</h1>
    </div>
  );
}

export default App;
