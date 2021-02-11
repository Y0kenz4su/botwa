let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Yokenza
Script: @Nurotomo
Github: 
https://github.com/Y0kenz4su/botwa

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @yokenza_
➥ YouTube:
https://youtube.com/channel/UCHxj12XPzTlfFC9HuqqdYUA

*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ SmartFren: 0882-2144-9680
╠➥ Dana: 0882-2144-9680
╠➥ Ovo: 0882-2144-9680
║>Request? Wa.me/6281357302007
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

