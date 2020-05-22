import React from 'react';
import logo from './logo.svg';
import './App.css';

//Import the buttons lib from ract-boostrap (needed an installation)
import Button from 'react-bootstrap/Button'

//primary gives a blue color to the button
function App() {
  return (
    <div className="App">
      <h2>Hello world !</h2>
      <Button variant="primary"> Button test Bootstrap </Button>
    </div>
  );
}

export default App;
