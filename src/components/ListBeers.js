import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

class ListBeers extends Component {
  state = {
    beers: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      console.log(response);
      this.setState({ beers: [...response.data] });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="container mt-5 align-content-center">
        <Link to={`/`}>
          <nav class="container my-1 navbar navbar-expand-xlg navbar-light bg-primary">
              <div class="container-fluid  ">
                <a class="navbar-brand" href="#">
                <i class="fas fa-home" style={{color: 'white'}}></i>
                </a>
              </div>
            </nav>
        </Link>
        <div className='align-content-center'>
          {this.state.beers.map((beer) => {
            return (
              <Link className='text-decoration-none' to={`/beers/${beer._id}`}>
              <div
                className="card mb-3"
                style={{ width: '540px' }}
                key={beer._id}
              >
                <div className="row no-gutters">
                  <div className="col-md-2 m-3">
                    <img height='200'src={beer.image_url} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{beer.name}</h5>
                      <p className="card-text">
                        {beer.tagline}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Created by: {beer.tagline}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListBeers;
