const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Masukan nama lengkap : ', (nama) => {
    rl.question('Masukan umur anda : ', (umur) => {
        rl.question('Masukan nama sekolah : ', (sekolah) => {
            // console.log(`Nama lengkap saya adalah ${answer} dan umur saaya adalah ${umur} tahun. Sekarang saya sekolah di ${sekolah}`)

            const data = { nama, umur, sekolah }
            const fileDb = fs.readFileSync('./db/data.json', 'utf8')
            const dataDiri = JSON.parse(fileDb)

            dataDiri.push(data)
            fs.writeFileSync('./db/data.json', JSON.stringify(dataDiri))
            console.log("Terima kasih sudah memperkenalkan diri anda")


            rl.close()
        })
    })

})