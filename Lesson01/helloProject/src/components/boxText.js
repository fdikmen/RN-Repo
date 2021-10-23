import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import PropTypes from 'prop-types'

export default class boxText extends Component {
  render() {
      const {note,number} = this.props;
    return (
        <View>
        <Text style={styles.boxText}> {note} {number}</Text>
    </View>
    );
  }
}
const styles = StyleSheet.create({
    boxText:{fontSize:18,color:'white',borderWidth:2,
    borderColor:'red',  borderRadius:5},
    })

    boxText.propTypes = 
    {
        note:PropTypes.string.isRequired,
        number:PropTypes.number
    }
