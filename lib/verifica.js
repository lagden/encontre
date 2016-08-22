'use strict';

const encode = require('lagden-hex').encode;

function verifica(source, termo, split) {
	const words = split ? termo.split(' ') : [termo];
	for (const word of words) {
		const regex = new RegExp(encode(word), 'i');
		return regex.test(source);
	}
}

module.exports = verifica;
