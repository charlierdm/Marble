import React from 'react';
import { FlatList, List, ListItem, StyleSheet, Text, TextInput, View } from 'react-native';

export default class Marble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const cost = (Math.round(this.props.cost * 100) / 100).toFixed(2)
    return (
      <View style={styles.container}>
      <Text>{this.props.date}                           {this.props.activity}                            £ {cost}</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { 
    marginTop: 5,
    alignItems: 'center',
  }
})
