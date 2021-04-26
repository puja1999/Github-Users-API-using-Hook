import React from 'react';
import './App.css';
import GithubUsers from './components/GithubUsers';

function App() {
  return (
    <div className="App">
      <GithubUsers/>
    </div>
  );
}

export default App;


// we use Async Await to make promise easy and simplest 
// when we call fetch api, it will return promise and 
// to handle promise we have .then .catch
// promise results in pending state, either Resolved or Reject
