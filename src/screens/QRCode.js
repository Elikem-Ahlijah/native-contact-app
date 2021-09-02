import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ScanButtons from '../components/ScanButtons';
import CardPic from '../components/CardPic';
import { QRCode } from 'react-native-custom-qr-codes-expo';


const ScannerCode = ({navigation}) => {
    const handlescanner =()=>{
        navigation.navigate('Scanner')
    }
    return (
        <View style={styles.container}>
            <View style={styles.textcontainer}>
                <Text style={styles.maintext}>Exchange Contact Information</Text>
                <Text style={styles.subtext}>Scan this QR below to share your contact</Text>
            </View>
            <View style={styles.qrcodecontainer}>
                <QRCode/>
            </View>
            <View style={styles.profilecontainer}>
                <CardPic  name='Elikem Ahlijah' title='Chief Executive Officer'/>
            </View>
            <View style={styles.footer}>
            <Text style={styles.text}>Want to add a new connention?</Text>
                 <ScanButtons handleClick={handlescanner} name='Scan QR'/> 
                
            </View>

        </View>
    )
}

export default ScannerCode

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 60,
        
    },
    textcontainer:{
        flex: .3
    },

    qrcodecontainer:{
        flex:.40,
        alignItems: 'center',
        marginBottom: 40
    },
    footer:{
        alignItems: 'center',
        flex: .1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderTopColor: 'lightgrey',
        borderTopWidth: 1,
        justifyContent: 'space-around'
    },
    maintext:{
        fontSize: 20,
        marginHorizontal: 20
        
    }, 
    subtext:{
        fontSize:20,
        color: 'grey',
        marginHorizontal: 20,
        marginVertical: 20

    },
   
    profilecontainer:{
        flex: .2,
       
        marginHorizontal: 20
        
    },
    button:{
        width: 100,
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
