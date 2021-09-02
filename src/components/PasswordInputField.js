import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


const PasswordInputFields = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput style={styles.inputfield} secureTextEntry={true}
				autoCompleteType="password" ></TextInput>
        </View>
    )
}

export default PasswordInputFields

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor:'lightgrey',
        marginVertical:10,
        justifyContent: 'space-between'
    },
    label:{
        alignSelf: 'flex-start',
        color: 'grey',
        fontSize:17
    },
    inputfield:{
        alignSelf: 'flex-end',
        fontSize: 17
    }
})
