import React from 'react';
import { array, func } from 'prop-types'

const RepoResults = ({ repos, selectRepo }) => {

    const handleClick = (event) => {
        selectRepo(repos[event.target.id]);
    }

    return (
        <div className="row RepoResults">
            <div className="column small-10 small-centered card">
                <table className="table">
                    <caption className="show-for-sr">Basic Table</caption>
                    <thead>
                        <tr>
                            <th className="text-left">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    { repos.map((repo, idx) => <tr key={repo.id} onClick={handleClick}><td id={idx}>{repo.name}</td></tr>) }
                    </tbody>
                </table>
            </div>
        </div>);
}

RepoResults.propTypes = {
    repos : array.isRequired,
    selectRepo : func.isRequired
};


export default RepoResults;