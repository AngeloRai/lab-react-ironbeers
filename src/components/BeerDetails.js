import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

class BeerDetails extends Component {
  state = {
    beer: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`
      );
      console.log(response);
      this.setState({ beer: { ...response.data } });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="container mt-5 align-content-center">
        <Link to={`/`}>
          <nav class="container my-1 navbar navbar-expand-xlg navbar-light bg-primary ">
              <div class="container-fluid ">
                <h1>
                <i class="fas fa-home" style={{color: 'white'}}></i>
                </h1>
              </div>
            </nav>
        </Link>

        <div class="card" style={{width: '28rem'}}>
        <div className="col-md-4">
                <img height="200" src={this.state.beer.image_url} />
              </div>
          <div class="card-body">
            <div className='d-flex justify-content-between'>
              <h5 className="card-title">
                {this.state.beer.name} {this.state.beer.attenuation_level}
              </h5>
            </div>
            <p class="card-text text-secondary">{this.state.beer.tagline}</p>
            <p class="card-text">{this.state.beer.description}</p>
            <p class="card-text"> {this.state.beer.contributed_by}</p>
          </div>
        </div>

        
      </div>
    );
  }
}

export default BeerDetails;
