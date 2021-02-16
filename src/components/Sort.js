import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div>
                <select 
                className="pokeSelect"
                value={this.props.currentValue}
                onChange={this.props.handleChange}>
                    
                    {
                        this.props.pokeOptions.map(pokeOptions =>
                            <option value={pokeOptions.value}>{pokeOptions.name}</option>)
                    }
                    
                </select>
                {/* <select 
                className="pokeSelect"
                onChange={this.props.handleChange}>
                    <option value="pokemon">name</option>
                    <option value="type_1">type</option>
                    <option value="hp">hp</option>
                    <option value="attack">attack</option>
                    <option value="defense">defense</option>
                </select> */}
                {/* <select 
                className="pokeSelect"
                onChange={this.props.handleOrderChange}>
                    <option value="ascending">ascending</option>
                    <option value="descending">descending</option>
                </select> */}

            </div>
        )
    }
}

