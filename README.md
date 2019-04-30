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