import React, { Component } from 'react'
import request from 'superagent';
import './Detail.css';
import PokeItem from './Pokemon/PokeItem.js';
import PokeDetail from './Pokemon/PokeDetail.js';
import Header from './Header.js';
import Spinner from './Spinner.js';

export default class Detail extends Component {

    state = {
        pokemon: {},
        loading: false,
    }

    componentDidMount = async () => {
        this.setState({ loading: true });

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemon}`);

        this.setState({
            pokemon: data.body.results.find(item => item.pokemon === this.props.match.params.pokemon),
            loading: false,
        });
    }

    render() {
        let pokemon = this.state.pokemon;

        return (
            <div>
                <Header />
                <main>

                    {
                    this.state.loading
                    ? <Spinner />
                    : <PokeDetail pokemonProp={pokemon}/>
                    }
                
                </main>
                
            </div>
        )
    }
}
