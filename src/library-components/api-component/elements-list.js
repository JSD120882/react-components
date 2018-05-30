import React, { Component } from 'react';
import './api-list.css';


function ElementListComponent(props){

	

    return (
			

			<div>
				<ul>
					<li>{props.name}--------{props.email}</li>
				</ul>
			</div>


				
			
    );
  
}



export default ElementListComponent;