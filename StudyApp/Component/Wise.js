import React,{Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


class Wise extends Component {
    render() {
      return (
          <View style={styles.container}> 
            <View style={styles.wise}>
              <Image style={{ width: 200, height: 200}} source = { require('./Images/Wise.png')} />
            </View>
            <View style={{marginTop: 20}}>
                <Text style={styles.text}>천천히 그리고 꾸준히 가는자가 경주에서 승리한다.</Text>
                <Text style={styles.text}> 고통없이는 얻는 것도 없다.</Text>
                <Text style={styles.text}>지금 당신은 합격인가?</Text>
                <Text style={styles.text}>당신은 할 수 있다. 반드시 할 수 있다.</Text>
                <Text style={styles.text}>10분 후와 10년 후를 동시에 생각하라.</Text>
                <Text style={styles.text}>최후의 성공을 거둘 때까지 밀고나가자.</Text>
                <Text style={styles.text}>세월을 헛되이 보내지 말라. 청춘은 다시 오지 않는다.</Text>

                
            </View>
          </View>
      );
    }
  }

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white'
    },
    wise:{
      marginTop: "5%",
      alignItems: 'center',
    },
    text:{
        textAlign:'center',
        marginLeft: 57,
        marginRight:57,
        marginBottom:23,
        fontSize:18.3
    }
    
});

export default Wise;