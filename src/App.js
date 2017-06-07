import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import UserRepos from './UserRepos';
import RepoDetails from './RepoDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* There will be a conditional here to check if a repo has 
        been clicked or not to display <RepoDetails />, or <Search /> <UserRepos /> 
        below */}
        <Search />
        <UserRepos />
        <RepoDetails />
      </div>
    );
  }
}



export default App;
