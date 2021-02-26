import React, { Component } from 'react';
import axios from 'axios';
import Main from './components/Main/Main';
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
    const { data } = this.state;
    return (
      <>
        <Main data={data} />
      </>
    );
  }
}