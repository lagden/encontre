'use strict';

const verifica = require('./lib/verifica');

function encontre(arr, k, q, split = true) {
	return arr.filter(obj => verifica(obj[k], q, split));
}

module.exports = encontre;
