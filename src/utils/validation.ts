import { Dictionary } from 'vue-router/types/router';

let Validation: Dictionary<{pattern: string | Function, invalid: string | Function}> = {
  string: {
    pattern: String.raw`^[a-zA-Z]+$`,
    invalid: "Must contain only letters."
  },
  number: {
    pattern: String.raw`^\d+$`,
    invalid: "Must contain only numbers."
  },
  phone: {
    pattern: String.raw`^\d{10}$`,
    invalid: "Must be a valid phone number."
  },
  email: {
    pattern: String.raw`\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$`,
    invalid: "Must be a valid email address."
  },
  username: {
    pattern: String.raw`^[a-zA-Z].{3,20}$`,
    invalid: "Must be at least 4 characters long and start with a letter."
  },
  password: {
    pattern: String.raw`^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W]).{8,}$`,
    invalid:
      "Must contain upper and lower case letters, a number, and a special character."
  },
  minLength: {
    pattern(len: Number) {
      return String.raw`^.{${len},}$`;
    },
    invalid(len: Number) {
      return `Must be at least ${len} characters in length.`;
    }
  },
  maxLength: {
    pattern(len: Number) {
      return String.raw`^.{0,${len}}$`;
    },
    invalid(len: Number) {
      return `Must be no more than ${len} characters in length.`;
    }
  },
  length: {
    pattern(minLen: Number, maxLen: Number) {
      return String.raw`^.{${minLen},${maxLen}}$`;
    },
    invalid(minLen: Number, maxLen: Number) {
      return `Must be between ${minLen} and ${maxLen} characters in length.`;
    }
  }
};

export default Validation;
