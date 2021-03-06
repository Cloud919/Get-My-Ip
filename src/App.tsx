import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';

const API_KEY: string = process.env.REACT_APP_API_KEY || "Wrong API Key Value";

export default class App extends Component {
  state = {
    isLoading: true,
    data: []
  }
  GetMyIP = async () => {
    const { data } = await axios.get(
      `https://pro.ip-api.com/json?field=query,country,countryCode&key=${API_KEY}`
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
            <div className="loader_gif">
              <img src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif" alt="loader" />
            </div>
          </div>
        ) : (
          <div className="main">
            <Header />
            <Main data={JSON.stringify(data)}/>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}