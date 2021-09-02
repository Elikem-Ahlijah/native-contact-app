import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import PageButtons from '../components/PageButtons';


const GetStarted = ({navigation}) => {
    const handleStart = ()=>{
        navigation.navigate('Welcome')
    }
    return (
        <View style={styles.container}>
            <View style={styles.logocontainer}>
                <Text style={styles.logotext}>AMPERSAND</Text>
            </View>
            <View style={styles.textcontainer}>
                <Text style={styles.text}>AMPERSAND</Text>
                <Text style={styles.text}>CONTACTS</Text>
            </View>
            <View style={styles.buttoncontainer}>
            {/* <TouchableOpacity  onPress={handleStart} style={styles.button}>
               <Text style={styles.buttontext}>Get Started</Text>
            </TouchableOpacity> */}
            <PageButtons handleClick={handleStart} name='Get Started'/>
            </View>
        
                
            
        </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 25,
        marginHorizontal:40
    },
    logocontainer:{
        flex: .3,
        justifyContent:'center',
        alignItems:'center'
    },
    logotext:{
        color: 'darkgrey',
        fontSize:40
    },
    textcontainer:{
        flex: .5,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color: 'darkgrey',
        fontSize:25
    },
    buttoncontainer:{
        flex: .2,
        justifyContent: 'center',
		alignItems: 'center',
    },
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
