import React, { Component } from 'react';
import '../App.css';

export default class CalendarB extends Component {
  render() {
    return (
        <div className="calendar">
        <label for="start">View By Date:</label>

<input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31" />
    </div>   
    )
  }
}



