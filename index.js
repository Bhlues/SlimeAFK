const name = 'The_Ducky_Slayer'
const server = 'mc.hypixel.net'
/*
  Enter config values above
*/

const mineflayer = require('mineflayer')
const express = require('express')

express().get('/', (req, res) => res.send(`${Math.random()}`)).listen(8080)

const bot = mineflayer.createBot({
  username: name,
  password: '',
  host: server,
  version: '1.8.9',
  auth: 'microsoft',
  defaultChatPatterns: false
})

bot.setSettings({
  viewDistance: 'tiny'
})

let skyblock = false

bot.on('login', () => {
  skyblock = false
  console.log(`BOT LOGGED INTO: '${server}'`)
})

bot.on('spawn', () => {
    setTimeout(() => {
    let cmd = skyblock ? '/is' : '/play sb'
    skyblock = true
        bot.chat(cmd)
    console.log(`BOT RAN COMMAND: '${cmd}'`)
    }, 10000 * Math.random() + 10000)
})

bot.on('message', (...args) => {
  let msg = args.toString().trim().replace(',chat', '').replace(',game_info', '')
  if ((msg.includes('❤') && msg.includes('❈') && msg.includes('✎')) || msg.length == 0) return

  console.log(msg)
})
