import React, { Component, createRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  StatusBar,
  Image,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const welcomeMessages = [
  {
    text: 'Grettings From Welcome'
  }, {
    text: 'Introduce Your App'
  }, {
    text: 'Slide to left and right'
  }, {
    text: 'Can you tell me how many pages still left?'
  }, {
    text: 'Once you are done, can skip it'
  }
]

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    }
  }

  refToScroll = createRef();

  scrollTo = page => {
    this.setState({page});
    this.refToScroll.current.getScrollResponder().scrollResponderScrollTo({
      x: page * SCREEN_WIDTH,
      y: 0,
      animated: true
    });
  };

  onMomentumScrollEnd = event => {
    const page = Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH);
    this.setState({ page });
  }

  renderScreen = () => {
    const {container, textContainer, textStyle, btnStyle, btnTextStyle} = styles;
    const {page} = this.state;

    return (
      <View>
        <StatusBar backgroundColor="#111a28" barStyle="light-content" />
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.onMomentumScrollEnd}
          ref={this.refToScroll}
          indicatorStyle="white"
          showsHorizontalScrollIndicator={false}
        >
          {welcomeMessages.map((welcomeMessage, index) => (
            <View key={index} style={textContainer}>
              {/**<>
              {page === 0 && <Image style={{ height: 120, width: 120, marginBottom: 5 }} source={require('../assets/welcome/logo.png')} />}
              {page === 1 && <Image style={{ height: 120, width: 120, marginBottom: 5 }} source={require('../assets/welcome/prayer.png')} />}
              {page === 2 && <Image style={{ height: 120, width: 120, marginBottom: 5 }} source={require('../assets/welcome/fast.png')} />}
              {page === 3 && <Image style={{ height: 120, width: 120, marginBottom: 5 }} source={require('../assets/welcome/zikr.png')} />}
              {page === 4 && <Image style={{ height: 120, width: 120, marginBottom: 5 }} source={require('../assets/welcome/time.png')} />}
              </>**/}
              <Text style={textStyle}>{welcomeMessage.text}</Text>
              {(index === (welcomeMessages.length - 1)) &&
              <View>
                <View style={{ backgroundColor: '#1d283a', borderRadius: 40, borderWidth: 1, marginBottom: 25, paddingLeft: 5 }}>
                  <Text>Put Anything Here!</Text>
                </View>
                <TouchableHighlight
                  onPress={() => { console.log('do something') }}
                  style={btnStyle}
                >
                  <Text style={btnTextStyle}>Slightly different screen</Text>
                </TouchableHighlight>
              </View>}
            </View>
          ))}
        </ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, borderTopWidth: 2, borderColor: '#1d283a' }}>
          <View style={{ width: 30 }}>
            {page ? <TouchableOpacity onPress={this.scrollTo.bind(this, page - 1)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
              <Text>⬅</Text>
            </TouchableOpacity> : <View></View>}
          </View>
          <View style={{ flexDirection: 'row' }}>
          {welcomeMessages.map((message, index) =>
            <TouchableWithoutFeedback key={index} onPress={this.scrollTo.bind(this, index)}>
              <View style={[{ height: 12, width: 12, borderWidth: 0, marginLeft: 2, marginRight: 2, borderRadius: 40 }, { backgroundColor: page !== index ? '#1d283a': '#00cf5d' }]}>
                <></>
              </View>
            </TouchableWithoutFeedback>
          )}
          </View>
          <View style={{ width: 30 }}>
            {page < (welcomeMessages.length - 1) ? <TouchableOpacity onPress={this.scrollTo.bind(this, page + 1)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
              <Text>➡</Text>
            </TouchableOpacity> : <TouchableOpacity onPress={() => { console.log('Action once done') }} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
              <Text>▶</Text>
            </TouchableOpacity>}
          </View>
        </View>
      </View>
    )
  }

  render() {
    // const { options } = this.props;
    const { container } = styles;
    return (
      <View style={container}>
        {this.renderScreen()}
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111a28'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  textStyle: {
    padding: 15,
    textAlign: 'center',
    fontSize: 26,
    color: '#fff'
  },
  btnStyle: {
    paddingRight: 25,
    paddingLeft: 25,
    borderRadius: 40,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#00cf5d'
  },
  btnTextStyle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
}

export default Welcome;
