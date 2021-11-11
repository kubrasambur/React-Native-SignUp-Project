import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  SafeAreaView,
  FlatList,
  TextInput
} from 'react-native';

import data from '../../data'

class flatListExample extends Component {
  state={
    text:' ',
    contacts:data
  }

  searchFilter=text=>{
    const newData = data.filter(item=>{
      const listItem=`${item.name.toLowerCase()} ${item.company.toLowerCase()}`

      return listItem.indexOf(text.toLowerCase()) > -1
    })
    this.setState({
      contacts:newData
    })
  }

  renderHeader =()=>{
    const {text} = this.state
    return(
      <View style={styles.searchContainer}>
        <TextInput onChangeText={text =>{
          this.setState({
            text
          })
          this.searchFilter(text)
        }} value={text} placeholder="Search.." style={styles.searchInput}></TextInput>
      </View>
    )
  }

  renderContactsItem=({item,index})=>{
    return(
      <TouchableOpacity style={[styles.itemContainer,{backgroundColor:index % 2 == 1 ? '#fafafa' : ''}]}>
        <Image style={styles.avatar} source={{uri:item.picture}}></Image>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text>{item.company}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render(){
    return (
        <SafeAreaView style={styles.container}>
           <FlatList ListHeaderComponent={this.renderHeader()} data={this.state.contacts} renderItem={this.renderContactsItem} keyExtractor={item=>item._id}></FlatList>    
        </SafeAreaView>        
);
  }
  
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#3498DB",
    flex:1,
    flexDirection:"row",
    alignItems:'center',
    justifyContent:"center"
},
itemContainer:{
  flex:1,
  flexDirection:'row',
  paddingVertical:10,
  borderBottomWidth:1,
  borderBottomColor:'#eee'
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
  fontSize:16
},
searchContainer:{
  padding:10
},
searchInput:{
  fontSize:16,
  backgroundColor:'#f9f9f9',
  padding:10
}
});

export default flatListExample;
