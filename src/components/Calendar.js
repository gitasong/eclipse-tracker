import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import '../App.css';
 
class Calendar extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 

 
  render() {
    return (
      <div className="calendar">
       <p>Browse Eclipse Data By Date:</p>
        <DatePicker
          onChange={this.onChange}
          value={this.state.date}

        />
      </div>
    );
  }
}

export default Calendar;