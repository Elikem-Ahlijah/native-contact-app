import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const ScanButtons = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ScanButtons

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    button:{
        width: 110,
		height: 40,
		backgroundColor: 'white',
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
        marginVertical: 5,
        borderWidth:1,
        borderColor:'red'
    },
    buttontext: {
		color: 'red',
		fontSize: 15,
	},
})