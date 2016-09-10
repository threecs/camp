/**
 * Form Exercise (SOLUTION)
 **/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  // Notice these imports:
  TextInput,
  TouchableOpacity

} from 'react-native';

class form extends Component {

  // We make a constructor to initialize our states.
  constructor() {
    super();
    this.state = {
      message: '',
      revealed: false,
      inputText: ''
    }
  }

  // This will set our message to the input text
  // and then change input text to a blank string.
  _setMessage() {
    this.setState({
      message: this.state.inputText,
      inputText: ''
    })
  }

  // This will toggle the display of our message box.
  _toggleDisplay() {
    var revealed = this.state.revealed;
    this.setState({
      // The bang returns the negative of revealed.
      // So if revealed is true, it becomes false, 
      // and if it's false, it becomes true.
      revealed: !revealed 
    })
  }

  // Our render function.
  render() {
    return (
      // Container
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>State Changer!</Text>
        </View>

        {/* Our TextInput container. 
          * Notice how whenever the text changes, 
          * we change the inputText state, while the value of the box
          * always correlates with that state. This way, 
          * the text in the box and the inputText state always match.
          */}

        <View style={styles.i_container}>
          <TextInput 
            style={styles.textInput} 
            placeholder='Enter Text Here'
            onChangeText={(text) => this.setState({inputText: text})}
            value={this.state.inputText} 
          />

          {/* The setter button recieves the _setMessage function. 
            * Notice how we need to bind 'this', so that the render function
            * can access the state of its component. 
            */}
          <TouchableOpacity style={styles.setter} onPress={this._setMessage.bind(this)}>
            <Text style={styles.setterText}>Submit</Text>
          </TouchableOpacity>
        </View>

        {/* The Message Container */}
        <View style={styles.m_container}>

          {/* The Revealer Button.
            * Notice how it receieves the _toggleDisplay function. 
            * Whenever the user presses the button, 
            * the 'revealed' state changes its bool value.
            */}
          <TouchableOpacity 
            style={styles.revealer} 
            onPress={this._toggleDisplay.bind(this)}
          >
            {/* If the revealed state is false, say 'Reveal the Message!' */}
            {!this.state.revealed && (
              <Text style={styles.revealerText}>Reveal the Message!</Text>
            )}
            {/* If the revealed state is true, say 'Hide the Message!' */}
            {this.state.revealed && (
              <Text style={styles.revealerText}>Hide the Message!</Text>
            )}
          </TouchableOpacity>

          {/* The Message Subcontainer (holds the actual message) */}

          {/* Notice how we only show this if the revealed state is true. */}
          {this.state.revealed && 
            (
            <View style={styles.m_subContainer}>
              <Text style={styles.m_text}>{this.state.message}</Text>
            </View>
            )
          }
        </View>

        {/*Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Copyright &copy;2016</Text>
        </View>
      </View>
    );
  }
}

// Our stylesheet
const styles = StyleSheet.create({
  
  // Our primary container
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF'
  },
  
  // Our header
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'crimson'
  },
  
  // Our header text
  headerText: {
    fontSize: 36,
    color: 'white'
  },
  
  // Our input container
  i_container: {
    flex: 4,
    margin: 10,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'crimson'
  },
  
  // Our textInput
  textInput: {
    marginLeft:10,
    marginRight:10,
    height: 40,
    width: 300,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2e2e2'
  },

  // Our setter button
  setter: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5
  },
  
  // The text of our setter button
  setterText:{
    fontSize: 16,
    color: 'white'
  },
  
  // Our message container
  m_container: {
    flex: 1,
    margin: 10,
    backgroundColor: 'crimson'
  },
  
  // Our message revealer button
  revealer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // The text of our message revealer button
  revealerText: {
    color: 'white',
    padding: 3,
    fontWeight: '600'
  },
  
  // Our message sub-container (which houses the actual message)
  m_subContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  // The text of the message
  m_text: {
    color: 'white',
    fontSize: 20
  },
  
  // Our footer
  footer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'crimson'
  },

  // The text in our footer
  footerText: {
    color: 'white'
  }
});

AppRegistry.registerComponent('form', () => form);
