import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

const defaultIcon = icon => {
  const icons = {
    left: require("../assets/icon/left-arrow.png"),
    right: require("../assets/icon/right-arrow.png"),
    done: require("../assets/icon/done.png")
  };
  return (
    <View>
      <Image style={{ width: 15, height: 15 }} source={icons[icon]} />
    </View>
  );
};

const BottomNav = ({
  handleOnPrev,
  handleDotPress,
  handleOnNext,
  handleOnDone,
  childrens,
  page,
  navStyle,
  prevArrow,
  nextArrow,
  doneIcon,
  dotBg,
  dotColor,
  onDone
}) => {
  const { navDefaultStyle } = styles;
  return (
    <View style={[navDefaultStyle, navStyle]}>
      <View style={{ width: 30 }}>
        {page ? (
          <TouchableOpacity
            onPress={handleOnPrev}
            hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
          >
            {prevArrow}
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
      </View>
      <View style={{ flexDirection: "row" }}>
        {childrens.map((text, index) => (
          <TouchableWithoutFeedback key={index} onPress={handleDotPress}>
            <View
              style={[
                {
                  height: 12,
                  width: 12,
                  borderWidth: 0,
                  marginLeft: 2,
                  marginRight: 2,
                  borderRadius: 40
                },
                { backgroundColor: page !== index ? dotBg : dotColor }
              ]}
            >
              <></>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
      <View style={{ width: 30 }}>
        {page < childrens.length - 1 ? (
          <TouchableOpacity
            onPress={handleOnNext}
            hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
          >
            {nextArrow}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleOnDone}
            hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
          >
            {doneIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = {
  navDefaultStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
};

BottomNav.defaultProps = {
  navStyle: {
    padding: 20,
    borderTopWidth: 2,
    backgroundColor: "#eee",
    borderColor: "#333"
  },
  prevArrow: defaultIcon("left"),
  nextArrow: defaultIcon("right"),
  doneIcon: defaultIcon("done"),
  dotColor: "#fff",
  dotBg: "#000",
  handleOnDone: () => {
    console.log("Hide this thing on Done!");
  }
};

export default BottomNav;
