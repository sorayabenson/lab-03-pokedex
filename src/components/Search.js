import React from 'react';
import './Search.css';
import Header from './Header.js';
import PokeList from './Pokemon/PokeList.js';
import { pokemons } from '../data.js';

export default class Search extends React.Component {
    state = {
        pokemons: pokemons,
        query: '',
        sortBy: 'pokemon',
        sortOrder: 'ascending',
        
    }

    handleChange = (e) => {
        this.setState({
           sortBy: e.target.value, 
        });
    }

    handleInputchange = (e) => {
        this.setState({
            query: e.target.value,
        });
    }

    handleOrderChange = (e) => {
        this.setState({
           sortOrder: e.target.value, 
        });
    }

    render() {

        const sortedPokes = typeof this.state.pokemons[0][this.state.sortBy];

        if (this.state.sortOrder === 'ascending') {
            if (sortedPokes === 'string') this.state.pokemons.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]));
            if (sortedPokes === 'number') this.state.pokemons.sort((a, b) => a[this.state.sortBy] - (b[this.state.sortBy]));
        } else {
            if (sortedPokes === 'string') this.state.pokemons.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy]));
            if (sortedPokes === 'number') this.state.pokemons.sort((a, b) => b[this.state.sortBy] - (a[this.state.sortBy]));
        }

        const filteredPokes = this.state.pokemons.filter(pokemon => pokemon.pokemon.includes(this.state.query))

        return (
        <div className="search">
            <Header />

            <main className="searchMain">

                <div className="sidebar">
                    <input 
                    type="text"
                    className="searchInput" 
                    onChange={this.handleInputchange}></input>
                    {/* <button className="searchButton" onClick={this.handleInputchange}>find that pokemon!</button> */}
                    <h2>search</h2>
                    
                    <select 
                    className="pokeSelect"
                    onChange={this.handleChange}>
                        <option value="pokemon">name</option>
                        <option value="type_1">type</option>
                        <option value="hp">hp</option>
                        <option value="attack">attack</option>
                        <option value="defense">defense</option>
                    </select>

                    <select 
                    className="pokeSelect"
                    onChange={this.handleOrderChange}>
                        <option value="ascending">ascending</option>
                        <option value="descending">descending</option>
                    </select>
                </div>

                <div className="pokeDisplay">
                    <PokeList filteredPokes={filteredPokes} />
                </div>

            </main>
        </div>
        );
    }
}
