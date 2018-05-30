import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemCard from './item-card';
import './component-card.css';


function CardComponent(props) {


    return (
			
		
			<div className="row">
				{
        props.card.map((item) => {
          return <ItemCard {...item} key={item.id} />
        })
     		 }
				
				 
			</div>
		
			
		
			

			
    );
  }

CardComponent.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired
}


export default CardComponent;