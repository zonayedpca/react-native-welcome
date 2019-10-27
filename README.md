# react-native-welcome

[![Build Status](https://travis-ci.com/zonayedpca/react-native-welcome.svg?token=LXmMpgxtChnPA2Z3yHVr&branch=master)](https://travis-ci.com/zonayedpca/react-native-welcome)

Welcome your user with useful instructions. Check out these screenshots:

![Welcome Screen](https://user-images.githubusercontent.com/18544717/67630307-7787df00-f8ab-11e9-9eb8-812f668b082d.png) ![Middle Screen](https://user-images.githubusercontent.com/18544717/67630308-7787df00-f8ab-11e9-89ae-f9a9c9c56f61.png) ![Just Another Screen](https://user-images.githubusercontent.com/18544717/67630309-78207580-f8ab-11e9-9574-36f23c38024f.png) ![As many as you want](https://user-images.githubusercontent.com/18544717/67630382-b66a6480-f8ac-11e9-9162-f45116f384fe.png) ![Last Screen](https://user-images.githubusercontent.com/18544717/67630311-78b90c00-f8ab-11e9-9746-f5493e9e7b78.png)

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

- children: Pass the components as `children` to show them on the screen individually.

```javascript
<Text>Welcome!!!</Text>,
  <Text>Peace be upon you</Text>,
  <Text>Make something great</Text>,
  <Text>Pass your components as children to control this area</Text>,
  <Text>Once you are done, can skip it</Text>;
```

- `elementContainerStyle`: Defines the styling of the each componentes' container mentioned above. Defaults to:

```javascript
{{
	flex: 1,
  width: SCREEN_WIDTH,
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

- `prevArrow`: Defines the component for previous screen button. Can be anything.

- `nextArrow`: Defines the component for screen screen button. Can be anything.

- `doneIcon`: Defines the component for finished screen button. Can be anything.

- `dotColor`: Defines the color of the active dots in the nav. Defaults to `#fff`

- `dotBg`: Defines the color of the inactive dots in the nav. Defaults to `#000`
