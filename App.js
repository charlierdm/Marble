import React from 'react';
import { FlatList, KeyboardAvoidingView, Image, StyleSheet, Text, View, TextInput } from 'react-native';
import MarbleInput from './components/MarbleInput'
import Marble from './components/Marble'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jarValue: 0,
      activity: '',
      marbles: []
    }
  }
  getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return date + '/' + month + '/' + year;
  }
  handleAddMarble = (activity, cost) => {
    const costInt = parseInt(cost);
    const date = this.getCurrentDate();
    this.setState({jarValue: this.state.jarValue + costInt})
    this.setState({activity: activity});
    this.setState({ marbles: [...this.state.marbles, {date: date, activity: activity, cost: costInt}] })
  }
  render() {
    const { marbles } = this.state;
    let recentHeading = ""
    marbles.length > 0 ? recentHeading = "Recent Marbles" : recentHeading = ""
    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior="height">
      <View style={styles.container}>
        <Text style={styles.title}>Marble</Text>
        <Image style={styles.jar} source={require('./assets/jar.gif')}/>
        <Text style={styles.jarValue}>Jar Value: £ {this.state.jarValue}</Text>
        <MarbleInput onSubmit={this.handleAddMarble}/>
        <Text style={styles.recentMarblesHeading}>{recentHeading}</Text>
        
        <FlatList
        data={marbles}
        renderItem={({item}) => <Marble date = {item.date} activity={item.activity} cost={item.cost} />}
        keyExtractor={(item, index) => {
          return  index.toString();
         }}
        />

      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6fffa',
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    marginLeft: 10,
  },
  jar: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: 180,
    position: 'absolute', top: -100,
  },
  jarValue: {
    marginTop: 260,
    textAlign: 'center'
  },
  recentMarblesHeading: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
  }
});
