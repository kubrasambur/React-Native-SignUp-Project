import React, { Component } from 'react'
import { Text, StyleSheet, View,TextInput } from 'react-native'

export default class Input extends Component {
    state={
        text: ''
    }
    render() {
        return (
            <View>
                <TextInput ref={this.props.inputRef} {...this.props} value={this.state.text} onChangeText={text => this.setState({text})} placeholderTextColor="#ddd" style={styles.input}
                    
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        height:40,
        paddingHorizontal:5,
        marginBottom:8,
        borderWidth:2,
        borderRadius:6,
        borderColor:'#CACFD2',
        color:'#2C3E50',
        fontSize:15,
        fontWeight:'600'
    }
})

