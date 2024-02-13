//1
const dayData = (dayNumbers) => {
        const days = {
            1: 'Senin',
            2: 'Selasa',
            3: 'Rabu',
            4: 'Kamis',
            5: 'Jumat',
            6: 'Sabtu',
            7: 'Minggu'
        }

        return days[dayNumbers]
    }
    //2
function dataWidth(width) {
    return `${width}`
}

function dataHeight(height) {
    return `${height}`
}


//3
function nilaiRelasi(nilai) {
    return `${nilai}`
}

module.exports = {
    dayData,
    nilaiRelasi,
    dataWidth,
    dataHeight
}