# Encontre

[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]
[![Dependency Status][dep-img]][dep]
[![devDependency Status][devDep-img]][devDep]
[![XO code style][xo-img]][xo]

[ci-img]:          https://travis-ci.org/lagden/encontre.svg
[ci]:              https://travis-ci.org/lagden/encontre
[coveralls-img]:   https://coveralls.io/repos/github/lagden/encontre/badge.svg?branch=master
[coveralls]:       https://coveralls.io/github/lagden/encontre?branch=master
[dep-img]:         https://david-dm.org/lagden/encontre.svg
[dep]:             https://david-dm.org/lagden/encontre
[devDep-img]:      https://david-dm.org/lagden/encontre/dev-status.svg
[devDep]:          https://david-dm.org/lagden/encontre#info=devDependencies
[xo-img]:          https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo]:              https://github.com/sindresorhus/xo


Just find


## Install

```
$ npm i -S lagden-find
```


## Usage

```javascript
const encontre = require('lagden-find')
const collection = [{name: 'Sabrina', age: 27}, {name: 'Lagden', age: 28}]

const r = encontre(collection, 'name', 'sa', {caseSensitive: false})
console.log(r) // [{name: 'Sabrina', age: 27}]
```


## API

### encontre(collection, k, q, options)

parameter   | type                 | required    | default               | description
----------- | -------------------- | ----------- | -------------------   | ------------
collection  | array                | yes         | -                     | An `array` of objects - [see example](https://github.com/lagden/encontre/blob/master/test/fixture.json)
k           | string               | yes         | -                     | The key of object which you would like to search
q           | string               | yes         | -                     | The term that you looking for
options     | object               | no          | [see below](#options) | Options


#### options

Name          | Type      | Required | Default                         | Description
-----------   | --------- | -------- | ------------------------------- | ------------
split         | boolean   | no       | true                            | Break the term in many words
caseSensitive | boolean   | no       | true                            | The words can differ in meaning


## License

MIT © [Thiago Lagden](http://lagden.in)
