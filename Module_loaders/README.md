# Module Loaders
--- 
1. Parcel.js
2. Webpack



## 1. Parcel Module Loader
--- 
Whats included
- Processing typescript
- Processing Js
- Processing SASS
- CSS autoprefixer
- posthtml-img-autosize 

## Getting started
'''

yarn install

'''

### Development

```

parcel index.html

```
Files appear in /dist folder

### Production

```

parcel build entry.js

```
Files appear in /dist folder

The minifiers used by Parcel are uglify-es for JavaScript, cssnano for CSS, and htmlnano for HTML.

---

## 1. Parcel Module Loader

Whats included
- Uses NPM and Express
- webpack-cli and webpack
- webpack-dev-server
  - asset-management
    - Processing js files
    - Uglify JS
    - Processing Images with img-loader and ImageminPlugin
    - Processing CSS, SASS with node sass, sass loader and style loader
    - Combines CSS files with extract text webpack
    - CSS autoprefixer
    - posthtml-img-autosize 

## Getting started

'''

npm install

'''
### Development

```
change
  {
    mode: 'development',
  }


npm run build

npm run start

npm run server

```

Files appear in /dist folder

### Production

```
change
  {
    mode: 'production',
  }

  npm run build

npm run start

npm run server

```
Files appear in /dist folder

### TODO
Make parcel and webpack readme
add test for parcel