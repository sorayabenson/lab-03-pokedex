import React from 'react';
import './Search.css';
import Header from './Header.js';
import PokeList from './Pokemon/PokeList.js';
import Searchbar from './Searchbar.js';
import Sort from './Sort.js';
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

    handleInputChange = (e) => {
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
                    <Searchbar handleChange={this.handleInputChange} />
                    
                    <Sort
                    handleChange={this.handleChange}
                    pokeOptions={[
                        {name: 'name', value: 'pokemon'},
                        {name: 'type', value: 'type_1'},
                        {name: 'hp', value: 'hp'},
                        {name: 'attack', value: 'attack'},
                        {name: 'defense', value: 'defense'}]}/>

                    <Sort
                    handleChange={this.handleOrderChange}
                    pokeOptions={[
                        {name: 'ascending', value: 'ascending'},
                        {name: 'descending', value: 'descending'}
                        ]}/>
                </div>

                <div className="pokeDisplay">
                    <PokeList filteredPokes={filteredPokes} />
                </div>

            </main>
        </div>
        );
    }
}
