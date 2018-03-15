import React from 'react';
import Grid from 'material-ui/Grid';
import {getProperties} from '../Logic/requestAPI';
import styles from '../components/Main.js'

/*const PropertDetails = (props) => (
	<div>
		<h2>Property Details</h2>
	</div>
);*/

export default class PropertDetails extends React.Component{

	
    componentDidMount(){
	    console.log(this.props.location.state.title);
    }

	render(){
		console.log(this.props.location.state.picture);
		return (
			<main className="container">
			  <div className="left-column">
			    <img data-image="red" className="active" src={this.props.location.state.picture_large} alt=""/>
			  </div>
			  <div className="right-column">			    
			    <div className="product-description">
			      <span>{this.props.location.state.title}</span>
			      <h3>{this.props.location.state.manager_name}</h3>
			      <p>{this.props.location.state.address}</p>
			    </div>   
			    <div className="product-configuration">
			      <div className="product-color">
			          <div>
			            {this.props.location.state.headline && <span>{this.props.location.state.headline}</span> }
			          </div>
			      </div>
			      <div className="cable-config">
			        <span>Floor Plan</span>
			        <div className="cable-choose">
			          <button>bed: {this.props.location.state.floorplan.bedrooms}</button>
			          <button>bath: {this.props.location.state.floorplan.bathrooms}</button>
			          {this.props.location.state.floorplan.no_pet && <button>No Pet</button> }
			        </div>
			      </div>
			    </div>
			    <div className="product-price">
			      <a href={this.props.location.state.application_url} className="cart-btn">Book</a>
			    </div>
			  </div>
			</main>
		)
	}
}