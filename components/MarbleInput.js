import React from 'react';
import { Alert, Keyboard, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';

export default class MarbleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: '',
      cost: '',
    }
  }
  handleChangeActivity = text => {
    this.setState({activity: text});
  }
  handleChangeCost = value => {
    this.setState({cost: value});
  }
  numbersOnly = string => {
    return /^\d+$/.test(string.toString()) ? true : false
  }
  handleSubmit = () => {
    const { onSubmit } = this.props;
    const { activity } = this.state;
    const { cost } = this.state;

    if(!this.numbersOnly(this.state.cost)) {
      Alert.alert('Please enter numbers for the value!')
    } else {
    if (!activity || !cost) return;
    onSubmit(activity, cost);
    this.setState({activity: ''});
    this.setState({cost: ''});
    Keyboard.dismiss();
    }
  }
  render() {
    const { activity } = this.state;
    const { cost } = this.state;
    return (
      <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        autoCorrect={false}
        clearButtonMode="always"
        placeholder="How did you reduce consumerism?"
        value={activity}
        onChangeText={this.handleChangeActivity}
      />
      <TextInput
        style={styles.valueInput}
        autoCorrect={false}
        clearButtonMode="always"
        keyboardType = 'numeric'
        placeholder="How much would it have cost?"
        value={cost.toString()}
        onChangeText={this.handleChangeCost}
        clearTextOnFocus={true}
        />
      <TouchableOpacity 
        style={styles.button}
        onPress={this.handleSubmit}
      >
     <Text style={styles.addText}>Add Marble</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    backgroundColor: 'powderblue',
    width: 100,
    padding: 10,
    marginTop: 10,
  },
  container: { 
    marginTop: 10,
    alignItems: 'center',
    marginLeft: 10,
  },
  text: {
    textAlign: 'center'
  },
  textInput: {
    height: 40,
    marginTop:15,
    backgroundColor: '#f2efed',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: 300,
  },
  valueInput: {
    height: 40,
    marginTop: 10,
    backgroundColor: '#f2efed',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: 300,
  },
  addText: {
    color: '#fff',
    alignSelf: 'center'
  }
})
