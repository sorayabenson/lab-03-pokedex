import React, { Component } from 'react';
import './Pokemon.css';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {

        const PokeWrapper = this.props.filteredPokes.map(
            pokemon => <PokeItem
                key={pokemon._id}
                pokemonProp={pokemon} />
        )

        return (
            <ul className="pokeWrapper">
                {PokeWrapper}
            </ul>
        );
    }
}
