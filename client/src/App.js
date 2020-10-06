import React from 'react';
import './App.css';
function App() {
  return (
 
    <div className="App">
      <h1>CRUD APPLICATION</h1>
      <div className="form">
        <label>Movie Name</label>
        <input type="text" name="movieName"></input>
        <label>review</label>
        <input type="text" name="review"></input>

      <button type="submit" className="submit" >Submit</button>
      </div>
    </div>
  );
}

export default App;
