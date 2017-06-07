import React from 'react';

const Search = () => {

    return (
        <div className="row Search">
            <div className="column small-5 small-centered card">
                <h3>Search repositories by username</h3>
                <form>
                    <div data-notification="" className="notification-box alert">
                        Unknown username!
                        <a href="" className="close">&#xD7;</a>
                    </div>
                    <input type="text" placeholder="username"/>
                    <button className="expand">Search</button>
                </form>
            </div>
        </div>);
}

export default Search;