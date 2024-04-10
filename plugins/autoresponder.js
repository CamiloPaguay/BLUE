import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]

if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen8, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝙀𝙡 𝙢𝙚𝙟𝙤𝙧 𝘽𝙤𝙩 𝙙𝙚 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥', body: '𝘽𝙮: 𝘼𝙣𝙙𝙧𝙚𝙨 - 𝘽𝙡𝙪𝙚', sourceUrl: `https://github.com`, thumbnail: imagen6}}})}

return !0 }
export default handler
