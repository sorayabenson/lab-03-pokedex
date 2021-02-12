import React from 'react';
import './Search.css';
import Header from './Header.js';
import PokeList from './Pokemon/PokeList.js';
import { pokemons } from '../data.js';

export default class Search extends React.Component {
    state = {
        pokemons: pokemons,
        loading: false,
        query: '',
        sortBy: 'pokemon',
        // sortOrder: 'ascending',
        
    }

    // loadPokemons = () => {
    //     this.setState({
    //         loading: true,
    //         pokemons: [],
    //     })
    // }

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

    render() {

        // const filteredPokes = pokemons.filter((pokemon) => {
        //     if (!this.state.pokemon) return true;

        //     return false;
        // })

        this.state.pokemons.sort(
            (a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy])
        );

        const filteredPokes = this.state.pokemons.filter(pokemon => pokemon.pokemon.includes(this.state.query))

        return (
        <div className="search">
            <Header />

            <main className="searchMain">

                <div className="sidebar">
                    <input className="search" onChange={this.handleInputchange}></input>
                    {/* <button className="searchButton" onClick={this.handleInputchange}>find that pokemon!</button> */}
                    <select 
                    className="pokeSelect"
                    onChange={this.handleChange}>
                        <option value="pokemon">name</option>
                        <option value="type_1">type</option>
                        <option value="hp">hp</option>
                        <option value="attack">attack</option>
                        <option value="defense">defense</option>
                    </select>
                    {/* <select className="pokeSelect">
                        <option>ascending</option>
                        <option>descending</option>
                    </select> */}
                </div>

                <div className="pokeDisplay">
                    <PokeList filteredPokes={filteredPokes} />
                </div>

            </main>
        </div>
        );
    }
}
