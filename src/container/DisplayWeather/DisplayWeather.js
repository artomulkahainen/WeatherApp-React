import React, { Component } from 'react';
import DisplayDay from '../../components/DisplayDay/DisplayDay';
import classes from './DisplayWeather.module.css';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';

class DisplayWeather extends Component {
  state = {
    data: null,
    error: false,
  };

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=' + this.props.query)
      .then((res) => {
        let woeid = res.data[0].woeid;
        return axios.get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/' + woeid);
      })
      .then((res) => {
        this.setState({ data: res.data})
      }).catch((err) => {
        console.log(err);
        this.setState({ error: true})
      });
  }

  render() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    // CITY NAME AND NEXT FIVE DAYS AS VARIABLES
    let city = this.state.error ? <p>Data can't be loaded!</p> : <Spinner />;
    let today = this.state.error ? (
      <p>Data can't be loaded!</p>
    ) : (
      null
    );
    let tomorrow = this.state.error ? (
      <p>Data can't be loaded!</p>
    ) : (
      null
    );
    let twoDays = this.state.error ? (
      <p>Data can't be loaded!</p>
    ) : (
      null
    );
    let threeDays = this.state.error ? (
      <p>Data can't be loaded!</p>
    ) : (
      null
    );
    let fourDays = this.state.error ? (
      <p>Data can't be loaded!</p>
    ) : (
      null
    );

    // IF DATA IS FETCHED, CHANGE VARIABLES ABOVE
    if (this.state.data) {
      city = this.state.data.title;
      today = (
        <DisplayDay
          day="Today"
          minTemp={this.state.data.consolidated_weather[0].min_temp.toFixed(1)}
          maxTemp={this.state.data.consolidated_weather[0].max_temp.toFixed(1)}
          weather={this.state.data.consolidated_weather[0].weather_state_abbr}
        />
      );
      tomorrow = (
        <DisplayDay
          day="Tomorrow"
          minTemp={this.state.data.consolidated_weather[1].min_temp.toFixed(1)}
          maxTemp={this.state.data.consolidated_weather[1].max_temp.toFixed(1)}
          weather={this.state.data.consolidated_weather[1].weather_state_abbr}
        />
      );
      twoDays = (
        <DisplayDay
          day={
            this.state.data.consolidated_weather[2].applicable_date.slice(8) +
            ' ' +
            months[
              new Date(
                this.state.data.consolidated_weather[2].applicable_date
              ).getMonth()
            ]
          }
          minTemp={this.state.data.consolidated_weather[2].min_temp.toFixed(1)}
          maxTemp={this.state.data.consolidated_weather[2].max_temp.toFixed(1)}
          weather={this.state.data.consolidated_weather[2].weather_state_abbr}
        />
      );
      threeDays = (
        <DisplayDay
          day={
            this.state.data.consolidated_weather[3].applicable_date.slice(8) +
            ' ' +
            months[
              new Date(
                this.state.data.consolidated_weather[3].applicable_date
              ).getMonth()
            ]
          }
          minTemp={this.state.data.consolidated_weather[3].min_temp.toFixed(1)}
          maxTemp={this.state.data.consolidated_weather[3].max_temp.toFixed(1)}
          weather={this.state.data.consolidated_weather[3].weather_state_abbr}
        />
      );
      fourDays = (
        <DisplayDay
          day={
            this.state.data.consolidated_weather[4].applicable_date.slice(8) +
            ' ' +
            months[
              new Date(
                this.state.data.consolidated_weather[4].applicable_date
              ).getMonth()
            ]
          }
          minTemp={this.state.data.consolidated_weather[4].min_temp.toFixed(1)}
          maxTemp={this.state.data.consolidated_weather[4].max_temp.toFixed(1)}
          weather={this.state.data.consolidated_weather[4].weather_state_abbr}
        />
      );
    }

    return (
      <div className={classes.Weather}>
        <h1>{city}</h1>
        <div className={classes.DaysRow}>
          {today}
          {tomorrow}
          {twoDays}
          {threeDays}
          {fourDays}
        </div>
      </div>
    );
  }
}

export default DisplayWeather;