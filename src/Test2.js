import React, { useState } from 'react';
import axios from '../node_modules/axios';
import Chuck from './chuck.png';

export default class Test2 extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            liczba: 2,
            cytat: ""
        };
    }

    klik = () => {
        this.setState({ liczba: this.state.liczba += 1 });
        this.fetchData();
        console.log(this.state.liczba);
        console.log(this.state.cytat);
    }

    fetchData = async () => {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        this.setState({
            cytat: response.data.value
        });
    }
    render() {
        return (
            <div id="container">
                <img id="ourOldChuck" src={Chuck} />
                <div id="nauka2btn" onClick={this.klik}>Daj cytat</div>
                <h1 id="cytat">{this.state.cytat}</h1>
            </div>
        )
    }
}


