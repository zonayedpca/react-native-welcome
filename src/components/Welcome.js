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
    const { elementContainer } = styles;
    const {
      children,
      bgColor,
      elementContainerStyle,
      barBgColor,
      barStyle,
      showIndicator,
      onDone,
      navStyle,
      prevArrow,
      nextArrow,
      doneIcon,
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
          {children.length ? (
            children.map((oneChildren, index) => (
              <View
                key={index}
                style={[elementContainer, elementContainerStyle]}
              >
                {oneChildren}
              </View>
            ))
          ) : (
            <View style={[elementContainer, elementContainerStyle]}>
              {children}
            </View>
          )}
        </ScrollView>
        <BottomNav
          handleOnPrev={this.scrollTo.bind(this, page - 1)}
          handleDotPress={this.scrollTo.bind(this, 0)}
          handleOnNext={this.scrollTo.bind(this, page + 1)}
          handleOnDone={onDone}
          childrens={children.length ? children : [children]}
          page={page}
          navStyle={navStyle}
          prevArrow={prevArrow}
          nextArrow={nextArrow}
          doneIcon={doneIcon}
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
  elementContainer: {
    flex: 1,
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
  children: [
    <Text>Welcome!!!</Text>,
    <Text>Peace be upon you</Text>,
    <Text>Make something great</Text>,
    <Text>Pass your elements as children to control this area</Text>,
    <Text>Once you are done, can skip it</Text>
  ],
  elementContainerStyle: {
    alignItems: "center",
    justifyContent: "center"
  },
  barBgColor: "#eee",
  barStyle: "dark-content",
  showIndicator: false
};

export default Welcome;
