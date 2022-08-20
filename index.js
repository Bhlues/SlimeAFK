const name = 'The_Ducky_Slayer'
const server = 'mc.hypixel.net'
/*
  Enter config values above
*/

const mineflayer = require('mineflayer')
const express = require('express')

express().get('/', (req, res) => res.send(`${Math.random()}`)).listen(8080)

const bot = mineflayer.createBot({
  host: server,
  username: name,
  password: '',
  auth: 'microsoft',
})

let sb = false

bot.on('login', () => sb = false)
bot.on('spawn', () => {
	setTimeout(() => {
		bot.chat(sb ? '/is' : '/play sb')
	}, 10000 * Math.random())
})