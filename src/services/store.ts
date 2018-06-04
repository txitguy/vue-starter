import { Dictionary } from 'vue-router/types/router';
import Exception from 'Src/exception';

export default class Store {
  private static _stores: Dictionary<Store> = {};
  private _store: Storage;

  /**
   * Get a singleton for the specified store
   * @param store store to use for storage
   * @returns {Store}
   */
  public static for(store: string): Store {
    if (typeof this._stores[store] === 'undefined') {
      this._stores[store] = new Store(store);
    }
    return this._stores[store];
  }

  /**
   * Initialize the class with the specified store
   * @param store The stor
   * @throws {Error}
   */
  constructor(store: string) {
    switch (store.toLocaleLowerCase()) {
      case 'session':
        this._store = window.sessionStorage;
        break;
      case 'cookie':
        this._store = window.localStorage;
        break;
      default:
        throw new Exception('Invalid storage type provided:' + store);
    }
  }

  /**
   * Get an item from the store
   * @param key
   * @returns {any}
   */
  get(key: string): any {
    let item = this._store.getItem(key);
    if (item && this._isJSON(item)) {
      item = JSON.parse(item);
    }
    return item;
  }

  /**
   * Save an item in the store
   * @param key
   * @param value
   */
  set(key: string, value: any) {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    this._store.setItem(key, value);
  }

  /**
   * Delete an item from the store
   * @param key
   * @returns {Boolean}
   */
  remove(key: string): boolean {
    let item = this._store.getItem(key);
    if (item) {
      this._store.removeItem(key);
      return true
    } else {
      return false
    }
  }

  /**
   * Clears all items from the store
   */
  clear() {
    this._store.clear();
  }

  /**
   * Get the length of the store
   */
  getLength() {
    return this._store.length;
  }

  /**
   * Check if an item is json or not
   * @param item
   * @returns {Boolean}
   */
  _isJSON(item: string): Boolean {
    return /{.*}/.test(item);
  }
}
