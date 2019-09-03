# react-native-welcome

## Getting started

`$ npm install react-native-welcome --save`

### Mostly automatic installation

`$ react-native link react-native-welcome`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-welcome` and add `Welcome.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libWelcome.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.reactlibrary.WelcomePackage;` to the imports at the top of the file
  - Add `new WelcomePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-welcome'
  	project(':react-native-welcome').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-welcome/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-welcome')
  	```


## Usage
```javascript
import Welcome from 'react-native-welcome';

// TODO: What to do with the module?
Welcome;
```
