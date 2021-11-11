import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

export default class card extends Component {
    render() {
        const {text,backgroundColor} = this.props
        return (
            <View>
                <View style={[styles.cartContainer, {backgroundColor}]}>
                    <Text style={styles.cartText}>{text}</Text>
                    <Text style={styles.cartText}>{text}</Text>
                </View>
            </View>
        )
    }
}

card.PropTypes={
    text:PropTypes.string.isRequired,
    backgroundColor:PropTypes.string
}

const styles = StyleSheet.create({
    cartContainer:{
        borderColor:'#000'
      },
      cartText:{
        color:'#000',
        fontSize:35,
        borderStyle:'solid',
        borderWidth:2,
        padding:10
      }
})
