import React from 'react';
import { func, string, array } from 'prop-types'


const RepoFilter = ({ filter, changeFilter, repos }) => {

  const handleChange = (event) => {
      changeFilter(event.target.value);
  }

  const findUnique = (repos) => {
    let map = new Map();
    let myelements = [];
    myelements.push(<option key="All" value="All">All</option>)
    repos.forEach((repo, idx) => {
        if (repo.language != null){
            if (!map.has(repo.language)) {
                map.set(repo.language, idx)
                myelements.push(<option key={repo.language} value={repo.language}>{repo.language}</option>);
            }}
        })
    return myelements;
  }

    return (
        <div>
            <div className="row UserRepos">
                <div className="column small-10 small-centered card">
                    <select value={filter} onChange={handleChange}>
                        {   
                            findUnique(repos)
                        }
                    </select>
                </div>
            </div>
        </div>);
}

RepoFilter.propTypes = {
    changeFilter: func.isRequired,
    filter: string.isRequired,
    repos: array.isRequired
}

export default RepoFilter;