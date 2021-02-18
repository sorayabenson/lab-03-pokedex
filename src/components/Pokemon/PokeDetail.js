import React, { Component } from 'react';
import './Pokemon.css';
import egg from '../assets/egg.png';

export default class PokeDetail extends Component {
    render() {
        return (
            <div 
            className="pokemonDetail">
                
                <div className="detailImageWrapper">
                    <img className="detailImg" alt={this.props.pokemonProp.pokemon} src={this.props.pokemonProp.url_image} />
                </div>

                <div className="detailStatsWrapper">
                    <h3 className="name">{this.props.pokemonProp.pokemon}</h3>
                    <div className="statsWrapperDetail">
                        <h6 className="health">hp: {this.props.pokemonProp.hp}</h6>
                        <h6 className="attack">attack: {this.props.pokemonProp.attack}</h6>
                        <h6 className="defense">defense: {this.props.pokemonProp.defense}</h6>
                    </div>
                    <p className="type">type: {this.props.pokemonProp.type_1}, {this.props.pokemonProp.type_2}</p>
                    <p className="ability">ability: {this.props.pokemonProp.ability_1}</p>
                    <p>hidden ability: {this.props.pokemonProp.ability_hidden}</p>

                    <div className="eggWrapperDetail">
                        <img alt="broken egg" src={egg} />
                        <h6 className="egg">{this.props.pokemonProp.egg_group_1}</h6>
                    </div>
                </div>

            </div>
        )
    }
}
