import React from 'react';
import classes from './DisplayDay.module.css';
import sn from '../../assets/Icons/sn.svg';
import c from '../../assets/Icons/c.svg';
import h from '../../assets/Icons/h.svg';
import t from '../../assets/Icons/t.svg';
import sl from '../../assets/Icons/sl.svg';
import hr from '../../assets/Icons/hr.svg';
import lr from '../../assets/Icons/lr.svg';
import s from '../../assets/Icons/s.svg';
import hc from '../../assets/Icons/hc.svg';
import lc from '../../assets/Icons/lc.svg';

const weatherIcons = [
  { type: 'snow', code: sn, abbr: 'sn', name: 'Snow' },
  { type: 'clear', code: c, abbr: 'c', name: 'Clear' },
  { type: 'hail', code: h, abbr: 'h', name: 'Hail' },
  { type: 'thunderstorm', code: t, abbr: 't', name: 'Thunderstorm' },
  { type: 'heavyrain', code: hr, abbr: 'hr', name: 'Heavy Rain' },
  { type: 'lightrain', code: lr, abbr: 'lr', name: 'Lightrain' },
  { type: 'showers', code: s, abbr: 's', name: 'Showers' },
  { type: 'heavycloud', code: hc, abbr: 'hc', name: 'Heavy Cloud' },
  { type: 'lightcloud', code: lc, abbr: 'lc', name: 'Light Cloud' },
  { type: 'sleet', code: sl, abbr: 'sl', name: 'Sleet' },
];

const displayDay = (props) => {
  let index = 0;
  for (let el of weatherIcons) {
    if (el.abbr === props.weather) {
      break;
    }
    index++;
  }

  return (
    <div className={classes.Everything}>
      <h2>{props.day}</h2>
      <div className={classes.Details}>
        <p>{weatherIcons[index].name}</p>
        <img src={weatherIcons[index].code} alt="icon" />
      </div>
      <p className={classes.Temp}>
        Min: {props.minTemp} °C, Max: {props.maxTemp} °C
      </p>
    </div>
  );
};

export default displayDay;
