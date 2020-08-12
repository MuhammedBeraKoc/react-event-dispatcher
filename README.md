<div align="center">
	<br>
        <img src="./header.svg" width="800" height="320">
	<br>
</div>

# [Live Demo](https://codesandbox.io/s/crazy-mahavira-miooz?file=/package.json)

## What's New?
Version | Features
------------ | -------------
1.7.2 | - First stable version ✔ <br> - Changed babel packages to @babel<br> - Renamed the main class as EventDispatcher<br> - ```emit``` method replaced by ```dispatch```<br> - Implemented unit tests for current methods via [Jest](https://jestjs.io/)<br> - Added a live demo to the CodeSandbox
1.7.4 | - ```KeyNotFoundError``` error added to the ```EventDispatcher```<br> - ```deleteKey``` method added to the library

<br>
## What this library offers?
- **Minimal**: It is a tiny yet crucial library for creating React apps in a much more faster and safer way.
- **Pure Abstraction**: It is so abstract that it doesn't even depend on react module. That means you can use it in any script too.
- **Fully Documented**: It is well-documented and contains type notations with [Flow](https://flow.org/).

## How to install? 🚀
Since the package is in npm you can use command below to add it to your project packages:

``` bash
npm i react-event-dispatcher
```

## How to use? 📦
In your React file you have to import it in ES6 syntax:

``` js
import EventEmitter from 'react-event-dispatcher'
```

Now you have full access to the library. Cheers! Let's try it with a basic example:
``` js
const eventToDispatch = () => console.log('It really works 👌')
EventEmitter.emit('RandomComponent', eventToDispatch)
EventEmitter.triggerOne('RandomComponent')
// You should see 'It really works 👌' on your console.
```

## Motivation and Architecture
### Motivation
I have been working on quite a lot in React lately. And one of the proplems I had encountered a lot is event propagation between miscellaneous components. At some point it had been so cumbersome that I have left some of the projects that I have been dedicated for. So I wrote this minimal yet efficient library for React.

### Architecture
In its core the library uses a singleton Proxy pattern to achieve most of its work. The basic mechanism of library is given below:

<img src="event-emitter-architecture-schema.png">

</br></br>

## API 🗄️
### ***dispatch***(key: *string*, $functionSet: *Function[]*): *void*
Dispatches the given function set to the event map(__$)

### ***getOne***(key: *string*, index: *number*): *Function*
Gets the function with the given key and index. Default index value is 0. When it fails to find the function (either key is absent or index is larger than the function set) it returns a function which throws an error and prints the error to the console.

### ***getAll***(key: *string*): *Function[]*
Gets the function set with the given key. It behaves the same as getOne when an error occurs (when key is not found in map).

### ***triggerOne***(key: *string*, index: *number*, ...args: *any[]*): *any*
Nearly the same of getOne. The only difference is it runs the function instead of returning it. It takes a extra argument as args which parameters to be injected in the target function. Returns the return value of the function.

### ***triggerAll***(key: *string*, argsSet: *any[][]*): *any[]*
Same as triggerOne. However instead of running one function it runs a function set with the given argument set. Returns the value set of run functions.

### ***deleteKey***(key: *string*): *void*
Deletes the given key from key map. Only recommended to be used in ```componentWillUnmount```.

### ***clear***(): *void*
Clears the event map __$.