import React from 'react';
import request from 'superagent';
import './Search.css';
import Header from './Header.js';
import PokeList from './Pokemon/PokeList.js';
import Searchbar from './Searchbar.js';
import Spinner from './Spinner.js';

export default class Search extends React.Component {
    state = {
        pokemons: [],
        query: '',
        loading: false,
        
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        console.log('search, bebe!', this.state.query)

        this.setState({ loading: true });

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=pokemon&direction=asc`);

        this.setState({
            pokemons: data.body.results,
            loading: false,
        });
    }
    
    handleInputChange = async (e) => {
        this.setState({
            query: e.target.value,
        });
    }

    handleClick = async () => {
        await this.fetchPokemon();
    }

    render() {

        // const filteredPokes = this.state.pokemons.filter(pokemon => pokemon.pokemon.includes(this.state.query))

        return (
        <div className="search">
            <Header />

            <main className="searchMain">

                <div className="sidebar">
                    <Searchbar 
                    handleChange={this.handleInputChange}
                    handleClick={this.handleClick} />

                </div>

                <div className="pokeDisplay">
                    {
                    this.state.loading
                    ? <Spinner />
                    : <PokeList filteredPokes={this.state.pokemons} />
                    }
                </div>

            </main>
        </div>
        );
    }
}
