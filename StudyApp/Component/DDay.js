import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import Dates from 'react-native-dates';
import moment from 'moment';
 
export default class DDay extends Component {
  state = {
    date: null,
    focus: 'startDate',
    startDate: null,
    endDate: null,
  }
 
  render() {
    const isDateBlocked = (date) =>
      date.isBefore(moment(), 'day');
 
    const onDatesChange = ({ startDate, endDate, focusedInput }) =>
      this.setState({ ...this.state, focus: focusedInput }, () =>
        this.setState({ ...this.state, startDate, endDate })
      );
 
    return (
      <View style={styles.container}>
        <Dates
          onDatesChange={onDatesChange}
          isDateBlocked={isDateBlocked}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          focusedInput={this.state.focus}
          range
        />
        <View style={styles.textContainer}>
            <Text style={[styles.date, this.state.focus === 'startDate']}>  시작일: {this.state.startDate && this.state.startDate.format('LL')}</Text>
            <Text style={[styles.date, this.state.focus === 'endDate']}>  종료일: {this.state.endDate && this.state.endDate.format('LL')}</Text>
            { parseInt((this.state.endDate-this.state.startDate)/(24 * 60 * 60 * 1000)) > 0 ? <Text style={styles.date}>  시작일로부터 D-{parseInt((this.state.endDate-this.state.startDate)/(24 * 60 * 60 * 1000))}일 전</Text> : null}
        </View>
      </View>
    );
  }
  DataFromChild = (data) => {
    this.setState({DDayMain : data});
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor:"white",
  },
  textContainer:{
    justifyContent:'center',
    width: "70%",
    left:0,
    marginLeft: "17%",
    marginTop: 80,

  },
  date: {
    marginTop: 30,
    fontSize: 23,    
    color: "black"
  },
  focused: {
    color: 'blue'
  }
});
 
AppRegistry.registerComponent('DDay', () => DDay);