'use strict';

const verifica = require('./lib/verifica');

function encontre(arr, k, v, split = true) {
	return arr.filter(obj => verifica(obj[k], v, split));
}

module.exports = encontre;
