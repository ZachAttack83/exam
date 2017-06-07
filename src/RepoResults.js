import React from 'react';

const RepoResults = () => {
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
                        <tr>
                            <td>HTML5-SecurityVideo</td>
                        </tr>
                        <tr>
                            <td>Thinking in React</td>
                        </tr>
                        <tr>
                            <td>Youtube Binge</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>);
}

export default RepoResults;