let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Goku.mp3'
conn.sendFile(m.chat, vn, 'Goku.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /goku|Goku/
handler.command = new RegExp
module.exports = handler
