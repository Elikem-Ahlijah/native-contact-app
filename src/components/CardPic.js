import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const CardPic = (props) => {
    return (
        <View style={styles.imagecontainer}>
                <Image style={styles.image} source={require('../../assets/dexter.jpg')}></Image>
                <View style={styles.textcontainer}>
                    <Text style={styles.name}>
                        {props.name}
                    </Text>
                    <Text style={styles.title}>
                        {props.title}
                    </Text>
                </View>
            </View>    
    )
}

export default CardPic

const styles = StyleSheet.create({
    imagecontainer:{
        flex:.12,
        flexDirection: 'row',
    },
    textcontainer:{
        // flex:1
        marginTop:10
    },
    image:{
        width: 65,
        height: 65,
        borderRadius: 100,
        marginRight: 15
    },
    name:{
        fontSize: 16,
        color: 'black'
    },
    title:{
        fontSize: 16,
        color:'grey'
    }
})
