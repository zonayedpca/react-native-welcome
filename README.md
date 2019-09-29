# react-native-welcome

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

### Usage

It has a default starter appearance. But you can always modify it as much as you want by utilizing these props:

- `bgColor`: Defines the color of entire background. Default is set to `#111a29`

- `texts`: Defines the text you want to show on the screen. Each text gets one screen. Defaults to:

```javascript
{
  [
    "Hello One",
    "Hello Two",
    "Hello Three",
    "Hello Four",
    "Hello Five",
    "Hello Six"
  ];
}
```

- `textStyle`: Defines the styling of the each text mentioned above. Defaults to:

```javascript
{{
	color: '#fff',
	fontSize: 26,
}}
```

- `barBgColor`: The background color of the StatusBar. Defaults to `#1d283a`

- `barStyle`: The style of the StatusBar content. Defaults to `light-content`. Also can be `dark-content`(React native defaults)

- `showIndicator`: Show indicators for the each screens. Defaults to `false`, can be `true`

- `onDone`: is invoked when the user goes at the last screen and choose to finish the welcome screens

- `navStyle`: Defines the styling for the nav for the screens. Defaults to:

```javascript
{{
	backgroundColor: '#1d283a',
	padding: 25,
}}
```

- `prevText`: Defines the text for previous screen button. Defaults to `<`. Can be any text(More control is under development)

- `nextText`: Defines the text for screen screen button. Defaults to `>`. Can be any text(More control is under development)

- `doneText`: Defines the text for finished screen button. Defaults to `O`. Can be any text(More control is under development)

- `dotColor`: Defines the color of the active dots in the nav. Defaults to `#03ce59`

- `dotBg`: Defines the color of the inactive dots in the nav. Defaults to `#111a29`
