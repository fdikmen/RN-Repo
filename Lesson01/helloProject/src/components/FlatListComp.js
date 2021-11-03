import React, { Component } from 'react'
import { Text, StyleSheet, View ,FlatList, TouchableOpacity, Image, TextInput} from 'react-native'
import _data from '../assets/data'

export default class FlatListComp extends Component {
    state={
        text:'',
        contact:_data
    }
    _renderContactItem = ({item,index})=>
    {
        return(
            <TouchableOpacity style={[styles.itemContainer,
                {backgroundColor:index%2 === 1 ? '#E6E6E6' : ''}]}>
            <Image style={styles.avatar} source={{uri:item.avatar}}/>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{item._id}.{item.name}</Text>
                <Text>{item.company}</Text>
            </View>
            </TouchableOpacity>
        )
    }

    _renderHeader = ()=>{
        return(
            <View style={styles.searchContainer}>
                <TextInput
                value={this.state.text}
                onChangeText={text=>
                    {this.setState({text}),
                        this._searchFilter(text)}}
                 style={styles.searchInput}
                 placeholder='Search ...'></TextInput>
            </View>
        )
    }

    _searchFilter = text =>{
        const newData = _data.filter(item=>{
            const listItem = `${item.name.toLowerCase()} ${item.company.toLowerCase()}`;
            return listItem.indexOf(text.toLowerCase())>-1;
        })
        this.setState({
            contact:newData
        })
    }
    
    render() {
        return (
            <View>
                <Text> FlatList Component Sample </Text>
                <FlatList
                ListHeaderComponent={this._renderHeader()}
                renderItem={this._renderContactItem}
                keyExtractor={(item)=>item._id}
                data={this.state.contact}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer:{
        flex:1,
        flexDirection:'row',
        paddingVertical:10,
        borderBottomWidth:1,
        borderBottomColor:'#EEE'
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:25,
        marginHorizontal:10

    },
    textContainer:{
        justifyContent:'space-around'
    },
    name:{
        fontSize:15,fontWeight:'bold'
    },
    searchContainer: {
        padding: 10,
    },
    searchInput: {
        fontSize: 15,
        backgroundColor: '#F8F8F8',
        padding: 10,
        borderWidth:1,
        borderRadius:10,
        borderColor:'#F8F8F8'
    }
})
