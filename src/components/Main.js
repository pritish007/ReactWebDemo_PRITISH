import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import {getProperties} from '../Logic/requestAPI';
import {Link} from 'react-router-dom';

const styles={
  property : {
    width: '50%',
    padding: 20,
    maxHeight: 200
  }
}
export default class Main extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      properties : []
    }
  }

  renderProperties = () => {
    getProperties().then(res=>{
      console.log(res);
      this.setState({properties:res.data.property_data});
    }).catch(err=>{
      console.log(err);
    })
  }

  componentDidMount(){
    this.renderProperties();
  }

  render(){
    return(
      <div>
        <Grid container>
          {
            this.state.properties.map(property=>{
              return (
                <Grid key={property.id} item xs={12} sm={6}>
                  <Link /*to={'/propertydetails/'+property.id} */to={{ pathname: `/propertydetails/${property.id}`, state: property}}>
                  <img style={styles.property} src={property.picture} alt="property"/>
                  <h4>{property.title} <br/> {property.address} <br/> bedrooms: {property.floorplan.bedrooms}, bathrooms: {property.floorplan.bathrooms}</h4>
                  </Link>
                </Grid>
              )
            })
          }
        </Grid>
      </div>
    )
  }
}