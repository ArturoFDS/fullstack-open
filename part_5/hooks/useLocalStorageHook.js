class useLocalStorage {
  setLocalStorage(key, keyValue) {
    window.localStorage.setItem(key, JSON.stringify(keyValue));
  }

  getLocalStorage(key) {
    return window.localStorage.getItem(key);
  }

  removeLocalStorage(key) {
    window.localStorage.removeItem(key);
  }
}

export default useLocalStorage;
