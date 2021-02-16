import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div>
                <select 
                className="pokeSelect"
                onChange={this.props.handleChange}>
                    
                    {
                        this.props.pokeOptions.map(pokeOptions =>
                            <option value={pokeOptions.value}>{pokeOptions.name}</option>)
                    }
                    
                </select>

            </div>
        )
    }
}

