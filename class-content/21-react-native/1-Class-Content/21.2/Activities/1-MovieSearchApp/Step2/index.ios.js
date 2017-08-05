// Key Differences:
// In the SearchResults component we are making an API call as soon as the app loads.

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions
} from 'react-native';

import SearchResults from './SearchResults.js';

class MovieSearchApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        <Text style={{color: 'white'}}>OMDB Movie Search</Text>
                    </Text>
                </View>
                <View>
                    <TextInput 
                        autoFocus={true} 
                        style={styles.input}
                        placeholderTextColor="white" 
                        placeholder="Search" 
                    />
                    <SearchResults />
                </View>
                <View style={styles.footer}>
                </View>
                <Image source={require('./popcorn.png')} style={styles.icon}></Image>
            </View>
        );
    }
}

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
  },
  header: {
    height: 60,
    backgroundColor: 'rgba(76,217,175,1)',
    marginBottom: 5,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 12,
    fontWeight: 'bold'
  },
  input: {
    color: 'white',
    margin: 10,
    padding: 10,
    backgroundColor: 'rgba(76,217,175,1)',
    fontSize: 18,
    borderRadius: 10
  },
  footer: {
    position: 'absolute', 
    bottom: 10,
    height: 50,
    width: screenWidth,
    backgroundColor: 'rgba(76,217,175,1)'
  },
  icon: {
    width:90,
    height: 90,
    position: 'absolute',
    left: (screenWidth/2 - 45),
    bottom: 5,
  }
});

AppRegistry.registerComponent('MovieSearchApp', () => MovieSearchApp);