import React from 'react';
import { object } from 'prop-types'; 

const RepoDetails = ({ selectedRepo }) => {
    return (
        <div className="row RepoDetails">
            <div className="column small-5 small-centered card">
                <h3>Youtube Binge details</h3>
                <table className="table">
                <caption className="show-for-sr">Youtube Binge details</caption>
                    <thead>
                        <tr>
                            <th width="200">Stars</th>
                            <th width="100" className="text-right">Forks</th>
                            <th width="300">Primary Language</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{selectedRepo.watchers}</td>
                            <td>{selectedRepo.forks}</td>
                            <td>{selectedRepo.language}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>);
}

RepoDetails.propTypes = {
    selectedRepo : object.isRequired
}

export default RepoDetails;