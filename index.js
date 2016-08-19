'use strict';

function hexEncode(str) {
	const result = [];
	for (const char of str) {
		const hex = char.charCodeAt(0).toString(16);
		result.push(`\\u${((`000${hex}`).slice(-4))}`);
	}
	return result.join('');
}

function verifica(source, termo, split = true) {
	const words = split ? termo.split(' ') : [termo];
	for (const word of words) {
		const regex = new RegExp(hexEncode(word), 'i');
		return regex.test(source) ? source : false;
	}
	return false;
}

function encontre(arr, k, v, split = true) {
	return arr.filter(obj => verifica(obj[k], v, split));
}

module.exports = encontre;
