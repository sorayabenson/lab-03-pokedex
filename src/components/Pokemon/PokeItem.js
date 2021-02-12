import React, { Component } from 'react';
import './Pokemon.css';

export default class PokeItem extends Component {
    render() {
        return (
            <li className="pokemonli">
                <img alt={this.props.pokemonProp.pokemon} src={this.props.pokemonProp.url_image} />
                <h3 className="name">{this.props.pokemonProp.pokemon}</h3>
                <h6 className="health">hp: {this.props.pokemonProp.hp}</h6>
                <div className="statsWrapper">
                    <h6 className="attack">attack: {this.props.pokemonProp.attack}</h6>
                    <h6 className="defense">defense: {this.props.pokemonProp.defense}</h6>
                </div>
                <p className="type">type: {this.props.pokemonProp.type_1}</p>
                <p className="ability">ability: {this.props.pokemonProp.ability_1}</p>
            </li>
        )
    }
}
