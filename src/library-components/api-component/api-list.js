import React, { Component } from 'react';
import ElementListComponent from './elements-list';
import './api-list.css';


class ApiElementsComponent extends Component {
	constructor(props){
			super(props)
			this.state = {
				users:[]
			}
	}
	
  	componentWillMount(){
			//https://api.mercadolibre.com/sites/MLA
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(users =>{
      
        users.results.forEach(user => {
          let data = {
            name:user.name.first,
            email:user.email,
            password:user.login.password
          }          
							console.log( data )
							this.setState({ users:this.state.users.concat([data]) }) 
						})
				})
	}
	render(){
    console.log( this.state.users.length )
    if( this.state.users.length > 0 ){
      return(
        <div>
          { this.state.users.map(user => <ElementListComponent key={user.password} name={user.name} email={user.email}/>) }
        </div>
      )
  
    }
    return(
      <p>Cargando usuarios...</p>
    )
  }
}



export default ApiElementsComponent;