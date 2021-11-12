import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Input from '../components/Input'
import MyButton from '../components/MyButton'

export default class LoginForm extends Component {
    render() {
        return (
            <View>
                <Text style={styles.signInText}>Sign In</Text>
                <Input
                    onSubmitEditing={() => this.passwordInput.focus()}
                    returnKeyType={"next"}
                    placeholder="Username" />
                <Input
                    inputRef={input => this.passwordInput = input}
                    secureTextEntry={true}
                    placeholder="Passwword" />
                <MyButton textColor={"#f1f1f1"} bgColor={"#0065e0"} text="Sign in now"></MyButton>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    signInText: {
        marginVertical: 10,
        fontSize: 16,
        color: '#333'
    }
})
