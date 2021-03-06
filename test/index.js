'use strict'

const test = require('ava')
const data = require('./fixture/data.json')
const encontre = require('../src')

test('Deve retornar um array com 2 objetos contendo o nome Thiago', t => {
	const result = encontre(data, 'name', 'Thiago Lagden')
	t.true(result.length > 0)
	t.true(result.length === 2)
	t.is(result[0].name, 'Thiago Lagden')
	t.is(result[1].name, 'Thiago Magalhães')
})

test('Deve retornar um array contendo um objeto com o nome Felipe Oliveira', t => {
	const result = encontre(data, 'name', 'Felipe Oliveira', {split: false})
	t.true(result.length > 0)
	t.true(result.length === 1)
	t.is(result[0].name, 'Felipe Oliveira')
})

test('Deve retornar um array vazio', t => {
	const result = encontre(data, 'name', 'Sabrina')
	t.true(result.length === 0)
})

test('Deve retornar um array contendo um objeto com o nome Lucas Tadashi', t => {
	const result = encontre(data, 'name', 'lucas', {caseSensitive: false})
	t.true(result.length === 1)
	t.is(result[0].name, 'Lucas Tadashi')
})
