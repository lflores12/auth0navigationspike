import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Dimensions } from 'react-native';
 
export default class MainView extends Component {
  static navigationOptions = () => {
    return {
      headerStyle: {
        display: 'none'
      }
    }
  }
  render() {
    return (
        <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
          style ={styles.logo}
          source = {require('./assets/keyFullBlack.png')}
          resizeMode='cover'
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.SelectText}>Select one:</Text>
        </View>
        <View style={styles.buttons}>
          {/* <View style={styles.buttonContainer}> */}
            <TouchableOpacity
                onPress={()=> console.log('orgs')}
                style={styles.buttonContainer}
              >
                <Text style={styles.buttonText}>CONSERVATION ORGANIZATION</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=> console.log('supp')}
                style={styles.buttonContainer}
              >
                <Text style={styles.buttonText}>GLOBAL SUPPORTER</Text>
            </TouchableOpacity>
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
}

const { width } = Dimensions.get('window')


const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // height: 667,
    // width: 375
  },
  logo: {
    width: width * 0.7,
    height: width * 0.7
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    height: '10%',
    justifyContent: "center",
    alignItems: 'center'
  },
  SelectText: {
    fontSize: 27,
    fontFamily: 'Lato',
    // marginTop: 64
  },
  buttons: {
    height: 200,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '5%'
  },
  buttonContainer: {
    width: '100%',
    height: 50,
    // marginBottom: 18,
    borderRadius: 4,
    // fontFamily:  'ArchivoNarrow',
    backgroundColor: 'black',
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: 'ArchivoNarrow',
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
  },
  needHelp: {
    flexDirection: "row",
    width: 375,
    height: "7.9%",
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

