import React from 'react';
import RepoFilter from './RepoFilter';
import RepoResults from './RepoResults';

const UserRepos = () => {
    return (
        <div className="row UserRepos">
            {/* Loading indicator will display below..else display user's repos card */}
            <div className="column small-1 small-centered"><span className="loading-indicator"></span></div>
            <div className="column small-5 small-centered card">
                <h3>ZachAttack83's repositiories</h3>
                <h4>Filter repos by primary language</h4>
                <RepoFilter />
                <RepoResults />
            </div>
        </div>);
}

export default UserRepos;