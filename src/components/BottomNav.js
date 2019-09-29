import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

const BottomNav = ({
  handleOnPrev,
  handleDotPress,
  handleOnNext,
  handleOnDone,
  texts,
  page,
  navStyle,
  prevText,
  nextText,
  doneText,
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
            <Text>{prevText}</Text>
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
      </View>
      <View style={{ flexDirection: "row" }}>
        {texts.map((text, index) => (
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
        {page < texts.length - 1 ? (
          <TouchableOpacity
            onPress={handleOnNext}
            hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
          >
            <Text>{nextText}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleOnDone}
            hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
          >
            <Text>{doneText}</Text>
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
  prevText: "Prev",
  nextText: "Next",
  doneText: "Done",
  dotColor: "#fff",
  dotBg: "#000",
  handleOnDone: () => {
    console.log("Hide this thing on Done!");
  }
};

export default BottomNav;
