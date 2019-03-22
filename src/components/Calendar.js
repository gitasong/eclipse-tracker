import React, { Component } from 'react';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";


class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
   
  }
 
  handleChange = (date)  =>{
    this.setState({
      startDate: date
    });
  }
 
  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default Calendar;