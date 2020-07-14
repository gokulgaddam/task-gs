import React from 'react';
import Main from '../src/components/MainComponent';
import'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Main />
        </div>
    </BrowserRouter>
    
  );
}

export default App;
