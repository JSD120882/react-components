import React, { Component } from 'react';
import PropTypes from 'prop-types';



class ItemCard extends Component {

	render() {
		
		const style={
			imgBack:{
				backgroundImage:`url(${this.props.cover})`,
			}
		}

    return (
			

	
			

				<div className="col-md-2">
					
						<div className="card">
								<div className="card-body" style={style.imgBack}>
									<h5 className="card-title">{this.props.title}</h5>
										<img src="https://icon-icons.com/icons2/494/PNG/512/code_icon-icons.com_48323.png" data-toggle="modal" data-target={"#" + this.props.modal}/>
								</div>
						</div>
						<a href="#" className="card-link float-right">ver más</a>


					<div className="modal fade" id={this.props.modal}>
					<div className="modal-dialog">
						<div className="modal-content">
										<div className="modal-header">
											<h4 className="modal-title">{this.props.title}</h4>	
											<button type="button" className="close" data-dismiss="modal">&times;</button>
										</div>
										
									
										<div className="modal-body">
											xx
										</div>
										
									
										<div className="modal-footer">
											<button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
										</div>
										
						</div>
					</div>
				</div>

				
				</div>

			
		
			
		);
  }
}

ItemCard.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired
}


export default ItemCard;