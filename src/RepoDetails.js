import React from 'react';

const RepoDetails = () => {
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
                            <td>3,000</td>
                            <td>5</td>
                            <td>Javascript</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>);
}

export default RepoDetails;