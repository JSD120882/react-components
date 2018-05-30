import React, { Component } from 'react';
import './search.css';


class SearchComponent extends Component {
	state={
		value:'Atomos'
	}
	handleSubmit = event =>{
		event.preventDefault();
		console.log(this.input.value, 'submit')
	}
	setInputRef = element =>{
		this.input = element;
	}
	handleChange = event =>{
		this.setState({
				value: this.input.value.replace(' ', '-')
		})
	}
	render() {

    return (
			
		<form onSubmit={this.handleSubmit}>
			<div className="input-group mb-3">
				<div class="form-group mb-0">
					<select class="form-control rounded-0" id="sel1">
					  <option>Elemento</option>
						<option>Atomos</option>
						<option>Moleculas</option>
						<option>Organismos</option>
						<option>Layouts</option>
					</select>
				</div>
				<input 
					ref={this.setInputRef} 
					type="text" 
					className="form-control" 
					name="search"
					placeholder="search" 
					onChange={this.handleChange}
					value={this.state.value}
				/>
				<div className="input-group-prepend">
					<button className="btn btn-outline-primary" type="button">Button</button>
				</div>
			</div>
		</form>	


				
			
    );
  }
}



export default SearchComponent;