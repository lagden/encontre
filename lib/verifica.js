'use strict'

const {encode} = require('@tadashi/hex')

function ua(arr) {
	const seen = new Set()
	return arr.filter(value => {
		if (seen.has(value) || value === '') {
			return false
		}

		seen.add(value)
		return true
	})
}

function verifica(source, q, options) {
	const {split = true, caseSensitive = true} = options

	const words = ua((split ? q.split(' ') : [q]).map(word => word.trim()))
		.sort((a, b) => b.length - a.length)
		.map(word => encode(word))

	const regex = new RegExp(`${words.join('|')}`, caseSensitive ? 'gu' : 'igu')
	const result = regex.test(source)
	return result
}

module.exports = verifica
