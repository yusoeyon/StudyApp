import React,{Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


class Main extends Component {
    render() {
      return (
          <View style={styles.container}> 
            <View style={styles.logo}>
              <Image style={{ width: 200, height: 200}} source = { require('./Images/Logo.png')} />
            </View>
            <View style={styles.button}>
              <TouchableOpacity style={styles.ToDo_button} onPress={()=>this.props.navigation.navigate("ToDoMain")}><Text style={{fontSize: 17}}>ToDoList</Text></TouchableOpacity>
              <TouchableOpacity style={styles.D_Day_button} onPress={()=>this.props.navigation.navigate("DDay")}><Text style={{fontSize: 17}}>D-Day</Text></TouchableOpacity>
              <TouchableOpacity style={styles.Alarm_button} onPress={()=>this.props.navigation.navigate("Alarm")}><Text style={{fontSize: 17}}>Alarm</Text></TouchableOpacity>
              <TouchableOpacity style={styles.Alarm_button} onPress={()=>this.props.navigation.navigate("Wise")}><Text style={{fontSize: 17}}>Wise Saying</Text></TouchableOpacity>
            </View>
          </View>
      );
    }
  }


Main.navigationOptions = {
    header: null
  }

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white'
    },
    logo:{
      marginTop: "40%",
      alignItems: 'center',
      
    },
    button:{
      marginTop:"12%"
    },
    ToDo_button:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        width: 190,
        borderRadius: 15,
        backgroundColor: "white",
        borderWidth: 1.5,
        borderColor: "#86888A",
      },
      D_Day_button:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        width: 190,
        marginTop: 30,
        borderRadius: 15,
        backgroundColor: "white",
        borderWidth: 1.5,
        borderColor: "#86888A",
      },
      Alarm_button:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        width: 190,
        marginTop: 30,
        borderRadius: 15,
        backgroundColor: "white",
        borderWidth: 1.5,
        borderColor: "#86888A",
      },
});

export default Main;