import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


const PasswordInputFields = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput textAlign='right' style={styles.inputfield} secureTextEntry={true}
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
        
    },
    label:{
        
        color: 'grey',
        fontSize:17
    },
    inputfield:{
        flex:1,
        fontSize: 17
    }
})
