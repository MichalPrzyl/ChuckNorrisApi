import React, { useEffect, useState } from 'react';

import axios from '../node_modules/axios';

export default function Test1() {

    const [state, setState] = useState({
        cytat: ''
    })

    // const state = useState({
    //     cytat: '223f3'
    // })

    const klikacz = () => {
        fetchData();
    }

    useEffect(async () => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const result = await axios.get('https://api.chucknorris.io/jokes/random');
        const quote = result.data.value;
        setState({
            ...state,
            cytat: quote
        });
        console.log(quote);

    }

    return (<div>
        <button onClick={klikacz}>Klikaj</button>
        <h1>{state.cytat}</h1>
    </div>
    );
}

