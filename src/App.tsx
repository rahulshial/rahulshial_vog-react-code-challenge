import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home/Home';
import Universities from './pages/Universities/Universities';
import PostalLookup from './pages/PostalLookup/PostalLookup';

function App() {
  return (
    <div>
      <header className="App-header">
        <Home/>
        <Universities />
        <PostalLookup />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.</p>
      </header>
    </div>
  );
}

export default App;
