import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const QRScanner = ({navigation}) => {
    const handleScanCode =()=>{
        navigation.navigate('Ampersand')
    }
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    

    return (
        <View style={styles.container}>
            <View style={styles.scanner}>
                <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}/>
                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </View>
            <View style={styles.footer}>
                <Text style={styles.text}>Want to share your contact?</Text>
                
                <TouchableOpacity onPress={handleScanCode} style={styles.button}>
                    <Text style={styles.buttontext}>Send QR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default QRScanner

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal: 0
    },
    scanner:{
        flex:.90,
        marginHorizontal:0
    },
    footer:{
        alignItems: 'center',
        flex: .1,
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-around'

    },
    text:{
        color: 'grey'
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
