let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Jejeje.mp3'
conn.sendFile(m.chat, vn, 'Jejeje.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /jejeje|Jejeje/
handler.command = new RegExp
module.exports = handler
