import React, { Component } from 'react';
import RepoFilter from './RepoFilter';
import RepoResults from './RepoResults';
import { bool, array, func } from 'prop-types'

class UserRepos extends Component {
    state = {
        filter : "All", 
        selectedRepo: null
    }

    changeFilter = (filter) => {
        this.setState({ filter });
    }

    filterItems = (item) => { 
        if (this.state.filter === "All"){
            return true;
        } else {
            return item.language === this.state.filter
        }
    }



    render() {
        return (
                <div className="row UserRepos">
                    {/* Loading indicator will display below..else display user's repos card */}
                    { this.props.loadingState ? 
                        <div className="column small-1 small-centered"><span className="loading-indicator"></span></div>
                        :
                        (this.props.repos.length > 0) ?
                        <div className="column small-5 small-centered card">
                            <h3>ZachAttack83's repositiories</h3>
                            <h4>Filter repos by primary language</h4>
                            <RepoFilter filter={this.state.filter} changeFilter={this.changeFilter} repos={this.props.repos}/>
                            <RepoResults repos={this.props.repos.filter(this.filterItems)} selectRepo={this.props.selectRepo}/>
                        </div>
                        :
                        null
                    }
                </div>);
    }
}

UserRepos.propTypes = {
    loadingState : bool.isRequired,
    repos : array.isRequired,
    selectRepo: func.isRequired
}

export default UserRepos;