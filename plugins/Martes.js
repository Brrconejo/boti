let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Martes.mp3'
conn.sendFile(m.chat, vn, 'Martes.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /martes|Martes/
handler.command = new RegExp
module.exports = handler
