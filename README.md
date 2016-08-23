# Encontre
[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]
[![Dependency Status][dep-img]][dep]
[![devDependency Status][devDep-img]][devDep]

[ci-img]:        https://travis-ci.org/lagden/encontre.svg
[ci]:            https://travis-ci.org/lagden/encontre
[coveralls-img]: https://coveralls.io/repos/github/lagden/encontre/badge.svg?branch=master
[coveralls]:     https://coveralls.io/github/lagden/encontre?branch=master
[dep-img]:       https://david-dm.org/lagden/encontre.svg
[dep]:           https://david-dm.org/lagden/encontre
[devDep-img]:    https://david-dm.org/lagden/encontre/dev-status.svg
[devDep]:        https://david-dm.org/lagden/encontre#info=devDependencies


Just find it


## Install

```
$ npm i -S lagden-find
```


## Usage

```javascript
const encontre = require('lagden-find');
const data = require('./data.json');

const r = encontre(data, 'instrument', 'Bass');
console.log(r);
```


## API

### encontre(arr, k, q, split)

#### arr

*Required*  
Type: `array`

An `array` of objects - [see example](https://github.com/lagden/encontre/blob/master/test/fixture.json)

#### k

*Required*  
Type: `string`

The key name which you would like to search

#### q

*Required*  
Type: `string`

The term that you looking for

#### split

Type: `boolean`  
Default: `true`

Break the term in pieces


## License

MIT © [Thiago Lagden](http://lagden.in)
