// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal Hw Mods : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/C4OGXvdgseAAS8KM6uyXnO'
global.ig = '@henzz4368' // ubah aja
global.email = 'henzzxd01@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Henzz The Inti bumi' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6285711324080'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = 'Dajjal mods' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'Dajjaln mods' // ubah aja ini nama sticker
global.author = 'By - HenzzXD' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})