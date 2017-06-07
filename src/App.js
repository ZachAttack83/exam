import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import UserRepos from './UserRepos';
import RepoDetails from './RepoDetails';
import './App.css';

class App extends Component {

  state = {
    loading: false,
    repos: [],
    selectedRepo: null
  }

  setLoadingState = (loading) => {
    this.setState({ loading });
  }

  setRepos = (repos) => {
    this.setState({ repos });
  }

  selectRepo = (id) => {
    this.setState({ selectedRepo : id });
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* There will be a conditional here to check if a repo has 
        been clicked or not to display <RepoDetails />, or <Search /> <UserRepos /> 
        below */}
        { (!this.state.selectedRepo) ? 
          <div>
            <Search setLoadingState={this.setLoadingState} 
                    setRepos={this.setRepos} />
            <UserRepos loadingState={this.state.loading} 
                      repos={this.state.repos} selectRepo={this.selectRepo} />
          </div>
          : <RepoDetails selectedRepo={this.state.selectedRepo}/> }
      </div>
    );
  }
}



export default App;
