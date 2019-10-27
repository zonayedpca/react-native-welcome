# react-native-welcome

[![Build Status](https://travis-ci.com/zonayedpca/react-native-welcome.svg?token=LXmMpgxtChnPA2Z3yHVr&branch=master)](https://travis-ci.com/zonayedpca/react-native-welcome)

Welcome your user with useful instructions. Check out these screenshots:

![Welcome Screen](https://user-images.githubusercontent.com/18544717/67630581-01d24200-f8b0-11e9-89ca-5cc5668ed737.png) ![Middle Screen](https://user-images.githubusercontent.com/18544717/67630583-01d24200-f8b0-11e9-8cfc-a816e27bb0e1.png) ![Just Another Screen](https://user-images.githubusercontent.com/18544717/67630584-01d24200-f8b0-11e9-99c4-a40bd731807d.png) ![As many as you want](https://user-images.githubusercontent.com/18544717/67630585-026ad880-f8b0-11e9-9781-e4f14d69d21d.png) ![Last Screen](https://user-images.githubusercontent.com/18544717/67630586-026ad880-f8b0-11e9-93f7-cdda741450a4.png)

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
<Welcome>
  <Text>Welcome!!!</Text>,<Text>Peace be upon you</Text>,
  <Text>Make something great</Text>,
  <Text>Pass your components as children to control this area</Text>,
  <Text>Once you are done, can skip it</Text>;
</Welcome>
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
