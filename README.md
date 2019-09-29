# react-native-welcome
[![Build Status](https://travis-ci.com/zonayedpca/react-native-welcome.svg?token=LXmMpgxtChnPA2Z3yHVr&branch=master)](https://travis-ci.com/zonayedpca/react-native-welcome)

Welcome your user with useful instructions. Check out these screenshots:

![Welcome Screen](https://user-images.githubusercontent.com/18544717/65834095-1b09c200-e2f5-11e9-97cf-a85a24776090.png) ![Middle Screen](https://user-images.githubusercontent.com/18544717/65834099-23fa9380-e2f5-11e9-88bd-cdff3cdcaa6d.png) ![Last Screen](https://user-images.githubusercontent.com/18544717/65834101-2826b100-e2f5-11e9-9a9b-f4961f287b87.png)


## Getting started

Simply add it as a dependency:

`$ npm install --save react-native-welcome`

Or if you're using yarn:

`$ yarn add react-native-welcome`

That's it! You're ready to go!

## Usage

Simply import it:

```javascript
import Welcome from "react-native-welcome";
```

And then Use it in a screen, you must need to set your screen so that it can take entire screen. It will take as much as it gets:

```javascript
<Welcome />
```

### Props

It has a default starter appearance. But you can always modify it as much as you want by utilizing these props:

- `bgColor`: Defines the color of entire background. Default is set to `#fff`

- `texts`: Defines the text you want to show on the screen. Each text gets one screen. Defaults to:

```javascript
{
  [
    "Welcome!!!",
    "Peace be upon you",
    "Make something great",
    "Pass array of text as texts props to configure this messages",
    "Once you are done, can skip it"
  ];
}
```

- `textStyle`: Defines the styling of the each text mentioned above. Defaults to:

```javascript
{{
	color: "#333",
	fontSize: 18,
	textAlign: "center"
}}
```

- `barBgColor`: The background color of the StatusBar. Defaults to `#eee`

- `barStyle`: The style of the StatusBar content. Defaults to `dark-content`. Also can be `light-content`(React native defaults)

- `showIndicator`: Show indicators for the each screens. Defaults to `false`, can be `true`

- `onDone`: is invoked when the user goes at the last screen and choose to finish the welcome screens

- `navStyle`: Defines the styling for the nav for the screens. Defaults to:

```javascript
{{
    padding: 20,
    borderTopWidth: 2,
    backgroundColor: "#eee",
    borderColor: "#333"
}}
```

- `prevText`: Defines the text for previous screen button. Defaults to `Prev`. Can be any text(More control is under development)

- `nextText`: Defines the text for screen screen button. Defaults to `Next`. Can be any text(More control is under development)

- `doneText`: Defines the text for finished screen button. Defaults to `Done`. Can be any text(More control is under development)

- `dotColor`: Defines the color of the active dots in the nav. Defaults to `#fff`

- `dotBg`: Defines the color of the inactive dots in the nav. Defaults to `#000`
