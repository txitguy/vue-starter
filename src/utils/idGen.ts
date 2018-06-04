import { Dictionary } from 'vue-router/types/router';

export default class IdGen {
  private static _components: Dictionary<IdGen> = {};
  private _component: string;
  private _ids: Dictionary<string> = {};

  /**
   * Returns a new instance of IdGen
   * @param component
   * @returns {IdGen} new IdGen instance
   */
  public static for(component: string): IdGen {
    if (typeof this._components[component] === 'undefined') {
      this._components[component] = new IdGen(component);
    }
    return this._components[component];
  }

  constructor(component: string) {
    this._component = component;
  }

  /**
   * Get a generated Id for a key. Create one if it doesn't exist.
   * @param {string} key The parameter to create an ID for
   * @returns {string} Randomly generated ID
   */
  public getId(key: string): string {
    const id = `${this._component}_${key}`;
    if (typeof this._ids[id] === 'undefined') {
      this._ids[id] = `${key}_${this._getRandom()}`;
    }
    return this._ids[id];
  }

  /**
   * Get a random number for IDs
   * @returns {number} random number
   */
  public _getRandom(): number {
    const min = 100000;
    const max = 999999;

    return Math.floor(Math.random() * (max - min)) + min;
  }
}
