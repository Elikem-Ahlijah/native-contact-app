import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView, TouchableOpacity } from 'react-native';
import InputFields from '../components/InputFields';

const RegisterForm = ({navigation}) => {
    const handleRegister =()=>{
        navigation.navigate('Sign In')
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.profilecontainer}>
                <Image style={styles.image}source={require('../../assets/dexter.jpg')}></Image>
            </View>
            <View style={styles.formcontainer}>
                <InputFields label='Full Name'/>
                <InputFields label='Email'/>
                <InputFields label='Phone Number'/>
                <InputFields label='Role'/>
                <InputFields label='Twitter'/>
                <InputFields label='LinkedIn'/>
            </View>
            <View style={styles.buttoncontainer}>
        
                <TouchableOpacity onPress={handleRegister} style={styles.button}>
                    <Text style={styles.buttontext}>Register</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default RegisterForm

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal: 3
    },
    profilecontainer:{
        flex: .2
    },
    formcontainer:{
        flex:.5,
        marginHorizontal: 25,

        

    },
    buttoncontainer:{
        flex:.2,
        marginHorizontal: 25
    }, 
    image:{
        height: 250,
        width: 360
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
