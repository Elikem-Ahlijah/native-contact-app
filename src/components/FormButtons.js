import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const FormButtons = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FormButtons

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        width: '100%',
		height: 50,
		backgroundColor: 'red',
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
        marginVertical: 50
    },
    buttontext: {
		color: 'white',
		fontSize: 20,
	},
})
