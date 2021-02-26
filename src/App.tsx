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
      "https://pro.ip-api.com/json?key=yaPob1D4ChKc0dr"
    );
    //console.log(data);
    this.setState({ isLoading: false, data });
    //console.log(this.state.data);
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