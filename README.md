# SGM-Frontend

> Frontend engine for SGM powered by Vue.js and Bootstrap

## Prerequisites
Before you can work with this project these programs need to be installed on your development machine.

- [Node.js](https://nodejs.org/en/) - Download the LTS version
- [Git](https://git-scm.com/download/win) - At minimum install Git Bash
- [Visual Studio Code](https://code.visualstudio.com/download)

## Visual Studio Code

### Shortcuts
VS Code utilizes various keyboard shortcuts throughout the IDE to help you make quick actions without taking your hands off the keyboard, which allows you to work faster.

The most important keyboard shortcut is to access the `Command Palette`.  This is where you can run all of the commands or extensions that the IDE supports.

The keyboard shortcut for the `Command Palette` is `Ctrl+Shift+P`.

To open up the terminal while in VS Code, you can use the keyboard shortcut `Ctrl+Tilde`.

You can learn about other keyboard shortcuts on [this blog post](http://donovanbrown.com/post/visual-studio-code-keyboard-shortcut-cheat-sheet).

### Terminal
VS Code using PowerShell as the default shell.  We need to update default shell to use Git Bash.  To do that use the Command Palette shortcut, `Ctrl+Shift+P` and search `Terminal: Select Default Shell`.  Select that option and a new list of shell options will appear.  Select `Git Bash` from that list.

If `Git Bash` does not appear, please go back and ensure you installed Git with Git Bash mode.

### Extensions
VS Code comes with the ability to install Microsoft and community-driven extensions.  This is the current list of extensions that we use:

- Debugger for Chrome
- EditorConfig for VS Code
- Markdown Preview Enhanced
- Node.js Extension Pack
- Node.js Modules Intellisense
- Prettier - Code formatter
- Pug beautify
- stylefmt
- stylelint
- Terminal
- TSLint
- TSLint Vue
- Vetur

## Installation

### Yarn
Yarn is a package management tool that extends npm.  It allows you to lock packages down to specific versions, as well as provides a network-level cache to speed up the download process for all users network-wide.

To install, open Git Bash and type `npm i -g yarn`.

### Dependencies
The frontend framework has numerous dependencies in order to run.  To install them simply open Git Bash, navigate to your working directory where this repository is located, and run `yarn install`.  This will create a directory called `node_modules/` where all of these dependencies will be installed.

After your initial install there is no need to run it again unless you manually delete the `node_modules/` directory.  If new packages are added later they will be automatically installed after the git merge.

## Usage
There are several commands used to run, build, and test the application.  In addition, there are two different ways you can execute these commands.

1. CLI - Open up the terminal (`Ctrl+Tilde`) and issue the commands there.
2. Use the `NPM Scripts` tab of your Project Explorer (far bottom).

Below is the CLI commands and description.  When using VS Code Explorer you will not need the yarn commands, but the script name is the same.

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8000
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report

# run unit tests
yarn run unit
```

## Credits
Below are some of the components, plugins, and extensions we are using:

- Vue.js
- vue-class-component
- vue-router
- Sass
- Webpack
- Karma
- Chai
- Mocha
- TypeScript
- TSLint
- Babel
