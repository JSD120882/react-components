import React, { Component } from 'react';
import CardComponent from  '../../library-components/component-card/component-card.js';	
import SearchComponent from  '../../library-components/search/search.js';	
import DropComponent from  '../../library-components/drop-down/drop.js';	
import HomeLayout from '../components/home_layout';
import './../pages.css';

class HomeComponent extends Component {
  render() {
		const playlist = this.props.data.categories[0].playlist
    return (
      <HomeLayout>
				Home
			</HomeLayout>
    )
  }
}

export default HomeComponent