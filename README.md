# Encontre
[![Build Status][ci-img]][ci]
[![Coverage Status][cover-img]][cover]
[![devDependency Status][devDep-img]][devDep]

[ci-img]:     https://travis-ci.org/lagden/encontre.svg
[ci]:         https://travis-ci.org/lagden/encontre
[cover-img]:  https://codecov.io/github/lagden/encontre/coverage.svg?branch=master
[cover]:      https://codecov.io/github/lagden/encontre?branch=master
[devDep-img]: https://david-dm.org/lagden/encontre/dev-status.svg
[devDep]:     https://david-dm.org/lagden/encontre#info=devDependencies


Just find it


## Install

```
$ npm i -S lagden-find
```


## Usage

```javascript
const encontre = require('lagden-find');
const data = require('data.json');

const found = encontre(data, 'name', 'Lagden');
console.log(found);
```


## License

MIT © [Thiago Lagden](http://lagden.in)
