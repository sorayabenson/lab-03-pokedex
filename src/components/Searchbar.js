import React, { Component } from 'react'

export default class Searchbar extends Component {
    render() {
        return (
            <div className="searchbar">
                <input 
                type="text"
                placeholder="search"
                className="searchInput"
                onChange={this.props.handleChange} 
                >
                </input>

            </div>
        )
    }
}
