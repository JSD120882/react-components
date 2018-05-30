import React, { Component } from 'react';
import CardComponent from  '../library-components/component-card/component-card';	
import SearchComponent from  '../library-components/search/search';	
import DropComponent from  '../library-components/drop-down/drop';	
	

function Category(props) {
	
    return (
			<div>
				<div className="row">
					<div className="col-md-12">	
						<h1>{props.title}</h1>
						<p>{props.description}</p>
					</div>	
				</div>		
				<CardComponent
        card={props.playlist}
      	/>
				
			</div>
		
    )
		

}

export default Category