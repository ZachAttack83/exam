import React from 'react';

const RepoFilter = () => {
    return (
        <div className="row UserRepos">
            <div className="column small-10 small-centered card">
                <select>
                    <option>All</option>
                    <option>JavaScript</option>
                    <option>HTML</option>
                    <option>Ruby</option>
                </select>
            </div>
        </div>);
}

export default RepoFilter;