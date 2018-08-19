
# get-haversine-distance
[![package version](https://img.shields.io/npm/v/get-haversine-distance.svg?style=flat-square)](https://npmjs.org/package/get-haversine-distance)
[![package downloads](https://img.shields.io/npm/dm/get-haversine-distance.svg?style=flat-square)](https://npmjs.org/package/get-haversine-distance)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/get-haversine-distance.svg?style=flat-square)](https://npmjs.org/package/get-haversine-distance)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Get distance between two coordinates using haversine formula

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install get-haversine-distance
$ # OR
$ yarn add get-haversine-distance
```

## Usage

```js
const getHaversineDistance = require('get-haversine-distance')

const p1 = {
  lat: 11,
  lng: 12
}

const p2 = {
  lat: 13,
  lng: 14
}

const p3 = {
  x: 11,
  y: 12
}

const p4 = {
  x: 13,
  y: 14
}

console.log(getHaversineDistance(p1, p2)) // 311.08025949241477
console.log(getHaversineDistance(p1, p2, {inMiles: true})) // 193.29679215853378
console.log(getHaversineDistance(p3, p4, {latName: 'x', lngName: 'y'})) // 311.08025949241477

```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    