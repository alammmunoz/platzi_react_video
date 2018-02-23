import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home';

import data from '../api.json';

const homeContainer = document.getElementById('home-container')

//ReactDOM.render(que voy a renderizar, donde lo hare)
//const holaMundo = <h1> hola mundito! </h1>;

ReactDOM.render(<Home data={data} />, homeContainer)