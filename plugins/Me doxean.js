let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Me doxean.mp3'
conn.sendFile(m.chat, vn, 'Me doxean.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /me doxean|Me doxean/
handler.command = new RegExp
module.exports = handler
