import React from 'react';
import { Keyboard, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';

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
  handleSubmit = () => {
    const { onSubmit } = this.props;
    const { activity } = this.state;
    const { cost } = this.state;

    if (!activity || !cost) return;

    onSubmit(activity, cost);
    this.setState({activity: ''});
    this.setState({cost: ''});
    Keyboard.dismiss();
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
     <Text style={styles.text}>Add Marble</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    backgroundColor: '#adebeb',
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
    backgroundColor: '#fff',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: 300,
  },
  valueInput: {
    height: 40,
    marginTop: 10,
    backgroundColor: '#fff',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: 300,
  }
})
