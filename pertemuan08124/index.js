const names = "Abdoel Liebert"
    // console.log(names)

const v1 = 200
const v2 = 100

const decre = v1 - v2
    // console.log(decre)

function selfData(name) {
    return `Hello fellas! My name is ${name}, i just want to say Hello World!!`
}

// console.log(selfData("Abdoel"))

const getKelas = (id) => {
    const kelas =
        id === 0 ? "SIJA" :
        id === 1 ? "RPL" :
        id === 2 ? "MID" :
        undefined;
    return [id, kelas]
}

//Synchronous

const functionKelas = (kode, deskripsi) => {
    return { kode, deskripsi }
}

const nameKelas = (kodeid) => {
    const getName =
        kodeid === 1 ? functionKelas("SIJA", "Sistem Informasi Jaringan dan Aplikasi") :
        kodeid === 2 ? functionKelas("RPL", "Rekayasa Perangkat Lunak") :
        kodeid === 3 ? functionKelas("DKV", "Desain Komunikasi Visual") :
        undefined
    return { kodeid, getName }
}

// console.log(nameKelas(1))

const getItem = (kode, item, desc, effect, price) => {
    return { kode, item, desc, effect, price }
}

const getGameItem = (num) => {
    const item =
        num === 1 ? getItem(
            "Imo",
            "Immortal",
            "Unique Passive - Immortal: Resurrect 2.5s upon death and gets 16% Max HP and 220-1200 shield that lasts for 3s. (Scales with level) This effect has a CD of 210s.",
            "+800 HP +30 Physical Defense",
            2120
        ) :
        num === 2 ? getItem(
            "HS",
            "Hunter Strike",
            "Unique Attribute: +15 Physical PEN Unique Passive - Retribution: Deals damage to an enemy hero or Creepfor 5 times in a row and improves MovemSpeed by 5% that decays rapidly over 3s.",
            " + 80 physical attack + 10% CD reduction ",
            2010
        ) :

        undefined
    return { item }
}

// console.log(getGameItem(2))

//asyncrhonous

const funcKelas = (kode, deskripsi) => {
    return { kode, deskripsi }
}
const nameClass = (kodeid) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let getName =
                kodeid === 1 ? functionKelas("SIJA", "Sistem Informasi Jaringan dan Aplikasi") :
                kodeid === 2 ? functionKelas("RPL", "Rekayasa Perangkat Lunak") :
                kodeid === 3 ? functionKelas("DKV", "Desain Komunikasi Visual") :
                undefined
            resolve(getName)
        }, 1000);
    })
}

const array = [1, 2, 3]

nameClass(1).then((kelasSija) => {
    console.log(kelasSija)
})
nameClass(2).then((kelasRpl) => {
    console.log(kelasRpl)
})
nameClass(3).then((kelasRpl) => {
    console.log(kelasRpl)
})

array.forEach(
    kodeid => {
        nameClass(kodeid)
            .then((result) => {
                console.log(`Data untuk id ${kodeid}:`, result);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }
)

//require ('relasi')
const { dayData, nilaiRelasi, dataWidth, dataHeight } = require('./relasi.js')


//test-1

const libur = (dayNumbers) => {
    return dayNumbers > 6;
};

const printDayData = () => {
    for (let dayNumbers = 1; dayNumbers <= 7; dayNumbers++) {
        const day = dayData(dayNumbers);
        const holiday = libur(dayNumbers)

        if (day) {
            console.log(`${day}: ${holiday ? 'Libur' : 'Sekolah'}`)
        } else {
            console.log('Hari kiamat')
        }

    }
}

printDayData();

//test-2
const createObject = (width) => {
    let object = ''
    for (let i = 0; i < width; i++) {
        object += '*';
    }
    return object
}

const createRectangle = (height, width) => {
    let rectangle = ''
    for (let i = 0; i < height; i++) {
        rectangle += createObject(width) + '\n'
    }
    return rectangle
}

const print = () => {
    const width = dataWidth(10)
    const height = dataHeight(10)
    console.log(createRectangle(height, width))
}

print()

//test-3
const nilaiRapor = (nilai) => {
    switch (true) {
        case (nilai >= 91 && nilai <= 100):
            console.log("Terbaik");
            break;
        case (nilai >= 81 && nilai <= 90):
            console.log("Cukup Baik");
            break;
        case (nilai >= 61 && nilai <= 80):
            console.log("Baik");
            break;
        case (nilai >= 51 && nilai <= 60):
            console.log("Cukup");
            break;
        case (nilai >= 0 && nilai <= 50):
            console.log("Kurang");
            break;
        default:
            console.log("ajarin dong puh....sepuh");
            break;
    }
}

const printNilai = () => {
    const nilai = nilaiRelasi(90)
    nilaiRapor(nilai)
}

printNilai()