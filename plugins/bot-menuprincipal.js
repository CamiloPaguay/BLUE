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
    //await conn.reply(m.chat, '*ꪹ͜𓂃͡𝗖𝗮𝗿𝗴𝗮𝗻𝗱𝗼 𝗘𝗹 𝗠𝗲𝗻𝘂 𝗗𝗲𝗹 𝗕𝗼𝘁...𓏲੭*', fkon, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '👋 ¡𝗛𝗼𝗹𝗮!', body: '𝖲𝖺𝗄𝗎𝗋𝖺𝖡𝗈𝗍𝖫𝗂𝗍𝖾-𝖬𝖣 🌹🌻', sourceUrl: global.yt, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('📍');
    await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key } })
  let txt =`🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮

  📌 *Hola,* ${taguser}

  📊 _*< TUS ESTADÍSTICAS />*_
  
  🎟️ •  *Tokens:* ${joincount}
  🎖️ •  *Nivel:* ${level}
  💰 •  *MayCoins:* ${money}
  📈 •  *Experiencia:* ${exp}
  

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

  
 _*< FRASES & TEXTOS 💬 />*_

  🌹 _.piropo_
  📖 _.oracion_
  📝 _.refran_
  🛌 _.Buenasnoches_
  💡 _.consejo_
  🍂 _.chiste_
  🏖️ _.iqtest_
  💘 _.fraseromantica_
  📖 _.historiaromantica_
  🧸 _.personalidad_
  🔮 _.horóscopo_
 
  _*< 🎮 JUEGOS 🕹️ />*_

  🧮 _.mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
  🎭 _.fake *<txt1> <@tag> <txt2>*_
  ✊✋✌️ _.ppt *<papel / tijera /piedra>*_
  👨‍💼 _.prostituto *<nombre / @tag>*_
  👩‍💼 _.prostituta *<nombre / @tag>*_
  🌈 _.gay2 *<nombre / @tag>*_
  🌈 _.lesbiana *<nombre / @tag>*_
  🐒 _.pajero *<nombre / @tag>*_
  🐵 _.pajera *<nombre / @tag>*_
  🎉 _.puto *<nombre / @tag>*_
  🎉 _.puta *<nombre / @tag>*_
  🎮 _.manco *<nombre / @tag>*_
  🎮 _.manca *<nombre / @tag>*_
  🐀 _.rata *<nombre / @tag>*_
  ❤️ _.love *<nombre / @tag>*_
  🕵️ _.doxear *<nombre / @tag>*_
  ❓ _.pregunta *<txt>*_
  ⚔️ _.suitpvp *<@tag>*_
  🎰 _.slot *<apuesta>*_
  🎲 _.ttt *<nombre sala>*_
  ❌ _.delttt_
  ❓ _.acertijo_
  💐 _.ship *<nombre / nombre>*_
  🤖 _.simi *<txt>*_
  🏆 _.top *<txt>*_
  🌈 _.topgays_
  📺 _.topotakus_
  💑 _.formarpareja_
  🤔 _.verdad_
  😈 _.reto_
  🎵 _.cancion_
  🕵️ _.pista_
  🧞 _.akinator_
  🔍 _.wordfind_


 _*< 🎲 ACT./DESACT. FUNC. 🎮 />*_

 📝 _.${usedPrefix}enable *welcome*_
  🚫 _.${usedPrefix}disable *welcome*_
  😈 _.${usedPrefix}enable *modohorny*_
  ❌ _.${usedPrefix}disable *modohorny*_
  🔗 _.${usedPrefix}enable *antilink*_
  ⛔ _.${usedPrefix}disable *antilink*_
  📎 _.${usedPrefix}enable *antilink2*_
  🚷 _.${usedPrefix}disable *antilink2*_
  🔍 _.${usedPrefix}enable *detect*_
  🙅 _.${usedPrefix}disable *detect*_
  🎵 _.${usedPrefix}enable *audios*_
  🙈 _.${usedPrefix}disable *audios*_
  🖼️ _.${usedPrefix}enable *autosticker*_
  🙉 _.${usedPrefix}disable *autosticker*_
  👁️ _.${usedPrefix}enable *antiviewonce*_
  🙊 _.${usedPrefix}disable *antiviewonce*_
  🚯 _.${usedPrefix}enable *antitoxic*_
  ✅ _.${usedPrefix}disable *antitoxic*_
  🚸 _.${usedPrefix}enable *antitraba*_
  ✔️ _.${usedPrefix}disable *antitraba*_
  🚳 _.${usedPrefix}enable *antiarabes*_
  ☑️ _.${usedPrefix}disable *antiarabes*_
  👑 _.${usedPrefix}enable *modoadmin*_
  🆗 _.${usedPrefix}disable *modoadmin*_
  🚭 _.${usedPrefix}enable *antidelete*_
  🆒 _.${usedPrefix}disable *antidelete*_

 _*< 📥 DESCARGAS 📤 />*_

  🎵 _.play *<txt>*_
  🎶 _.play2 *<txt>*_
  🎼 _.play.1 *<txt>*_
  🎧 _.play.2 *<txt>*_
  📚 _.playdoc *<txt>*_
  📖 _.playdoc2 *<txt>*_
  📋 _.playlist *<txt>*_
  🎞️ _.ytshort *<url>*_
  🎵 _.ytmp3 *<url>*_
  📚 _.ytmp3doc *<url>*_
  🎥 _.ytmp4 *<url>*_
  📖 _.ytmp4doc *<url>*_
  🎬 _.videodoc *<url>*_
  🎵 _.spotify *<txt>*_
  👍 _.facebook *<url>*_
  📸 _.instagram *<url>*_
  📖 _.igstory *<usr>*_
  🎥 _.tiktok *<url>*_
  📸 _.tiktokimg *<url>*_
  📖 _.pptiktok *<usr>*_
  📂 _.mediafire *<url>*_
  📌 _.pinterest *<txt>*_
  📂 _.gitclone *<url>*_
  📂 _.gdrive *<url>*_
  🐦 _.twitter *<url>*_
  🎵 _.ringtone *<txt>*_
  🎵 _.soundcloud *<txt>*_
  🎨 _.stickerpack *<url>*_
  🖼️ _.wallpaper *<txt>*_
  📱 _.dapk2 *<url>*_
  🙊 _.xnxxdl *<url>*_ (🔞)
  😈 _.xvideosdl *<url>*_ (🔞)


 _*< 🔍 BUSCADORES 📚 />*_

  🐱 _.githubsearch *<txt>*_
  🎬 _.pelisplus *<txt>*_
  📱 _.modapk *<txt>*_
  🎨 _.stickersearch *<txt>*_
  🖼️ _.stickersearch2 *<txt>*_
  🚫 _.xnxxsearch *<txt>*_
  📺 _.animeinfo *<txt>*_
  🌐 _.google *<txt>*_
  🎵 _.letra *<txt>*_
  📖 _.wikipedia *<txt>*_
  🎥 _.ytsearch *<txt>*_
  📱 _.playstore *<txt>*_


_*< 👥 GRUPOS 🌐 />*_

  ➕ _.add *num>*_
  🚫 _.kick *<@tag>*_
  🚷 _.kick2 *<@tag>*_
  📝 _.listanum *<txt>*_
  🦵 _.kicknum *<txt>*_
  🌐 _.grupo *<abrir/cerrar>*_
  ⏰ _.grouptime *<opcion> <tiempo>*_
  ⬆️ _.promote *<@tag>*_
  ⬇️ _.demote *<@tag>*_
  ℹ️ _.infogroup_
  🔄 _.resetlink_
  🔗 _.link_
  📝 _.setname *<txt>*_
  📝 _.setdesc *<txt>*_
  📞 _.invocar *<txt>*_
  📝 _.setwelcome *<txt>*_
  📝 _.setbye *<txt>*_
  🙈 _.hidetag *<txt>*_
  🎵 _.hidetag *<audio>*_
  🎥 _.hidetag *<video>*_
  🖼️ _.hidetag *<img>*_
  ⚠️ _.warn *<@tag>*_
  ✅ _.unwarn *<@tag>*_
  📝 _.listwarn_
  👻 _.fantasmas_
  🔄 _.destraba_
  🖼️ _.setpp *<img>*_
  👥 _admins *<txt>*_ (sin prefijo)


_*< CONVERTIDORES 🔄 />*_

  🎨 _.toanime *<img>*_
  🎞️ _.togifaud *<video>*_
  🖼️ _.toimg *<sticker>*_
  🎵 _.tomp3 *<video>*_
  🎙️ _.tomp3 *<nota de voz>*_
  📼 _.toptt *<video / audio>*_
  📹 _.tovideo *<sticker>*_
  🔗 _.tourl *<video / img / audio>*_
  🗣️ _.tts *<idioma> <txt>*_
  🎤 _.tts *<efecto> <txt>*_
  

_*< EFECTOS & LOGOS 🎨 />*_

  🖌️ _.logos *<efecto> <txt>*_
  🎄 _.logochristmas *<txt>*_
  ❤️ _.logocorazon *<txt>*_
  💬 _.ytcomment *<txt>*_
  😈 _.hornycard *<@tag>*_
  😍 _.simpcard *<@tag>*_
  😂 _.lolice *<@tag>*_
  🤪 _.itssostupid_
  🎆 _.pixelar_
  🌫️ _.blur_


_*< ALEATORIO 🎲 />*_

  🎵 _.kpop *<blackpink/exo/bts>*_
  ⚽ _.cristianoronaldo_
  ⚽ _.messi_
  🐱 _.cat_
  🐶 _.dog_
  😂 _.meme_
  🎤 _.itzy_
  🎤 _.blackpink_
  🎄 _.navidad_
  🏔️ _.wpmontaña_
  🎮 _.pubg_
  🎮 _.wpgaming_
  🎨 _.wpaesthetic_
  🎨 _.wpaesthetic2_
  🎲 _.wprandom_
  🖼️ _.wallhp_
  🚗 _.wpvehiculo_
  🏍️ _.wpmoto_
  ☕ _.coffee_
  🍢 _.pentol_
  🎨 _.caricatura_
  🌐 _.ciberespacio_
  💻 _.technology_
  🐱 _.doraemon_
  👨‍💻 _.hacker_
  🌍 _.planeta_
  🎭 _.randomprofile_

 _*< 🎧 EFECTOS P. AUDIOS />*_

*- Responde a un audio o nota de voz.*

  🎸 _${usedPrefix}bass_
  🎈 _${usedPrefix}blown_
  🌊 _${usedPrefix}deep_
  📢 _${usedPrefix}earrape_
  ⏩ _${usedPrefix}fast_
  🍔 _${usedPrefix}fat_
  🌙 _${usedPrefix}nightcore_
  🔁 _${usedPrefix}reverse_
  🤖 _${usedPrefix}robot_
  🐢 _${usedPrefix}slow_
  🌤️ _${usedPrefix}smooth_
  🐿️ _${usedPrefix}tupai_
  

 _*< 🛠️ HERRAMIENTAS />*_

  🖌️ _.wa *<num>*_
  🔍 _.inspect *<wagc_url>*_
  💬 _.chatgpt *<txt>*_
  🗑️ _.delchatgpt_
  🗣️ _.gptvoz *<txt>*_
  🎨 _.dall-e *<txt>*_
  📲 _.spamwa *num|txt|cant>_
  📏 _.tamaño *<cant> <img / video>*_
  👁️ _.readviewonce *<img / video>*_
  ☁️ _.clima *<país> <ciudad>*_
  📊 _.encuesta *<txt1|txt2>*_
  🚫 _.afk *<motivo>*_
  📖 _.ocr *<responde a img>*_
  🖼️ _.hd *<responde a img>*_
  🔗 _.acortar *<url>*_
  🧮 _.calc *<operacion>*_
  ❌ _.del *<msj>*_
  🎵 _.whatmusic *<audio>*_
  📰 _.readqr *<img>*_
  🏷️ _.qrcode *<txt>*_
  📚 _.readmore *<txt1|txt2>*_
  🎨 _.styletext *<txt>*_
  🌐 _.traducir *<txt>*_
  📞 _.nowa *num>_
  🦠 _.covid *<pais>*_
  ⏰ _.horario_
  📧 _.dropmail_
  📸 _.igstalk *<usr>*_
  🎥 _.tiktokstalk *<usr>*_
  🖼️ _.img *<txt>*_

_*< 💰 ECONOMÍA />*_

  🏞️ _.adventure_
  🏹 _.cazar_
  🎁 _.cofre_
  💼 _.balance_
  🎟️ _.claim_
  💊 _.heal_
  📊 _.lb_
  ⬆️ _.levelup_
  📝 _.myns_
  📄 _.perfil_
  💼 _.work_
  ⛏️ _.minar_
  ⛏️ _.minar2_
  🛍️ _.buy_
  🛒 _.buyall_
  ✅ _.verificar_
  🕵️ _.robar *<cant> <@tag>*_
  💸 _.transfer *<tipo> <cant> <@tag>*_
  🚫 _.unreg *<sn>*_

_*< 🎨 STICKERS />*_

  🖼️ _.sticker *<responder a img o video>*_
  🌐 _.sticker *<url>*_
  🖼️ _.sticker2 *<responder a img o video>*_
  🌐 _.sticker2 *<url>*_
  🖼️ _.s *<responder a img o video>*_
  🌐 _.s *<url>*_
  😃 _.emojimix *<emoji 1>&<emoji 2>*_
  ⭕ _.scircle *<img>*_
  🚫 _.sremovebg *<img>*_
  😃 _.semoji *<tipo> <emoji>*_
  📝 _.qc *<txt>*_
  📝 _.attp *<txt>*_
  📝 _.attp2 *<txt>*_
  📝 _.attp3 *<txt>*_
  📝 _.ttp *<txt>*_
  📝 _.ttp2 *<txt>*_
  📝 _.ttp3 *<txt>*_
  📝 _.ttp4 *<txt>*_
  📝 _.ttp5 *<txt>*_
  🐾 _.pat *<@tag>*_
  ✋ _.slap *<@tag>*_
  💋 _.kiss *<@tag>*_
  🎲 _.dado_
  📦 _.wm *<packname> <autor>*_
  🖌️ _.stickermarker *<efecto> <img>*_
  🎨 _.stickerfilter *<efecto> <img>*_

_*< 👑 PROPIETARIO Y MODS. />*_

  ➡️ _> *<funcion>*_
  ➡️ _=> *<funcion>*_
  💲 _$ *<funcion>*_
  📋 _.dsowner_
  📝 _.setprefix *<prefijo>*_
  🔄 _.resetprefix_
  🤖 _.autoadmin_
  📃 _.grouplist_
  🎮 _.chetar_
  🚪 _.leavegc_
  🏦 _.cajafuerte_
  🚫 _.blocklist_
  ➕ _.addowner *<@tag / num>*_
  ➖ _.delowner *<@tag / num>*_
  🚫 _.block *<@tag / num>*_
  ✅ _.unblock *<@tag / num>*_
  ✅ _.enable *restrict*_
  ❌ _.disable *restrict*_
  ✅ _.enable *autoread*_
  ❌ _.disable *autoread*_
  ✅ _.enable *public*_
  ❌ _.disable *public*_
  ✅ _.enable *pconly*_
  ❌ _.disable *pconly*_
  ✅ _.enable *gconly*_
  ❌ _.disable *gconly*_
  ✅ _.enable *anticall*_
  ❌ _.disable *anticall*_
  ✅ _.enable *antiprivado*_
  ❌ _.disable *antiprivado*_
  ✅ _.enable *modejadibot*_
  ❌ _.disable *modejadibot*_
  ✅ _.enable *audios_bot*_
  ❌ _.disable *audios_bot*_
  ✅ _.enable *antispam*_
  ❌ _.disable *antispam*_
  📝 _.msg *<txt>*_
  🚫 _.banchat_
  ✅ _.unbanchat_
  🔄 _.resetuser *<@tag>*_
  🚫 _.banuser *<@tag>*_
  ✅ _.unbanuser *<@tag>*_
  💎 _.dardiamantes *<@tag> <cant>*_
  ➕ _.añadirxp *<@tag> <cant>*_
  🚫 _.banuser *<@tag>*_
  📣 _.bc *<txt>*_
  📣 _.bcchats *<txt>*_
  📣 _.bcgc *<txt>*_
  🎵 _.bcgc2 *<aud>*_
  🎥 _.bcgc2 *<vid>*_
  🖼️ _.bcgc2 *<img>*_
  📣 _.bcbot *<txt>*_
  🗑️ _.cleartpm_
  🔄 _.restart_
  🔄 _.update_
  🚫 _.banlist_
  ➕ _.addprem *<@tag> <tiempo>*_
  ➕ _.addprem2 *<@tag> <tiempo>*_
  ➕ _.addprem3 *<@tag> <tiempo>*_
  ➕ _.addprem4 *<@tag> <tiempo>*_
  ➖ _.delprem *<@tag>*_
  📃 _.listcmd_
  🖼️ _.setppbot *<responder a img>*_
  ➕ _.addcmd *<txt>*_
  ➖ _.delcmd_
  💾 _.saveimage_
  🖼️ _.viewimage_`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '𝙎𝙤𝙢𝙤𝙨 𝙚𝙡 𝙢𝙚𝙟𝙤𝙧 𝙗𝙤𝙩 𝙙𝙚 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥', "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
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
