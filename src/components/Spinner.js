import React, { Component } from 'react';
import './Spinner.css';

export default class Spinner extends Component {
    render() {
        return (
            <div className="spinner">
                <img src="https://i.pinimg.com/originals/66/89/dc/6689dc331be27e66349ce9a4d15ddff3.gif" alt="running pikachu" />
            </div>
        )
    }
}
