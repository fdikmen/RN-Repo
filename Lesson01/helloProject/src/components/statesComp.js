import React, { Component } from 'react';
import { View, Text,StyleSheet, Button } from 'react-native';
import BoxText from './boxText'

export default class statesComp extends Component {
  _onPressBtnClick = ()=>
  {
    alert('Clicked!');
  }
  _onChnName = ()=>
  {
    this.setState(
      {
        name:'Emmy'
      }
    )
  }
  state={
    name:'Tommy',
    weekDays:['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={[styles.box,styles.box1]}>
      <Text>Box-1</Text>
      <View>
        {this.state.weekDays.map((weekDay,index)=>(
          <Text>{index+1} . {weekDay}</Text>
        ))}
      </View>
    </View>
    <View style={[styles.box,styles.box2]}>
      <Text>Box-2 {this.state.name}</Text>
      <Button color='#000' title='Change Name' onPress={this._onChnName}/>
      <Button color='#000' title='Test Button' onPress={this._onPressBtnClick}/>

    </View> 
    <View style={[styles.box,styles.box3]}>
      <Text>Box-3</Text>
    <BoxText note='Hello!' number={12}/>
    <BoxText note='World!'/>
    <BoxText note='React'/>
    <BoxText note='Native'number={41}/>
    </View>
   </View>
    );
  }
  }
const styles = StyleSheet.create({
  container: {
      paddingTop: 50,
      fontSize: 18,
      fontWeight: '400',
      backgroundColor: '#FFEBCB',
      flex:1,// ---> 5/5
      flexDirection:'column',
  
    },
    box:{
      //border:'1px solid red',
      borderWidth:2,
      borderColor:'red',
      borderRadius:5,
      height:180
    },
    box1:{
      backgroundColor:'red',
      flex:1// ---> 1/5
    },
    box2:{
      backgroundColor:'yellow',
      flex:1// ---> 1/5
    },
    box3:{
      backgroundColor:'blue',
      flex:3// ---> 3/5
    }
  });
