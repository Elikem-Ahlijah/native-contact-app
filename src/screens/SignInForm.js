import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import InputFields from "../components/InputFields";
import PasswordInputFields from "../components/PasswordInputField";
import FormButtons from "../components/FormButtons";

const SignInForm = ({ navigation }) => {
  const handleSignIn = () => {
    navigation.navigate("Ampersand");
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image
          style={styles.image}
          source={require("../../assets/homepage.jpg")}
        ></Image>
      </View>
      <View style={styles.formcontainer}>
        <InputFields label="Email" />
        <PasswordInputFields label="Password" />
        <FormButtons name="Sign In" handleClick={handleSignIn} />
      </View>
      <View style={styles.forgotcontainer}>
        <Text style={styles.forgotpass}>Forgot?</Text>
        <TouchableOpacity>
          
          <Text style={styles.redforgotpass}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 3,
  },
  imagecontainer: {
    flex: 0.35,
    marginBottom: 40,
  },
  image: {
    height: 300,
    width: 360,
  },
  formcontainer: {
    flex: 0.45,
    marginHorizontal: 25,
  },
  forgotcontainer: {
    flex: 0.2,
    marginHorizontal: 10,
    flexDirection: "row",
    marginHorizontal: 25,
  },
  forgotpass: {
    color: "grey",
    fontSize: 15,
  },
  redforgotpass: {
    color: "grey",
    borderBottomColor: "red",
    borderBottomWidth: 2,
    fontSize: 15,
    paddingBottom: 4,
    marginHorizontal: 4,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "red",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
  },
  buttontext: {
    color: "white",
    fontSize: 20,
  },
});
