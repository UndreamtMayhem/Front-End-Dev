# Using package managers for projects

## What's in the template
1. Npm
  - Express and pug 
2. Yarn 
  - Express and pug



### 1. Using Npm 

`npm init` produces a default `package.json` similar to:
```
{
  "name": "basic_npm_package",
  "version": "1.0.0",
  "description": "basic_npm_package with express and pug",
  "main": "app.js",
  "scripts": {
    "start": "node app"
  },
  "author": "Daniel Johnson (undreamtmayhem)",
  "license": "ISC",
  "dependencies": {
    "express": "^4.15.3",
    "pug": "^2.0.0-rc.2"
  }
}

```
### To run this npm project do the following

#### Development
```
1. $ npm install
2. this will be added later ........  $ yarn run test

```
#### Production

```
$ npm install --production
```

#### To add packages manually
- $ npm install express
- $ npm install pug



### 2. Using yarn 

`yarn init` produces a default `package.json` similar to:
```
{
  "name": "example-yarn-package",
  "version": "1.0.0",
  "description": "An example package to demonstrate Yarn",
  "main": "index.js",
  "repository": "github.com/yarnpkg/example-yarn-package",
  "scripts": {
    "test": "jest"
  },
  "author": "Daniel Johnson",
  "license": "BSD-2-Clause",
  "dependencies": {
    "express": "^4.16.3",
    "pug": "^2.0.3"
  },
  "devDependencies": {},
  "jest": {
    "testEnvironment": "node"
  }
}

```
### To run this yarn project do the following

#### Development
```
1. $ yarn install
2. this will be added later ........  $ yarn run test

```
#### Production

```
$ yarn install --production
```

### To add packages manually
- $ yarn add express
- $ yarn add pug


