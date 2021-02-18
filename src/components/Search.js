import React from 'react';
import request from 'superagent';
import './Search.css';
import Header from './Header.js';
import PokeList from './Pokemon/PokeList.js';
import Searchbar from './Searchbar.js';
import Spinner from './Spinner.js';
import Sort from './Sort.js';
import arrow from './assets/arrowButton.png';

export default class Search extends React.Component {
    state = {
        pokemons: [],
        query: '',
        sortOrder: 'asc',
        sortBy: 'pokemon',
        loading: false,
        currentPage: 1,
        perPage: 20,
        totalPokemon: 0,
        
    }

    handleInputChange = async (e) => {
        this.setState({
            query: e.target.value,
        });
    }

    handleChange = async (e) => {
        await this.setState({
           sortBy: e.target.value, 
        });
    }

    handleOrderChange = async (e) => {
        await this.setState({
           sortOrder: e.target.value, 
        });
    }

    handleClick = async () => {
        await this.setState({currentPage: 1})
        await this.fetchPokemon();
    }

    handleDropdown = async (e) => {
        await this.setState({
            perPage: e.target.value,
        })
    }

    previousPage = async () => {
        this.setState({currentPage: this.state.currentPage - 1});
    }

    nextPage = async () => {
        this.setState({currentPage: this.state.currentPage + 1});
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    componentDidUpdate = async (prevProps, prevState) => {
        const oldPageNumber = prevState.currentPage;
        const newPageNumber = this.state.currentPage;

        if(oldPageNumber !== newPageNumber) {
            await this.fetchPokemon();
        }
    }

    fetchPokemon = async () => {
        this.setState({ loading: true });

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?${this.state.sortBy}=${this.state.query}&sort=${this.state.sortBy}&direction=${this.state.sortOrder}&page=${this.state.currentPage}&perPage=${this.state.perPage}`);

        this.setState({
            pokemons: data.body.results,
            loading: false,
            totalPokemon: data.body.count,
        });
    }

    render() {
        
        const filteredPokes = this.state.pokemons.filter(pokemon => pokemon.pokemon.includes(this.state.query))

        const lastPage = Math.ceil(this.state.totalPokemon / this.state.perPage);

        return (
        <div className="search">
            <Header />

            <main className="searchMain">

                <div className="sidebar">
                    <Searchbar 
                    handleChange={this.handleInputChange}
                    />
                    
                    <Sort
                    handleChange={this.handleChange}
                    pokeOptions={[
                        {name: 'name', value: 'pokemon'},
                        {name: 'type', value: 'type_1'},
                        {name: 'ability', value: 'ability_1'},
                        {name: 'shape', value: 'shape'},
                        {name: 'egg', value: 'egg_group_1'}
                    ]}/>

                    <Sort
                    handleChange={this.handleOrderChange}
                    pokeOptions={[
                        {name: 'ascending', value: 'asc'},
                        {name: 'descending', value: 'desc'}
                        ]}/>

                    <Sort
                    handleChange={this.handleDropdown}
                    pokeOptions={[
                        {name: `show 10 per page`, value: 10},
                        {name: `show 20 per page`, value: 20},
                        {name: `show 50 per page`, value: 50},
                        {name: `show 100 per page`, value: 100}
                    ]}/>

                    <button onClick={this.handleClick}>go!</button>

                </div>

                <div className="pokeDisplay">
                    {
                    this.state.loading
                    ? <Spinner />
                    : <PokeList filteredPokes={filteredPokes} />
                    }
                </div>

                <div className="buttonWrapper">
                    <button 
                    className="previous" 
                    onClick={this.previousPage}
                    disabled={this.state.currentPage === 1}>
                        <img alt="arrow button" src={arrow}/>
                    </button>

                    <h6>page {this.state.currentPage}</h6>

                    <button 
                    className="next" 
                    onClick={this.nextPage}
                    disabled={this.state.currentPage === lastPage}>
                        <img alt="arrow button" src={arrow}/>
                    </button>
                </div>

            </main>
        </div>
        );
    }
}
