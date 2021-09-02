import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import PageButtons from '../components/PageButtons';

const LoginPage = ({navigation}) => {
    const handleRegister = ()=>{
        navigation.navigate('Register')
    }
    const handleSignIn = ()=>{
        navigation.navigate('Sign In')
    }
    return (
        <View style={styles.container}>
            <View style={styles.imagecontainer}>
                <Image style={styles.image} source={require('../../assets/homepage.jpg')}></Image>
            </View>
            <View style={styles.textcontainer}>
                <Text style={styles.uppertext}>KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND</Text>
                <Text style={styles.lowertext}>Sign in or register with your Ampersand email</Text>
            </View>
            <View style={styles.buttonscontainer}>
                
                <PageButtons handleClick={handleRegister}  style={styles.leftbutton} name='REGISTER'/>
               
               
                <PageButtons handleClick={handleSignIn} style={styles.rightbutton} name='SIGN IN'/> 
               
            
            </View> 
        </View>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
        marginHorizontal: 3
    },
    imagecontainer:{
        flex: .6,
        marginBottom: 40
    },
    image:{
        height: 360,
        width: 360
    },
    textcontainer:{
        flex: .25,
        marginHorizontal: 10
    },
    uppertext:{
        fontSize: 20,
        color: 'darkgrey',
        marginBottom: 20
    },
    lowertext:{
        fontSize:15,
        color: 'darkgrey'
    },
    buttonscontainer:{
        flex: .15,
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    // rightbutton:{
    //     alignSelf: 'flex-end'
    // },
    // leftbutton:{
    //     alignSelf: 'flex-start'

    // }
    button:{
        width: 'auto',
		height: 50,
        justifyContent: 'center',
		alignItems: 'center',
        borderBottomColor: 'red',
        borderBottomWidth: 2,
        
    },
    buttontext:{
        color: 'darkgrey',
        fontSize:20
    }


})
