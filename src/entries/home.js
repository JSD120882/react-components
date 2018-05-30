import React from 'react'; //renderizar componentes
import {render} from 'react-dom'; //poner los componentes en el DOM
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../api.json';
import HomeComponent from '../pages/containers/home';
import LibraryComponent from '../pages/containers/library';

const homeContainer = document.getElementById('home-container');

render(<LibraryComponent data={data}/>, homeContainer);
