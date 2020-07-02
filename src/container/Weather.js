import React, { Component } from 'react';
import InputComponent from '../components/InputComponent/InputComponent';
import DisplayWeather from './DisplayWeather/DisplayWeather';
import styled from 'styled-components';
import './Weather.css';
import classes from './Weather.module.css';

const StyleTitle = styled.h1`
  font-size: 500%;
  opacity: 1;
  transition: 0.3s;

  &:hover {
    opacity: 0.6;
  }

  @media (max-height: 1000px) {
    font-size: 300%;
  }
`;

const StyledButton = styled.button`
  position: relative;
  width: 80px;
  height: 40px;
  margin: 20px auto 0 auto;
  background: -webkit-linear-gradient(top, #dd4b39, #ca2e19);
  background: -moz-linear-gradient(top, #dd4b39, #ca2e19);
  background: -ms-linear-gradient(top, #dd4b39, #ca2e19);
  border: 0px solid #ca2e19;
  border-radius: 5px;
  /*box-sizing: border-box;*/
  color: white;
  text-shadow: 0 1px 0 #c04131;
  opacity: 0.6;
  transition: 0.3s;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 1;
  }
`;

class Weather extends Component {
  state = {
    inputField: '',
    query: null,
    displayWeather: false,
    title: 'WeatherApp',
    button: 'Search',
    loading: false,
  };

  updateQuery = (el) => {
    return el.replace(/ /g, '+');
  }

  inputChangeHandler = (event) => {
    this.setState({
      inputField: event.target.value,
    });
  };

  toggleDisplayWeather = () => {
    if (!this.state.displayWeather) {
      this.setState({ displayWeather: !this.state.displayWeather, query: this.updateQuery(this.state.inputField) });
      this.toggleHideTitle();
    } else {
      this.setState({ displayWeather: !this.state.displayWeather });
      this.toggleTitle();
      this.setState({query: null, inputField: '', woeid: null});
    }
  };

  toggleTitle = () => {
    this.setState({ title: 'WeatherApp', button: 'Search' });
  };

  toggleHideTitle = () => {
    this.setState({ title: '', button: 'Reset' });
  };

  render() {
    let weather = null;
    let input = (
      <InputComponent
        change={this.inputChangeHandler}
        placeholder="Enter a city"
        inputField={this.state.inputField}
      />
    );

    if (this.state.displayWeather) {
      console.log(this.state.query);
      weather = <DisplayWeather query={this.state.query} />;
      input = null;
    }

    return (
      <div className="Weather">
        <div className={classes.EntryScreen}>
          <StyleTitle>{this.state.title}</StyleTitle>
          {input}
        </div>
        <div className={classes.WeatherScreen}>{weather}</div>
        <StyledButton onClick={this.toggleDisplayWeather}>
          {this.state.button}
        </StyledButton>
      </div>
    );
  }
}

export default Weather;
