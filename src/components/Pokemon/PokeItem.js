import React, { Component } from 'react';
import './Pokemon.css';
import egg from '../assets/egg.png';
import { Link } from 'react-router-dom';

export default class PokeItem extends Component {
    render() {
        return (
            <Link 
            to={this.props.pokemonProp.pokemon}
            className="pokemonli">
                <img alt={this.props.pokemonProp.pokemon} src={this.props.pokemonProp.url_image} />
                <h3 className="name">{this.props.pokemonProp.pokemon}</h3>
                {/* <div className="statsWrapper">
                    <h6 className="health">hp: {this.props.pokemonProp.hp}</h6>
                    <h6 className="attack">attack: {this.props.pokemonProp.attack}</h6>
                    <h6 className="defense">defense: {this.props.pokemonProp.defense}</h6>
                </div> */}
                <p className="type">type: {this.props.pokemonProp.type_1}</p>
                <p className="ability">ability: {this.props.pokemonProp.ability_1}</p>

                <div className="eggWrapper">
                    <img alt="broken egg" src={egg} />
                    <h6 className="egg">{this.props.pokemonProp.egg_group_1}</h6>
                </div>
            </Link>
        )
    }
}
