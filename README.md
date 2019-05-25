MCR Cli app
======

A simple Node.js CLI Application for initialising a new NPM project.

---

### Description
The purpose of developing this application is to ease up my process of starting a new NPM project and creating a skeleton of MCR (_Model, Controllers and Routes_) Structure in which I organise my code.

### Installation
You can install this npm package by running
```
npm i -g mcr-cli-app
```
**Note:** You must install this module globally. I have not tested this as being installed as a project dependency and **I am not responsible if you mess up your project or your system catches on fire or worse.**

### Usage
You can use this package in any directory. Just run the following command
```
mcr-init
```
and it will create a following structure for you
```
+-- package.json
+-- package-lock.json
+-- node_modules
|   +-- module1 ...
|   +-- module2 ...
+-- src
|   +-- index.js
|   +-- models
|   |   +-- index.js
|   +-- controllers
|   |   +-- index.js
|   +-- routes
|   |   +-- index.js
```
The ```mcr-init``` command internally runs ```npm init -y``` on your behalf and skips the initial steps of setting up a node.js app which you might usually see on running the ```npm init``` command.

**YOU MUST ENTER STUFF IN PACKAGE.JSON YOURSELVES**

### Dependencies
I personally use 2 development dependencies a lot:
* [editorconfig](https://www.npmjs.com/package/editorconfig)
* [eslint](https://www.npmjs.com/package/eslint)

These will be installed when you run `mcr-init` command. If you do not wish to use these dependencies, you can uninstall them later. 
