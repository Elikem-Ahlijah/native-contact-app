import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, Image, View, ScrollView, TouchableOpacity, Button, ImageBackground } from 'react-native';
import InputFields from '../components/InputFields';
import FormButtons from '../components/FormButtons';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


const RegisterForm = ({navigation}) => {
    const handleRegister =()=>{
        navigation.navigate('Sign In')
    }

    const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={{ uri: image }} style={{ width: 300, height: 300 }}  style={styles.profilecontainer}>
                <TouchableOpacity style={styles.pickerbutton}  onPress={pickImage}>
                    <Text style={styles.pickertext} >Add Profile Image</Text>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                
                {image && <Image  />}
                <AntDesign  name="user" size={80} color="lightgrey" />	
                </View>
                </TouchableOpacity>
                

                {/* <Image style={styles.image}source={require('../../assets/dexter.jpg')}></Image> */}
            </ImageBackground>
            <View style={styles.formcontainer}>
                <InputFields label='Full Name'/>
                <InputFields label='Email'/>
                <InputFields label='Phone Number'/>
                <InputFields label='Role'/>
                <InputFields label='Twitter'/>
                <InputFields label='LinkedIn'/>
            </View>
            <View style={styles.buttoncontainer}>
        
                
                <FormButtons name='Register' handleClick={handleRegister}/>
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
        flex: .45,
        backgroundColor:'pink',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
        
    },
    formcontainer:{
        flex:.55,
        marginHorizontal: 25,
    },
    pickertext:{
        color: 'lightgrey'
    },

    pickerbutton:{
        backgroundColor: 'transparent',
        color: 'white'
    },
    buttoncontainer:{
        flex:.15,
        marginHorizontal: 25
    }, 
    image:{
        height: 220,
        width: 360,
        marginHorizontal: 100
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
