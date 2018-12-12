/**
 * @author tanna
 * @format
 * @flow
 */
import { AsyncStorage } from 'react-native';

/**
 * clear all storage
 */
function clear() {
  return AsyncStorage.clear()
}

/**
 * get value by key
 * @param {*} key 
 * @param {*} defaultValue 
 * @returns JSON.parse
 */
function get(key, defaultValue = null) {
  return AsyncStorage.getItem(key).then(
    value => (value !== null ? JSON.parse(value) : defaultValue)
  )
}

/**
 * set value with key=?
 * @param {*} key 
 * @param {*} value 
 */
function set(key, value) {
  return AsyncStorage.setItem(key, JSON.stringify(value))
}

/**
 * remove value where key=?
 * @param {*} key 
 */
function remove(key) {
  return AsyncStorage.removeItem(key)
}

/**
 * get multi value where keys=...any
 * @param  {...any} keys 
 */
function multiGet(...keys) {
  return AsyncStorage.multiGet([...keys]).then(stores => {
    const data = {}
    stores.forEach((result, i, store) => {
      data[store[i][0]] = JSON.parse(store[i][1])
    })
    return data
  })
}

/**
 * remove mutil values
 * @param  {...any} keys 
 */
function multiRemove(...keys) {
  return AsyncStorage.multiRemove([...keys])
}

export default {
  clear,
  get,
  set,
  remove,
  multiGet,
  multiRemove,
}
