import React, { Component } from 'react'

export default class Searchbar extends Component {
    render() {
        return (
            <div>
                <input 
                type="text"
                className="searchInput" 
                onChange={this.props.handleChange}>
                </input>
                
                <h2>search</h2>
            </div>
        )
    }
}
