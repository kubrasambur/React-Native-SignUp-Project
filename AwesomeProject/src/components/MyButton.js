import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import PropTypes from "prop-types"

export default class MyButton extends Component {
    render() {
        return (
            <TouchableOpacity style={[styles.button, {backgroundColor:this.props.bgColor}]}>
                <Text style={[{color : this.props.textColor},styles.text]}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

MyButton.PropTypes ={
    text : PropTypes.string.isRequired,
    bgColor : PropTypes.string,
    textColor:PropTypes.string
}

const styles = StyleSheet.create({
    button:{
        paddingVertical:10,
        paddingHorizontal:5,
        borderRadius:3,
        alignItems:'center'
    },
    text:{
        fontSize:19
    }
})
