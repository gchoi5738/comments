import React from 'react';
import CommentList from './components/CommentList/CommentList';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Comments</h1>
      <CommentList />
    </div>
  );
};

export default App;