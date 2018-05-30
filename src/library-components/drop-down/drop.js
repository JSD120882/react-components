import React, { Component } from 'react';
import './drop.css';


class DropComponent extends Component {

	render() {

    return (
			

			<div class="dropdown">
				<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
				Elemento
				</button>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#">Atomos</a>
					<a class="dropdown-item" href="#">Moleculas</a>
					<a class="dropdown-item" href="#">Organismos</a>
					<a class="dropdown-item" href="#">Layout</a>
				</div>
			</div>


				
			
    );
  }
}



export default DropComponent;