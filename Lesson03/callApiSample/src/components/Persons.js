import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, FlatList, TextInput, ActivityIndicator } from 'react-native'
import axios from 'axios'
const _sampleData = [{
    "_id": 1,
    "name": "Leila",
    "avatar": "https://robohash.org/temporibusmollitiavoluptatem.png?size=50x50&set=set1",
    "company": "Fliptune"
}, {
    "_id": 2,
    "name": "Nelli",
    "avatar": "https://robohash.org/doloresminusdolorem.png?size=50x50&set=set1",
    "company": "Innotype"
}]
export default class Persons extends Component {
    state = {text: '',contact: [],loading:true ,allUsers:[],
    page:1,searchingState:false,refreshing:false   }
    _getUsers = async () => {
        this.setState({ loading: true })
        const { data: { results: contact } } =
            await axios.get(`https://randomuser.me/api/?results=10&page=${this.state.page}`);
        const users = [...this.state.allUsers, ...contact]
        if (this.state.refreshing) {
            users.reverse();
        }
        this.setState({ contact: users, allUsers: users, loading: false,refreshing:false });
        console.log(contact);
    }
    componentDidMount() {
        this._getUsers();
    }
    
    _renderPersonItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={[styles.itemContainer,
            { backgroundColor: index % 2 === 1 ? '#E6E6E6' : '' }]}>
                <Image style={styles.avatar} source={{ uri: item.picture.thumbnail }} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
                    <Text>{item.location.state}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _searchFilter = text => {
        const newData = this.state.allUsers.filter(item => {
            const listItem = `${item.name.first.toLowerCase()}
            ${item.name.last.toLowerCase()} 
             ${item.location.state.toLowerCase()}`;
            return listItem.indexOf(text.toLowerCase()) > -1;
        })
        this.setState({
            contact: newData
        })
    }

    _renderHeader = () => {
        console.log(_sampleData);
        return (
            <View style={styles.searchContainer}>
                <TextInput
                onFocus={()=>this.setState({searchingState:true})}
                onBlur={()=>this.setState({searchingState:false})}
                    value={this.state.text}
                    onChangeText={text => {
                        this.setState({ text }),
                            this._searchFilter(text)
                    }}
                    style={styles.searchInput}
                    placeholder='Search ...'></TextInput>
            </View>
        )
    }

    _renderFooter = ()=>{
        if(!this.state.loading) return null;
        return(
            <View>
                <ActivityIndicator size="large"/>
            </View>
        )
    }
    _loadMore = ()=>{
        if (!this.state.searchingState) {
            this.setState({
                page:this.state.page+1
            },()=>{this._getUsers();})
        }
    }

    _onRefresh = ()=>{
       
            this.setState({
                page:1,refreshing:true
            },()=>{this._getUsers();})
    }
    render() {
        return (
            <View>
                <FlatList
                ListFooterComponent={this._renderFooter}
                    ListHeaderComponent={this._renderHeader()}
                    renderItem={this._renderPersonItem}
                    keyExtractor={(item) => item.login.uuid}
                    data={this.state.contact}
                    onEndReached={this._loadMore}
                    onEndReachedThreshold={0.5}
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1, flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1, borderBottomColor: '#EEE'
    },
    avatar: {
        width: 50, height: 50,
        borderRadius: 25,
        marginHorizontal: 10
    },
    textContainer: { justifyContent: 'space-around' },
    name: { fontSize: 15, fontWeight: 'bold' },
    searchContainer: { padding: 10 },
    searchInput: {
        fontSize: 15,
        backgroundColor: '#F8F8F8',
        padding: 10,
        borderWidth: 1, borderRadius: 10, borderColor: '#F8F8F8'
    }
})

