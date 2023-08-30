import React from 'react';
import Login from './components/Login'; // Import the Login component
import './App.css'; // Import the App.css file

function App() {
  return (
    <div className="App">
      <div className="modal-background">
        <div className="modal-content">
          <main>
            <img src="/adler_logo.png" alt="App Logo" className="app-logo" />
            <h2 className="left-aligned-header">Sign in to Adler</h2>
            <Login />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
