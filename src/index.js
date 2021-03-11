'use strict'

const verifica = require('./lib/verifica')

function encontre(collection, k, q, options = {}) {
	return collection.filter(obj => verifica(obj[k], q, options))
}

module.exports = encontre
