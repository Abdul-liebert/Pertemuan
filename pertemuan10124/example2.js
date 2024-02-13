const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

//cek folder,ada atau tidak jika tidak maka buatkan foldernya
const directory = './db'
if (!fs.existsSync(directory)) {
    fs.mkdir(directory)
}

//cek file
const checkFile = './db/data.json'
if (!fs.existsSync(checkFile)) {
    fs.writeFileSync(checkFile, '[]', 'utf-8')
}

const questionExample = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (jawaban) => {
            resolve(jawaban)
        })

    })
}
const addData = async() => {
    const nama = await questionExample("Masukan nama anda : ")
    const umur = await questionExample("Masukan umur anda : ")
    const hobby = await questionExample("Masukan hobi anda : ")

    const data = { nama, umur, hobby }
    const fileDb = fs.readFileSync('./db/data.json', 'utf-8')
    const dataDiri = JSON.parse(fileDb)

    dataDiri.push(data)
    fs.writeFileSync('./db/data.json', JSON.stringify(dataDiri))
    console.log("your data Successfully added")
    rl.close()
}

addData()