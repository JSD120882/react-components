import React, { Component } from 'react';

import SearchComponent from  '../../library-components/search/search';	
import DropComponent from  '../../library-components/drop-down/drop';	
import ApiElementsComponent from  '../../library-components/api-component/api-list';
import LibraryLayout from '../components/library_layout';
import CategorieComponent from  '../../categories/categories';
	

import './../pages.css';
import HandleError from '../../error/error';

class LibraryComponent extends Component {
	
  render() {

		//const playlist = this.props.data.categories[1].playlist
    return (
			<HandleError>
      <LibraryLayout>

				<div className="container-fluid">
        <header className="header mb-4">
          <h1 className="title">Library Componentes (Atomic Design)</h1>
        </header>
        <div className="main">
					
					<div className="row ">
						<div className="col-md-8">
							<SearchComponent/>
						</div>
					</div>

					<div>
				
						<CategorieComponent categories= {this.props.data.categories}/>
					
					</div>	
					
					<div className="row mt-4">
						<div className="col-md-8">
							<DropComponent/>
						</div>
					</div>
					
				</div>
      </div> 

			< div class="row">
				<div class="col-md-12">
					<ApiElementsComponent/>
				</div>
			</div>
			</LibraryLayout>
			
			</HandleError>
    )
  }
}

export default LibraryComponent