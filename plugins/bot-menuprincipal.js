import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];

 const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
        const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  let fkon = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.reply(m.chat, '*ꪹ͜𓂃͡𝗖𝗮𝗿𝗴𝗮𝗻𝗱𝗼 𝗘𝗹 𝗠𝗲𝗻𝘂 𝗗𝗲𝗹 𝗕𝗼𝘁...𓏲੭*', fkon, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '👋 ¡𝗛𝗼𝗹𝗮!', body: '𝖲𝖺𝗄𝗎𝗋𝖺𝖡𝗈𝗍𝖫𝗂𝗍𝖾-𝖬𝖣 🌹🌻', sourceUrl: global.yt, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('📍');
    await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key } })
  let txt =`🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮

  📌 *Hola,* ${taguser}

  📊 _*< TUS ESTADÍSTICAS />*_
  
  🎟️ •  *Tokens:* ${joincount}
  🎖️ •  *Nivel:* ${level}
  💰 •  *MayCoins:* ${money}
  📈 •  *Experiencia:* ${exp}

╭✦⢄✩*⢄⢁ ☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎۫۬🛠️⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸ ⡠*✩⡠✦╮
│╭─────────────────
││ 「𓂃͡Sᴏʟᴜᴄɪᴏɴ ᴀ ᴇʀʀᴏʀᴇs 」
│├━━━━━━━━━━━━━━━━╯
│┣➤ Mensajes en espera
││🛠️✎ _!fixmsgespera_
│┣➤ Mensajes en espera (owner)
││🛠️✎ _!dsowner_
│╰─────────────────
╰─ - ✦⢄⢁✩*⢄⢁✧⡠*✩⡈⡠✦ - ─╯

  _*< 📜 LISTA DE MENUS 📋 />*_
  
  🎵 _.menuaudios_
  🍂 _.MenuFreefire_
  📝 _.Menuletras_
  🏖️ _.Menujuegos_
  📺 _.menuanimes_
  📖 _.labiblia_ (🔞)

 _*< 🤖 SOBRE EL BOT 📚 />*_

  📝 _.moderadora_
  📜 _.terminosycondiciones_
  👥 _.grupos_
  📊 _.estado_
  📝 _.infobot_
  🚀 _.speedtest_
  💸 _.apoyar_
  👑 _.owner_
  💻 _.script_
  📝 _.reporte *<txt>*_
  🚪 _.join *<wagp_url>*_
  🔄 _.fixmsgespera_
  🤖 _bot_ (sin prefijo)



╭✦⢄✩*⢄⢁ ☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎۫۬👑⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸ ⡠*✩⡠✦╮
│╭─────────────────
││ 「 Aᴄᴛɪᴠᴀʀ ᴏ ᴅᴇsᴀᴄᴛɪᴠᴀʀ 」
│├━━━━━━━━━━━━━━━━╯
││👾✎ _!enable *welcome*_
││👾✎ _!disable *welcome*_
││👾✎ _!enable *modohorny*_
││👾✎ _!disable *modohorny*_
││👾✎ _!enable *antilink*_
││👾✎ _!disable *antilink*_
││👾✎ _!enable *reaction*_
││👾✎ _!disable *reaction*_
││👾✎ _!enable *antilink2*_
││👾✎ _!disable *antilink2*_
││👾✎ _!enable *juegos*_
││👾✎ _!disable *juegos*_
││👾✎ _!enable *detect*_
││👾✎ _!disable *detect*_
││👾✎ _!enable *audios*_
││👾✎ _!disable *audios*_
││👾✎ _!enable *autosticker*_
││👾✎ _!disable *autosticker*_
││👾✎ _!enable *antiviewonce*_
││👾✎ _!disable *antiviewonce*_
││👾✎ _!enable *antitoxic*_
││👾✎ _!disable *antitoxic*_
││👾✎ _!enable *antitraba*_
││👾✎ _!disable *antitraba*_
││👾✎ _!enable *antiarabes*_
││👾✎ _!disable *antiarabes*_
││👾✎ _!enable *modoadmin*_
││👾✎ _!disable *modoadmin*_
││👾✎ _!enable *antidelete*_
││👾✎ _!disable *antidelete*_
│╰─────────────────
╰─ - ✦⢄⢁✩*⢄⢁✧⡠*✩⡈⡠✦ - ─╯

╭✦⢄✩*⢄⢁ ☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎۫۬🌹⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸ ⡠*✩⡠✦╮
│╭─────────────────
││  「 Rᴇᴘᴏʀᴛᴀʀ ᴇʀʀᴏʀᴇs 」
│├━━━━━━━━━━━━━━━━╯
│┃🌹 _!reporte *<texto>*_
│╰─────────────────
╰─ - ✦⢄⢁✩*⢄⢁✧⡠*✩⡈⡠✦ - ─╯

╭✦⢄✩*⢄⢁ ☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎۫۬👑⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸ ⡠*✩⡠✦╮
│╭─────────────────
││ 「 Dᴇsᴄᴀʀɢᴀs 」
│├━━━━━━━━━━━━━━━━╯
││🍧✎ _!instagram *<enlace / link / url>*_
││🍧✎ _!mediafire *<enlace / link / url>*_
││🍧✎ _!gitclone *<enlace / link / url>*_
││🍧✎ _!gdrive *<enlace / link / url>*_
││🍧✎ _!tiktok *<enlace / link / url>*_
││🍧✎ _!tiktokimg *<enlace / link / url>*_
││🍧✎ _!xnxxdl *<enlace / link / url>*_
││🍧✎ _!xvideosdl *<enlace / link / url>*_
││🍧✎ _!twitter *<enlace / link / url>*_
││🍧✎ _!fb *<enlace / link / url>*_
││🍧✎ _!ytshort *<enlace / link / url>*_
││🍧✎ _!ytmp3 *<enlace / link / url>*_
││🍧✎ _!ytmp4 *<enlace / link / url>*_
││🍧✎ _!ytmp3doc *<enlace / link / url>*_
││🍧✎ _!ytmp4doc *<enlace / link / url>*_
││🍧✎ _!videodoc *<enlace / link / url>*_
││🍧✎ _!dapk2 *<enlace / link / url>*_
││🍧✎ _!stickerpack *<enlace / link / url>*_
││🍧✎ _!play *<texto>*_
││🍧✎ _!play2 *<texto>*_
││🍧✎ _!play.1 *<texto>*_
││🍧✎ _!play.2 *<texto>*_
││🍧✎ _!playdoc *<texto>*_
││🍧✎ _!playdoc2 *<texto>*_
││🍧✎ _!playlist *<texto>*_
││🍧✎ _!spotify *<texto>*_
││🍧✎ _!ringtone *<texto>*_
││🍧✎ _!soundcloud *<texto>*_
││🍧✎ _!imagen *<texto>*_
││🍧✎ _!pinterest *<texto>*_
││🍧✎ _!wallpaper *<texto>*_
││🍧✎ _!pptiktok *<nombre de usuario>*_
││🍧✎ _!igstalk *<nombre de usuario>*_
││🍧✎ _!igstory *<nombre de usuario>*_
││🍧✎ _!tiktokstalk *<username>*_
│╰─────────────────
╰─ - ✦⢄⢁✩*⢄⢁✧⡠*✩⡈⡠✦ - ─╯

╭✦⢄✩*⢄⢁☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎۫۬🔎⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸⡠*✩⡠✦╮
│╭─────────────────
││  「 Bᴜsᴄᴀᴅᴏʀᴇs 」
│├━━━━━━━━━━━━━━━━╯
││🔎✎ _!githubsearch *<texto>*_
││🔎✎ _!modapk *<texto>*_
││🔎✎ _!stickersearch *<texto>*_
││🔎✎ _!stickersearch2 *<texto>*_
││🔎✎ _!xnxxsearch *<texto>*_
││🔎✎ _!animeinfo *<texto>*_
││🔎✎ _!google *<texto>*_
││🔎✎ _!letra *<texto>*_
││🔎✎ _!wikipedia *<texto>*_
││🔎✎ _!ytsearch *<texto>*_
││🔎✎ _!playstore *<texto>*_
│╰─────────────────
╰─ - ✦⢄⢁✩*⢄⢁✧⡠*✩⡈⡠✦ - ─╯

╭✦⢄✩*⢄⢁ ☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎۫۬👑⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸ ⡠*✩⡠✦╮
│╭─────────────────
││  「 Gʀᴜᴘᴏs 」
│├━━━━━━━━━━━━━━━━╯
││🧿✎️ _!salir *<admins>*_
││🧿✎️ _!add *<numero>*_
││🧿✎️ _!kick *<@tag>*_
││🧿✎️ _!kick2 *<@tag>*_
││🧿✎️ _!mute *<@tag>*_
││🧿✎️ _!unmute *<@tag>*_
││🧿✎️ _!listanum *<texto>*_
││🧿✎️ _!kicknum *<texto>*_
││🧿✎️ _!grupo *<abrir / cerrar>*_
││🧿✎️ _!grouptime *<opcion> <tiempo>*_
││🧿✎️ _!promote *<@tag>*_
││🧿✎️ _!demote *<@tag>*_
││🧿✎️ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
││🧿✎️ _!demote *<@tag>*_
││🧿✎️ _!infogroup_
││🧿✎️ _!resetlink_
││🧿✎️ _!link_
││🧿✎️ _!setname *<texto>*_
││🧿✎️ _!setdesc *<texto>*_
││🧿✎️ _!invocar *<texto>*_
││🧿✎️ _!setwelcome *<texto>*_
││🧿✎️ _!setbye *<texto>*_
││🧿✎️ _!hidetag *<texto>*_
││🧿✎️ _!hidetag *<audio>*_
││🧿✎️ _!hidetag *<video>*_
││🧿✎️ _!hidetag *<imagen>*_
││🧿✎️ _!warn *<@tag>*_
││🧿✎️ _!unwarn *<@tag>*_
││🧿✎️ _!listwarn_
││🧿✎️ _!fantasmas_
││🧿✎️ _!destraba_
││🧿✎️ _!setpp *<imagen>*_
│╰─────────────────
╰─ - ✦⢄⢁✩*⢄⢁✧⡠*✩⡈⡠✦ - ─╯

╭✦⢄✩*⢄⢁ ☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎۫۬👑⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸ ⡠*✩⡠✦╮
│╭─────────────────
││  「 Cᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs 」
│├━━━━━━━━━━━━━━━━╯
││🔊✎ _!toanime *<imagen>*_
││🔊✎ _!tourl *<video / imagen / audio>*_
││🔊✎ _!toimg *<sticker>*_
││🔊✎ _!togifaud *<video>*_
││🔊✎ _!tts *<idioma> <texto>*_
│╰─────────────────
╰─ - ✦⢄⢁✩*⢄⢁✧⡠*✩⡈⡠✦ - ─╯

╭✦⢄✩*⢄⢁ ☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎۫۬🍨⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸ ⡠*✩⡠✦╮
│╭─────────────────
││  「 Eғᴇᴄᴛᴏs ʏ ʟᴏɢᴏs 」
│├━━━━━━━━━━━━━━━━╯
││🍨✎ _!logos *<efecto> <texto>*_
││🍨✎ _!logochristmas *<texto>*_
││🍨✎ _!logocorazon *<texto>*_
││🍨✎ _!ytcomment *<texto>*_
││🍨✎ _!hornycard *<@tag>*_
││🍨✎ _!simpcard *<@tag>*_
││🍨✎ _!lolice *<@tag>*_
││🍨✎ _!itssostupid_
││🍨✎ _!pixelar_
││🍨✎ _!blur_
│╰─────────────────
╰─ - ✦⢄⢁✩*⢄⢁✧⡠*✩⡈⡠✦ - ─╯

╭✦⢄✩*⢄⢁ ☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎۫۬👑⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸ ⡠*✩⡠✦╮
│╭─────────────────
││ 「 Fʀᴀsᴇs ʏ ᴛᴇxᴛᴏs 」
│├━━━━━━━━━━━━━━━━╯
││🍨✎️  _!piropo_
││🍨✎️  _!consejo_
││🍨✎️  _!fraseromantica_
││🍨✎️  _!historiaromantica_
│╰─────────────────
╰─ - ✦⢄⢁✩*⢄⢁✧⡠*✩⡈⡠✦ - ─╯

╭✦⢄✩*⢄⢁ ☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎۫۬👑⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸ ⡠*✩⡠✦╮
│╭─────────────────
││  「 Rᴀɴᴅᴏᴍ 」
│├━━━━━━━━━━━━━━━━╯
││🧿✎ _!kpop *<blackpink / exo / bts>*_
││🧿✎ _!cristianoronaldo_
││🧿✎ _!messi_
││🧿✎ _!cat_
││🧿✎ _!dog_
││🧿✎ _!meme_
││🧿✎ _!itzy_
││🧿✎ _!blackpink_
││🧿✎ _!navidad_
││🧿✎ _!wpmontaña_
││🧿✎ _!pubg_
││🧿✎ _!wpgaming_
││🧿✎ _!wpaesthetic_
││🧿✎ _!wpaesthetic2_
││🧿✎ _!wprandom_
││🧿✎ _!wallhp_
││🧿✎ _!wpvehiculo_
││🧿✎ _!wpmoto_
││🧿✎ _!coffee_
││🧿✎ _!pentol_
││🧿✎ _!caricatura_
││🧿✎ _!ciberespacio_
││🧿✎ _!technology_
││🧿✎ _!doraemon_
││🧿✎ _!hacker_
││🧿✎ _!planeta_
││🧿✎ _!randomprofile_
│╰─────────────────
╰─ - ✦⢄⢁✩*⢄⢁✧⡠*✩⡈⡠✦ - ─╯

╭✦⢄✩*⢄⢁ ☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎۫۬👑⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸ ⡠*✩⡠✦╮
│╭─────────────────
││  「 ꪹ͜𓂃͡Aᴜᴅɪᴏs ᴇғᴇᴄᴛᴏs 」
│├━━━━━━━━━━━━━━━━╯
││🎤𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘦 𝘈 𝘜𝘯𝘢 𝘕𝘰𝘵𝘢 𝘋𝘦 𝘈𝘶𝘥𝘪𝘰
││🎤✎ _!bass_
││🎤✎ _!blown_
││🎤✎ _!deep_
││🎤✎ _!earrape_
││🎤✎ _!fast_
││🎤✎ _!fat_
││🎤✎ _!nightcore_
││🎤✎ _!reverse_
││🎤✎ _!robot_
││🎤✎ _!slow_
││🎤✎ _!smooth_
││🎤✎ _!tupai_
│╰─────────────────
╰─ - ✦⢄⢁✩*⢄⢁✧⡠*✩⡈⡠✦ - ─╯

╭✦⢄✩*⢄⢁ ☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎۫۬👑⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸ ⡠*✩⡠✦╮
│╭─────────────────
││  「 ꪹ͜𓂃͡Hᴇʀʀᴀᴍɪᴇɴᴛᴀs 」
│├━━━━━━━━━━━━━━━━╯
││⚙️✎ _!inspect *<link wa_gc>*_
││⚙️✎ _!chatgpt *<texto>*_
││⚙️✎ _!delchatgpt_
││⚙️✎ _!gptvoz *<texto>*_
││⚙️✎ _!dall-e *<texto>*_
││⚙️✎ _!spamwa *<numero|texto|cantidad>*_
││⚙️✎ _!tamaño *<cantidad> <imagen / video>*_
││⚙️✎ _!readviewonce *<imagen / video>*_
││⚙️✎ _!clima *<país> <ciudad>*_
││⚙️✎ _!encuesta *<texto1|texto2...>*_
││⚙️✎ _!afk *<motivo>*_
││⚙️✎ _!ocr *<responde a imagen>*_
││⚙️✎ _!hd *<responde a imagen>*_
││⚙️✎ _!acortar *<enlace / link / url>*_
││⚙️✎ _!calc *<operacion math>*_
││⚙️✎ _!del *<mensaje>*_
││⚙️✎ _!whatmusic *<audio>*_
││⚙️✎ _!readqr *<imagen (QR)>*_
││⚙️✎ _!qrcode *<texto>*_
││⚙️✎ _!readmore *<texto1| texto2>*_
││⚙️✎ _!styletext *<texto>*_
││⚙️✎ _!traducir *<texto>*_
││⚙️✎ _!nowa *<numero>*_
││⚙️✎ _!horario_
││⚙️✎ _!dropmail
│╰─────────────────
╰─ - ✦⢄⢁✩*⢄⢁✧⡠*✩⡈⡠✦ - ─╯

╭✦⢄✩*⢄⢁ ☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎۫۬👑⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸ ⡠*✩⡠✦╮
│╭─────────────────
││      「 ꪹ͜𓂃͡R ᴘ ɢ 」
│├━━━━━━━━━━━━━━━━╯
││👾✎️ _!adventure_
││👾✎️ _!cazar_
││👾✎️ _!cofre_
││👾✎️ _!balance_
││👾✎️ _!claim_
││👾✎ _!heal_
││👾✎️ _!lb_
││👾✎️ _!levelup_
││👾✎️ _!myns_
││👾✎️ _!perfil_
││👾✎️ _!work_
││👾✎️ _!minar_
││👾✎️ _!minar2_
││👾✎️ _!buy_
││👾✎️ _!buyall_
││👾✎️ _!verificar_
││👾✎️ _!robar *<cantidad> <@tag>*_
││👾✎️ _!transfer *<tipo> <cantidad> <@tag>*_
││👾✎️ _!unreg *<numero de serie>*_
│╰─────────────────
╰─ - ✦⢄⢁✩*⢄⢁✧⡠*✩⡈⡠✦ - ─╯

╭✦⢄✩*⢄⢁ ☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎۫۬👑⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸ ⡠*✩⡠✦╮
│╭─────────────────
││     「 ꪹ͜𓂃͡Sᴛɪᴄᴋᴇʀ 」
│├━━━━━━━━━━━━━━━━╯
││🧿✎ _!sticker *<responder a imagen o video>*_
││🧿✎ _!sticker *<enlace / link / url>*_
││🧿✎ _!sticker2 *<responder a imagen o video>*_
││🧿✎ _!sticker2 *<enlace / link / url>*_
││🧿✎ _!s *<responder a imagen o video>*_
││🧿✎ _!s *<enlace / link / url>*_
││🧿✎ _!emojimix *<emoji 1>&<emoji 2>*_
││🧿✎ _!scircle *<imagen>*_
││🧿✎ _!sremovebg *<imagen>*_
││🧿✎ _!semoji *<tipo> <emoji>*_
││🧿✎ _!qc *<texto>*_
││🧿✎ _!attp *<texto>*_
││🧿✎ _!attp2 *<texto>*_
││🧿✎ _!attp3 *<texto>*_
││🧿✎ _!ttp *<texto>*_
││🧿✎ _!ttp2 *<texto>*_
││🧿✎ _!ttp3 *<texto>*_
││🧿✎ _!ttp4 *<texto>*_
││🧿✎ _!ttp5 *<texto>*_
││🧿✎ _!pat *<@tag>*_
││🧿✎ _!slap *<@tag>*_
││🧿✎ _!kiss *<@tag>*_
││🧿✎ _!dado_
││🧿✎ _!wm *<packname> <author>*_
││🧿✎ _!stickermarker *<efecto> <imagen>*_
││🧿✎ _!stickerfilter *<efecto> <imagen>*_
│╰─────────────────
╰─ - ✦⢄⢁✩*⢄⢁✧⡠*✩⡈⡠✦ - ─╯`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '🌹⸽⃕  𝕾𝖆𝖐𝖚𝖗𝖆 - 𝕭𝖔𝖙 - 𝕷𝖎𝖙𝖊 - 𝕸𝕯 🌸⸽⃕✰', "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🧩');
  } catch {
    conn.reply(m.chat, '🧸 *Ocurrió Un Error*', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|menú|allmenu|help|menucompleto)$/i;
handler.register = true
export default handler;
