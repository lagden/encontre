'use strict'

const {encode} = require('lagden-hex')

function unique(value, index, arr) {
	return arr.indexOf(value) === index && value
}

function verifica(source, q, options) {
	const {split = true, caseSensitive = true} = options
	const words = (split ? q.split(' ') : [q])
		.map(word => word.trim())
		.filter(unique)
		.sort((a, b) => b.length - a.length)
		.map(word => encode(word))

	const regex = new RegExp(`${words.join('|')}`, caseSensitive ? 'g' : 'ig')
	return regex.test(source)
}

module.exports = verifica
