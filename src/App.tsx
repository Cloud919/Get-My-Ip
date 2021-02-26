import React, { Component } from 'react';
import axios from 'axios';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';

export default class App extends Component {
  state = {
    isLoading: true,
    data: []
  }
  GetMyIP = async () => {
    const { data } = await axios.get(
      `https://pro.ip-api.com/json?key=${process.env.REACT_APP_API_KEY}`
    );
    this.setState({ isLoading: false, data });
  };

  componentDidMount() {
    this.GetMyIP(); 
  }
  
  render(){
    const { isLoading, data } = this.state;
    return (
      <div className="container">
        {isLoading ? (
          <div className="loader">
            <div className="loader__gif">
              <img src="./loading.gif" alt="loader" />
            </div>
          </div>
        ) : (
          <div className="main">
            <Main data={data} />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}