import React, { Component } from 'react'

export default class Searchbar extends Component {
    render() {
        return (
            <div className="searchbar">
                <input 
                type="text"
                className="searchInput"
                onChange={this.props.handleChange} 
                >
                </input>
                
                <button onClick={this.props.handleClick}>search!</button>
            </div>
        )
    }
}
