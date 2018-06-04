import 'reflect-metadata'
import Validation from 'Utils/validation'
import Vue from 'vue'
import Exception from 'Src/exception';
import { Dictionary } from 'vue-router/types/router';

export const propsMetadataKey = Symbol('props');

export interface IProperty {
  validators?: (string|Dictionary<any[]>)[]
}

/**
 * Define model property
 * @param {IProperty} info
 * @returns {Function}
 */
export function Prop(info?: IProperty): Function {
  return function(this: any, target: Object, key: string) {

    // If no props metadata added yet, create it
    if (!Reflect.hasMetadata(propsMetadataKey, target)) {
      Reflect.defineMetadata(propsMetadataKey, {}, target);
    }

    // Add prop to metadata
    let props: Dictionary<IProperty> = Reflect.getMetadata(propsMetadataKey, target);
    props[key] = info!;

    // Prop getter/setters
    var _val: any;
    return {
      set: function(val: any) {
        _val = val;
      },
      get: function() {

        // Trim whitespace from all strings
        if (typeof _val === 'string') {
          return _val.trim();
        }
        return _val;
      },
      enumerable: true,
      configurable: true
    }
  }
}

export class BaseModel {

  // Properties
  [index:string]: any;
  Component?: Vue;
  customValidatorError: string = '';

  /**
   *
   * @param Component
   */
  constructor(Component?: Vue) {
    this.Component = Component;
  }

  /**
   * Validate a model and populate the list of errors
   * @returns {boolean}
   */
  isValid(): boolean {

    // Lifecycle hook; prevalidate
    if (typeof this['preValidate'] === 'function') {
      this.preValidate();
    }

    let isValid: boolean = true;

    // Get a list of model properties and loop over them
    let props: Dictionary<IProperty> = $.extend(true, {}, Reflect.getMetadata(propsMetadataKey, this));
    for (let prop in props) {

      // Check if there are validators on the property
      if (props[prop].validators !== undefined) {
        let propValid = true;
        let propError: string = '';

        // Handle required fields
        let propRequired: boolean = (props[prop].validators!.indexOf('required') > -1);
        if (propRequired) {
          props[prop].validators!.splice(props[prop].validators!.indexOf('required'), 1);

          if (this[prop] == null || !this[prop]) {
            propValid = false;
            propError = 'This is a required field.';
          }
        } else if (this[prop] == null || !this[prop]) {
          continue;
        }

        // Loop over the validators
        if (propValid) {
          for (let validator of props[prop].validators!) {
            let pattern: string;
            let opts: any[] = [];
            let invalid: string;

            // handle complex validators
            if (typeof validator === 'object') {
              opts = validator[Object.keys(validator)[0]];
              validator = Object.keys(validator)[0];
            }

            if (Validation[validator]) {

              // Get the pattern and invalid message
              if (typeof Validation[validator].pattern === 'function') {
                pattern = (Validation[validator].pattern as Function)(...opts);
                invalid = (Validation[validator].invalid as Function)(...opts);
              } else {
                pattern = Validation[validator].pattern as string;
                invalid = Validation[validator].invalid as string;
              }

              // Test the property
              let rgx = new RegExp(pattern);
              if (!rgx.test(this[prop])) {
                propValid = false;
                propError = invalid;
                break;
              }
            } else {
              throw new Exception(`Property '${prop}' using an invalid validator '${validator}'`);
            }
          }
        }

        if (!propValid)
          isValid = false;

        // Set the UI
        let el: Vue | Element | Vue[] | Element[] | undefined = undefined;
        if (this.Component) {
          el = this.Component!.$refs[`Model.${prop}`];
        }
        if (el) {
          if (propValid) {
            $(el).siblings('.valid-feedback').text('Looks good!');
            $(el).addClass('is-valid');
            $(el).removeClass('is-invalid');
          } else {
            $(el).siblings('.invalid-feedback').text(propError);
            $(el).addClass('is-invalid');
            $(el).removeClass('is-valid');
          }
        }
      }
    }

    // Test the custom validator if it exists
    let cv = true;
    if (typeof this['customValidator'] === 'function') {
      cv = this['customValidator']();
    }

    // Lifecycle hook; postValidate
    if (typeof this['postValidate'] === 'function') {
      this.postValidate(isValid && cv);
    }

    return (isValid && cv);
  }

  /**
   * Validate a single model property
   * @param {string} prop
   * @returns {boolean}
   */
  validate(prop: string): boolean {
    let isValid = true;

    // Get the property list
    if (Reflect.hasMetadata(propsMetadataKey, this)) {
      let props: Dictionary<IProperty> = Reflect.getMetadata(propsMetadataKey, this);

      // Make sure the property and prop validators exist
      if (props[prop] !== undefined && props[prop].validators !== undefined) {

        // Handle required fields
        let propRequired: boolean = (props[prop].validators!.indexOf('required') > -1);
        if (propRequired) {
          props[prop].validators!.splice(props[prop].validators!.indexOf('required'), 1);
        }

        // Loop over the validators and test
        for (let validator of props[prop].validators!) {
          let pattern: string;
          let opts: any[] = [];

          if (typeof validator === 'object') {
            opts = validator[Object.keys(validator)[0]];
            validator = Object.keys(validator)[0];
          }

          if (Validation[validator]) {

            // Get the RegExp pattern
            if (typeof Validation[validator].pattern === 'function') {
              pattern = (Validation[validator].pattern as Function)(...opts);
            } else {
              pattern = Validation[validator].pattern as string;
            }

            let rgx = new RegExp(pattern);
            if (!rgx.test(this[prop])) {
              isValid = false;
              break;
            }
          } else {
            throw new Exception(`Property '${prop}' using an invalid validator '${validator}'`);
          }
        }
      } else {
        throw new Exception(`Property '${prop}' has no validators.`);
      }
    } else {
      throw new Exception('Class contains no metadata for validation');
    }
    return isValid;
  }

  /**
   * Empties
   * @returns {void}
   */
  empty() : void {
    let props: Dictionary<IProperty> = $.extend(true, {}, Reflect.getMetadata(propsMetadataKey, this));
    for (let prop in props) {
      this[prop] = null;
    }
  }

  /**
   * Convert the model to a json object
   * @returns {object}
   */
  toJson(): object {
    let json: Dictionary<any> = {};

    if (Reflect.hasMetadata(propsMetadataKey, this)) {
      let props: Dictionary<IProperty> = Reflect.getMetadata(propsMetadataKey, this);
      for (let prop in props) {
        json[prop] = this[prop];
      }
    }

    return json;
  }
}
