import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CardPic from '../components/CardPic';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const MemberProfile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imagecontainer}>
                <CardPic name='Ishmael Yakubu' title='Head of Finance'/>
            </View>    
            <View style={styles.socialcontainer}>
                <Entypo style={styles.socialicons} name="twitter-with-circle" size={35} color="grey" />
                <Entypo name="linkedin-with-circle" size={35} color="grey" />
            </View>
            <View style={styles.detailscontainer}>
                <View style={styles.details}>
                    <Feather style={styles.detailsicons} name="phone" size={24} color="black" />
                    <Text>0244789234</Text>
                </View>
                <View style={styles.details}>
                    <Feather style={styles.detailsicons} name="mail" size={24} color="black" />
                    <Text>owusua@gmail.com</Text>
                </View>
                <View style={styles.details}>
                    <EvilIcons style={styles.detailsicons} name="location" size={24} color="black" />
                    <Text>Accra</Text>
                </View>
            </View>
        </View>
    )
}

export default MemberProfile

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 60,
        marginHorizontal:20
    },
    imagecontainer:{
        flex:.12,
        
        
    },
    socialcontainer:{
        flex:.1,
        flexDirection: 'row',
        
        
    },
    socialicons:{
        marginRight:10
    },
    detailscontainer:{
        flex:.2,

    },
    details:{
        flexDirection: 'row',
        marginVertical:10
        
    },
    detailsicons:{
        marginRight:10
    },
    detailstext:{
        color: 'grey',
        fontSize: 15
    },
    textcontainer:{
        // flex:1
        marginTop:10
    },
    
    
})  
