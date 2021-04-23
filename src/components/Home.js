import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import beers from '../assets/beers.png';
import newbeer from '../assets/new-beer.png';
import randombeer from '../assets/random-beer.png';

class Home extends Component {
 

  render() {
    return (
      <div className="container my-5 d-flex justify-content-center">
          <div className="card d-flex justify-content-center" style={{ width: '28rem' }}>
          <Link to='/beers'>
            <img width="100%" src={beers} alt="beers" />
            </Link>
            <div className="card-body">
            <h1 className='text-center'>All Beers</h1>
              <p className="card-text">
                Quick sample text to create the card title and make up the body
                of the card's content.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: '28rem' }}>
        <Link to="/randombeer">
            <img width="100%" src={randombeer} alt="random beer" />
        </Link>
            <h1>Random Beer</h1>
            <div className="card-body">
              <p className="card-text">
                Quick sample text to create the card title and make up the body
                of the card's content.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: '28rem' }}>
        <Link to='/newbeer'>
            <img width="100%" src={newbeer} alt="new beer" />
        </Link>
            <h1>New Beer</h1>
            <div className="card-body">
              <p className="card-text">
                Quick sample text to create the card title and make up the body
                of the card's content.
              </p>
            </div>
          </div>
      </div>
    );
  }
}

export default Home;


