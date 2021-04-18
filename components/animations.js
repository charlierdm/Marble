import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default class JarAnimation extends React.Component {
	componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
   this.animation.play(30, 120);
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <View>
        <View>
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}

            source={require('../assets/animations/add-marble-gold.json')}
            // OR find more Lottie files @ https://lottiefiles.com/featured
            // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
          />
           
          </View>
        </View>
      
    );
  }
}

