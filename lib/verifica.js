'use strict';

const hexEncode = require('./hex-encode');

function verifica(source, termo, split) {
	const words = split ? termo.split(' ') : [termo];
	for (const word of words) {
		const regex = new RegExp(hexEncode(word), 'i');
		return regex.test(source) ? source : false;
	}
}

module.exports = verifica;
