let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Asco.mp3'
conn.sendFile(m.chat, vn, 'Asco.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /asco|Asco/
handler.command = new RegExp
module.exports = handler
