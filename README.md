# Reactive Local Storage Library

A JavaScript library for reactive interactions with local storage, making it easier to synchronize local storage data with your application's state.

## Features

- **Reactive Bindings**: Automatically updates the application state when local storage data changes.
- **Simplified API**: Easy get and set operations with local storage, including automatic JSON parsing and stringification.
- **Subscription Model**: Subscribe to changes in specific local storage keys.

## Installation

Copy the `index.js` file into your project, or include it in your build process.

## Usage

```javascript
import reactiveLocalStorage from './path/to/reactive-local-storage-library';

// Subscribe to changes on a specific key
reactiveLocalStorage.subscribe('myKey', newValue => {
    console.log('Value for myKey changed:', newValue);
});

// Update the value, triggering the subscription callback
reactiveLocalStorage.set('myKey', { some: 'data' });

// Get the current value
const currentValue = reactiveLocalStorage.get('myKey');
console.log(currentValue);

// Unsubscribe from changes
reactiveLocalStorage.unsubscribe('myKey', callback);
```
