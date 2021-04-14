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
        <View style={styles.textView}>
      <Text style={styles.text}>{this.props.date}</Text>
      </View>
      <View style={styles.textView}>
      <Text style={styles.activity}>{this.props.activity}</Text>
      </View>
      <View style={styles.textView}>
      <Text style={styles.text}>£ {cost}</Text>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { 
    marginTop: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    textAlign: 'left',
    marginLeft: 10,
    marginRight: 10,
  },
  activity: {
    textTransform: 'capitalize'
  }
})
