function nameRel(name) {
    return `Hello! my name is ${name}`
}

function nameLoc(location) {
    return `I lived in ${location}`
}

function school(nameSch, schoolMaj) {
    const data = {
        nameSchool,
        majorName
    }
}

function abjadArr(abjad) {
    const old = ['a', 'b', 'c', 'd']
    if (abjad !== undefined && abjad === String) {
        old.push(abjad)
    } else {
        undefined
    }
    return old
}

function numDay(day) {
    switch (day) {
        case 1:
            return "It's Monday";
            break;
        case 2:
            return "It's Tuesday";
            break;
        case 3:
            return "It's Wednesday";
            break;
        case 4:
            return "It's Thursday";
            break;
        case 5:
            return "It's Friday";
            break;
        default:
            return "It' s Weekend asshole"
            break;
    }

}

module.exports = { nameRel, nameLoc, school, abjadArr, numDay }