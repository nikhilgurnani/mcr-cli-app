#! /usr/bin/env node
'use strict';

var util = require('util')
const
    { execSync } = require('child_process'),
    npmInit = execSync('npm init -y', null, console.log),
    src = execSync('mkdir src', null, console.log),
    indexJs = execSync('touch src/index.js', null, console.log),
    models = execSync('mkdir src/models', null, console.log),
    modelsIndexJs = execSync('touch src/models/index.js', null, console.log),
    controllers = execSync('mkdir src/controllers', null, console.log),
    controllersIndexJs = execSync('touch src/controllers/index.js', null, console.log),
    routes = execSync('mkdir src/routes', null, console.log),
    routesIndexJs = execSync('touch src/routes/index.js', null, console.log),
    devDependencies = execSync('npm i editorconfig eslint --save-dev')
