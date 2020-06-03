import React from 'react';
import './App.css';
import Navbar01 from './Navbar01';
import Editor from './Editor';

;
function App() {
  return (
    <div className="App">
      <div className="Main" id="home">
        <Navbar01 />
        <Editor />
      </div>
    </div>
  );
}

export default App;
