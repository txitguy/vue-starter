// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'typescript-eslint-parser',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ['typescript'],
  // required to lint *.vue files
  plugins: [
    'html',
    'typescript'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // require semicolon
    'semi': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // no spaces before parens, except for arrow functions
    'space-before-function-paren': [0, {
      'asyncArrow': 'always'
    }],
    // require that member overloads be consecutive
    'typescript/adjacent-overload-signatures': 2,
    // Require PascalCase for class and interface names
    'typescript/class-name-casing': 2,
    // Require explicit return types on functions and methods
    'typescript/explicit-function-return-type': 2,
    // require explicit member accessibility
    'typescript/explicit-member-accessibility': 2,
    // Require private members start with underscore (_)
    'typescript/member-naming': [2, {
      'private': '^_'
    }],
    // member delimiter styles
    'typescript/member-delimiter-style': [2, {
      'delimiter': 'semi'
    }],
    // member ordering
    'typescript/member-ordering': 2,
    // require Type assertions using 'as' instead of <Type>
    'typescript/no-angle-bracket-type-assertion': 2,
    'typescript/no-empty-interface': 2,
    'typescript/no-explicit-any': 2,
    'typescript/no-parameter-properties': 2,
    'typescript/no-triple-slash-reference': 2,
    'typescript/no-unused-vars': 2,
    'typescript/no-use-before-define': 2,
    'typescript/no-var-requires': 2,
    'typescript/type-annotation-spacing': 2,
    'no-console': 0
  }
}
