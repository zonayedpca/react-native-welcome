/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Welcome from 'react-native-welcome';

const App = () => {
  const {textStyle} = styles;
  const nextArrow = <Text>Next</Text>;
  const prevArrow = <Text>Prev</Text>;
  const doneIcon = <Text>Done</Text>;
  return (
    <Fragment>
      <Welcome
        bgColor="#111a29"
        barBgColor="#1d283a"
        barStyle="light-content"
        showIndicator={false}
        onDone={() => console.log('Ja Hoiche')}
        navStyle={{
          backgroundColor: '#1d283a',
          padding: 25,
        }}
        prevArrow={prevArrow}
        nextArrow={nextArrow}
        doneIcon={doneIcon}
        dotColor="#03ce59"
        dotBg="#111a29">
        <View>
          <Text style={textStyle}>Hello One</Text>
        </View>
        <View>
          <Text style={textStyle}>Hello Two</Text>
        </View>
        <View>
          <Text style={textStyle}>Hello Three</Text>
        </View>
        <View>
          <Text style={textStyle}>Hello Four</Text>
        </View>
        <View>
          <Text style={textStyle}>Hello Five</Text>
        </View>
        <View>
          <Text style={textStyle}>Hello Six</Text>
        </View>
      </Welcome>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: '#fff',
    fontSize: 26,
  },
});

export default App;
