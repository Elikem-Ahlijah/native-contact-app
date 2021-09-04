import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const PageButtons = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.handleClick} style={styles.button}>
               <Text style={styles.buttontext}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PageButtons

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        width: 'auto',
		height: 50,
        justifyContent: 'flex-end',
		// alignItems: 'center',
        borderBottomColor: 'red',
        borderBottomWidth: 2,
        
    },
    buttontext:{
        color: 'darkgrey',
        fontSize:15
    }
})
