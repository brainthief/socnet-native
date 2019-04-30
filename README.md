# socnet-native
socnet - for mobile devices

1. [React Native](https://facebook.github.io/react-native/docs/getting-started) 

Create project

```
react-native init AwesomeProject
```
Run project:

```
react-native run-android
```

2. Entry point:
index.js
```
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

Importing app name (will be showing below icon):
```
import {name as appName} from './app.json';
```

**app.json**
```
  "name": "socnetNative",
  "displayName": "socnetNative"
}
```

**AppRegistry**
It's entry point JS for all React Native App. 
Root component off App must be registered in **AppRegistry.registerComponent**, then system can load packages for app. After all jobs will be run **AppRegistry.runApplication**.

---------------------
["Enable Live Reload" in ADV android ](https://facebook.github.io/react-native/docs/debugging)

Ctrl+M

---------------------

3. Compare HTML and React Native tags

```
<div> - <View>
<p> - <Text>
<img> - <Image>
<button> - <Button>
```

4. MVC

* **View** - React-Native component
* **Controller** -  Live circles if react component, external libraries (Apollo, Redux, MobX, Flux...)
* **Models** - State, AsyncStorage, Server Database,  external libraries (Realm, MongoDB, Redux Presist...)

5. Styles

In React Native isn't CSS (no cascade).

Use styles:
```
<View style={styles.container}>Text</View>
```

Create styles:

```
const styles = StyleSheet.create({
 container: {
 },
 welcome: {

 }
})
```

In style used CamelCase.

**backgroundColor**

**fontSize**

**justifyContent**

**textAlign**

6. [Height and Width](https://facebook.github.io/react-native/docs/height-and-width)

Fixed Dimensions (pixels):

```
 <View>
  <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
  <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
  <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
 </View>
```

Flex Dimensions:
```
 <View style={{flex: 1}}>
  <View style={{flex: 1, backgroundColor: 'powderblue'}} />
  <View style={{flex: 2, backgroundColor: 'skyblue'}} />
  <View style={{flex: 3, backgroundColor: 'steelblue'}} />
 </View>
```
- parent - flex 1 - all screen
- child - 1/6 2/6 3/6

[React Native Styling Cheat Sheet](https://github.com/vhpoet/react-native-styling-cheat-sheet)

7. [Layout with Flexbox](https://facebook.github.io/react-native/docs/flexbox)

Flexbox :
* flex-container - parent container
* flex-element - child block

alignItems:'center' - horizontal alignment in middle (in row direction)
alignItems:'flex-start' - left
alignItems:'flex-end' - right

justifyContent:'center' - vertical alignment in middle
justifyContent:'flex-start' - top
justifyContent:'flex-end' - bottom


