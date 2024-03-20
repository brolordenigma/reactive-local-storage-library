class ReactiveLocalStorage {
  constructor() {
    this.subscribers = new Map();
  }

  // Subscribe to changes in a specific key
  subscribe(key, callback) {
    if (!this.subscribers.has(key)) {
      this.subscribers.set(key, new Set());
    }
    this.subscribers.get(key).add(callback);

    // Call the callback initially with the current value
    callback(this.get(key));
  }

  // Unsubscribe a previously subscribed callback
  unsubscribe(key, callback) {
    if (this.subscribers.has(key)) {
      this.subscribers.get(key).delete(callback);
    }
  }

  // Get item from local storage and parse it
  get(key) {
    const value = localStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }

  // Set item in local storage and notify subscribers
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    if (this.subscribers.has(key)) {
      this.subscribers.get(key).forEach(callback => callback(value));
    }
  }
}

const instance = new ReactiveLocalStorage();
export default instance;
