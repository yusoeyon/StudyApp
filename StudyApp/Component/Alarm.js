import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import TimePicker from "react-native-24h-timepicker";
import Clock from 'react-live-clock';
class Alarm extends Component {
  constructor() {
    super();
    this.state = {
      time: ""
    };
  }
 
  onCancel() {
    this.TimePicker.close();
  }
 
  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
  }
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Alarm}>
            <Image style={{ width: 200, height: 170}} source = { require('./Images/Alarm.png')} />
        </View>
        <TouchableOpacity
          onPress={() => this.TimePicker.open()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>TIMEPICKER</Text>
        </TouchableOpacity>
        <TimePicker
          ref={ref => {
            this.TimePicker = ref;
          }}
          onCancel={() => this.onCancel()}
          onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
        />
        <Text style={styles.text}>예약 알림 시간:  {this.state.time}</Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 100
  },
  Alarm:{
    alignItems: 'center',
    
  },
  text: {
    fontSize: 23,
    marginTop: 20
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 3,
    marginVertical: 20
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600"
  }
});
 
export default Alarm;