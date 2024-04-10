let media = './Menu7.png'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '📇', key: m.key } })
let str = `*𝗛𝗢𝗟𝗔 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 👋🏻, 𝗧𝗘 𝗜𝗡𝗩𝗜𝗧𝗢 𝗔 𝗨𝗡𝗜𝗥𝗧𝗘 𝗔𝗟 𝗚𝗥𝗨𝗣𝗢 𝗢𝗙𝗜𝗖𝗜𝗔𝗟 𝗗𝗘 𝗠𝗔𝗬-𝗕𝗢𝗧*

*➤ 🤖 𝗚𝗿𝘂𝗽𝗼 𝗼𝗳𝗶𝗰𝗶𝗮𝗹 𝗱𝗲𝗹 𝗕𝗼𝘁:*

*1.-* https://chat.whatsapp.com/KXkX5ZzZp3mFWYt5comZHr`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}

handler.command = /^grupos|linksk|gruposofc|gruposoficiales$/i
handler.register = true
handler.exp = 33

export default handler
