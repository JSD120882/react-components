import React, { Component } from 'react';
import Category from  './category';	

function CategorieComponent(props) {

    return (
			<div>
			{
				props.categories.map((item) => {
					return <Category key={item.id} {...item} />
				})
			}
			</div>	

    )

}

export default CategorieComponent