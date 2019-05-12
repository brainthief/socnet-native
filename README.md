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

# Flexbox :
* flex-container - parent container
* flex-element - child block

**alignItems:'center'** - horizontal alignment in middle (in row direction)

**alignItems:'flex-start'** - left

**alignItems:'flex-end'** - right


**justifyContent:'center'** - vertical alignment in middle

**justifyContent:'flex-start'** - top

**justifyContent:'flex-end'** - bottom

**justifyContent:'space-between'** - to corner and middle

**flexDirection: 'row'** - change axis to row

**flexDirection: 'column'**

## **Middle and center:**
```
flex:1,
flexDirection: 'column',
justifyContent:'center',
alignItems:'center'
```


## **Shadow bottom**

```
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.2,
elevation: 2,
position: 'relative'
```

8. Enable Debug JS Remotely

* In Android VD press Ctrl+M

* Select Start Remote JS Debugging

* Now can use debugger in Chrome

* Can use console.log 

9. Fonts available

[Fonts](https://github.com/react-native-training/react-native-fonts)

9. Lives cycles

![LVC](https://github.com/brainthief/socnet-native/blob/master/forgit/livecycles.jpg)

## Mount:
* [1] **constructor()**. Frequently used for creating local state with object this.state and bind for methods. If need state and bind methods - you don't need constructor.
* [2] **static getDerivedStateFromProps()**. Runs before render() in mount and update component. Must return new sate or null. Not often using. 
* [3] **render()**. Is necessary in class component. Check **this.props** and **this.state**. Return one of: react-element, array or fragment, portal, sting and number, boolean or null.
* [4] **componentDidMount()**. Runs immediately after component mounted. Initialization for DOM must be there. Ideal for data from server. 

## Update

* static getDerivedStateFromProps()
* **shouldComponentUpdate()**. Runs after render was finished. 
* render()
* getSnapshotBeforeUpdate()
* componentDidUpdate()

## Unmount

* componentWilUnmount()

10. Class Component vs Functional Component

## Class Component

* have state
* can get data from server
* storage state and hold him like object
* wraps around one or few 'clever' or 'stupid' components


## Function Component

* don't have state
* cant get data from server
* get data only from props
* can use others 'stupid' components
* have styles

11. State

With constructor:

```
constructor(props){
  super(props)
  this.state = {
    title: 'text'
  }
}
```
Without state:
```
state = {
  title: 'text'
}
```

Use state:
```
...
render(){
  return(
    <View><Text>{this.state.title}</Text></View>
  )
}
```

Change state:
```
this.setState({title: 'text'})
```

12. State vs props

**State** - object, that created when was mounted component

**Props** - object, that come from parent component. Cant change props, but can change child component props.

## Common

* Just standard JS object.

* Can be changed.

* Is input data for component.

## Differences

* State - inside component

* Props - came from outside (parent) component

13. fetch

[fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

```
const url = 'http://www......'
componentDidMount = async() => {
  const response = await  fetch(url)
}
```

converting to json

```
const url = 'http://www......'
componentDidMount = async() => {
  const response = await  fetch(url)
  const data = await response.json()
  this.setState({ data })
}
```

14. try ... catch
 
[Try...catch mzl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

catch do job, only when get error

```
const url = 'http://www......'
componentDidMount = async() => {
  try {
    const response = await  fetch(url)
    const data = await response.json()
    this.setState({ data })
  } catch (e) {
    throw e
  }
}
```

15. Dimensions

* Work with screen dimensions

[DOCUMENTATION](https://facebook.github.io/react-native/docs/dimensions.html)

Example:
```
var {height, width} = Dimensions.get('window');
```

Example
```
...
import {Dimensions} from 'react-native'
...
const win = Dimensions.get('window')
export const h = win.height
export const w = win.width
```
Results in pixels

```
...
import {h, w} from  './constants'
...
console.log('h, w', h, w)
...
const styles = StyleSheet.create({
  hi: {
    ...
    width: w / 2.4
  }
})
```

16. Image:

[DOCUMENTATION](https://facebook.github.io/react-native/docs/image)

* attribute source for img url

```
<Image styles={cover} source={{uri}} />
```

# Creating APK

[How to create APK](https://facebook.github.io/react-native/docs/signed-apk-android.html#adding-signing-config-to-your-app-s-gradle-config)
[Android studio ADB](https://developer.android.com/studio/command-line/adb#Enabling)