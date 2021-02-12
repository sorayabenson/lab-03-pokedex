import React from 'react';
import './Search.css';
import Header from './Header.js';
import PokeList from './Pokemon/PokeList.js';
import { pokemons } from '../data.js';

export default class Search extends React.Component {
    state = {
        name:'',
        // type:'',
        // attack:'',
        // defense:'',
    }

    render() {

        const filteredPokes = pokemons.filter((pokemon) => {
            if (!this.state.name) return true;

            return false;
        })

        return (
        <div className="search">
            <Header />

            <main className="searchMain">

                <div className="sidebar">
                    <input className="search"></input>
                    <button className="searchButton">find that pokemon!</button>
                    <select className="pokeSelect">
                        <option>name</option>
                        <option>type</option>
                        <option>attack</option>
                        <option>defense</option>
                    </select>
                    <select className="pokeSelect">
                        <option>ascending</option>
                        <option>descending</option>
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
