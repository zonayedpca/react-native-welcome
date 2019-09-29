import React, { Component, createRef } from "react";
import { View, Text, ScrollView, Dimensions, StatusBar } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

import BottomNav from "./BottomNav";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
  }

  refToScroll = createRef();

  scrollTo = page => {
    this.setState({ page });
    this.refToScroll.current.getScrollResponder().scrollResponderScrollTo({
      x: page * SCREEN_WIDTH,
      y: 0,
      animated: true
    });
  };

  onMomentumScrollEnd = event => {
    const page = Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH);
    this.setState({ page });
  };

  renderScreen = () => {
    const { textContainer, textDefaultStyle } = styles;
    const {
      bgColor,
      texts,
      textStyle,
      barBgColor,
      barStyle,
      showIndicator,
      onDone,
      navStyle,
      prevText,
      nextText,
      doneText,
      dotColor,
      dotBg
    } = this.props;
    const { page } = this.state;
    return (
      <View style={{ backgroundColor: bgColor }}>
        <StatusBar backgroundColor={barBgColor} barStyle={barStyle} />
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.onMomentumScrollEnd}
          ref={this.refToScroll}
          showsHorizontalScrollIndicator={showIndicator}
        >
          {texts.map((text, index) => (
            <View key={index} style={textContainer}>
              <Text style={[textDefaultStyle, textStyle]}>{text}</Text>
            </View>
          ))}
        </ScrollView>
        <BottomNav
          handleOnPrev={this.scrollTo.bind(this, page - 1)}
          handleDotPress={this.scrollTo.bind(this, 0)}
          handleOnNext={this.scrollTo.bind(this, page + 1)}
          handleOnDone={onDone}
          texts={texts}
          page={page}
          navStyle={navStyle}
          prevText={prevText}
          nextText={nextText}
          doneText={doneText}
          dotColor={dotColor}
          dotBg={dotBg}
        />
      </View>
    );
  };

  render() {
    const { container } = styles;
    return <View style={container}>{this.renderScreen()}</View>;
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH
  },
  textDefaultStyle: {
    textAlign: "center"
  },
  btnStyle: {
    paddingRight: 25,
    paddingLeft: 25,
    borderRadius: 40,
    paddingTop: 10,
    paddingBottom: 10
  },
  btnTextStyle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
    textTransform: "uppercase"
  }
};

Welcome.defaultProps = {
  bgColor: "#fff",
  texts: [
    "Welcome!!!",
    "Peace be upon you",
    "Make something great",
    "Pass array of text as texts props to configure this messages",
    "Once you are done, can skip it"
  ],
  textStyle: {
    color: "#333",
    fontSize: 18,
    textAlign: "center"
  },
  barBgColor: "#eee",
  barStyle: "dark-content",
  showIndicator: false
};

export default Welcome;
