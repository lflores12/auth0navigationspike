import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
 './assets/keyFullBlack.png'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style ={styles.logo}
        source = {require('./assets/keyFullBlack.png')}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.SelectText}>Select one:</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
          title="CONSERVATION ORGANIZATION"
          onPress={()=> console.log('clicked org')}
          style={styles.buttonText1}
        />
        </View>
        <View style={styles.button}>
          <Button
          title="GLOBAL SUPPORTER"
          onPress={()=> console.log('clicked supp')}
          style={styles.buttonText2}
          />
        </View>
      </View>
      <View style={styles.needHelp}>
        <Text style={styles.needHelpText}>Not sure which one to pick?</Text><Button 
        title="Click Here"
        style={styles.needHelpText}
        onPress={()=> console.log('help')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // height: 667,
    // width: 375
  },
  logoContainer: {
    margin: 50,  
    justifyContent: "center",
    alignItems: 'center'
  },
  logo: {
    height: 189,
    width: 189
  },
  textContainer: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: 'center'
  },
  SelectText: {
    fontSize: 27,
  },
  buttons: {
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 50
  },
  button: {
    width: 339,
    height: 50,
    marginBottom: 18,
    borderRadius: 4,
    color: 'white',
    backgroundColor: 'black',
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    textAlign: "center",
  },
  buttonText1: {
    width: 260,
    height: 22,
    fontFamily: "ArchivoNarrow",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: 'white'
  },
  buttonText2: {
    width: 106,
    height: 22,
    fontFamily: "ArchivoNarrow",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: 'white'
  },
  needHelp: {
    flexDirection: "row",
    width: 375,
    height: 53,
    opacity: 0.5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  needHelpText: {
    color: 'white'
  },
  needHelpButton: {
    color: "white",
    textDecorationLine: "underline"
  }
});
