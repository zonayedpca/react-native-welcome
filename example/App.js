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
  return (
    <Fragment>
      <Welcome
        bgColor="#111a29"
        texts={[
          'Hello One',
          'Hello Two',
          'Hello Three',
          'Hello Four',
          'Hello Five',
          'Hello Six',
        ]}
        textStyle={{
          color: '#fff',
          fontSize: 26,
        }}
        barBgColor="#1d283a"
        barStyle="light-content"
        showIndicator={false}
        onDone={() => console.log('Ja Hoiche')}
        navStyle={{
          backgroundColor: '#1d283a',
          padding: 25,
        }}
        prevText="<"
        nextText=">"
        doneText="O"
        dotColor="#03ce59"
        dotBg="#111a29"
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
