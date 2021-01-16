function getDayNumberByName(monthName) {
    const months = {
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5,
        saturday: 6,
        sunday: 7
    }

    return months.[monthName];
}

const DateHelper = {
    getDayNumberByName
}

export default DateHelper;