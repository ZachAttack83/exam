import React, { Component } from 'react';
import axios from 'axios';
import { func } from 'prop-types'

class Search extends Component{

    state = {
        searchTerm : "",
        errState : false
    }
    
    handleChange = (event) => {
        this.setState( { searchTerm: event.target.value } );
    }

    getUserRepos = (event) => {
        event.preventDefault();
        this.props.setLoadingState(true);
        setTimeout( () => {
        axios.get(`https://api.github.com/users/${this.state.searchTerm}/repos`)
            .then((res) => {
                this.setState({ errState : false })
                this.props.setRepos(res.data);
            })
            .catch((err) => {
                console.log(err);
                this.setState({ errState : true })
            }) 
                this.props.setLoadingState(false);
        }
        , 20);


    }
    
    render () {
        return (
            <div className="row Search">
                <div className="column small-5 small-centered card">
                    <h3>Search repositories by username</h3>
                    <form onSubmit={this.getUserRepos}>
                        { /* Error message handling */
                            this.state.errState ? 
                            <div data-notification="" className="notification-box alert">
                                Unknown username!
                                <a href="" className="close">&#xD7;</a>
                            </div> 
                        : null }
                        <input type="text" 
                            placeholder="username" 
                            value={this.state.searchTerm} 
                            onChange={this.handleChange}/>
                         
                        { (this.state.searchTerm === "") ? 
                            <button className="expand" disabled>Search</button> : 
                            <button className="expand">Search</button> } 
                    </form>
                </div>
            </div>);
    }
}

Search.propTypes = {
    setLoadingState : func.isRequired,
    setRepos : func.isRequired
};

export default Search;