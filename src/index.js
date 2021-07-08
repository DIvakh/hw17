// Конструктор:

function Student(name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.attendance = [];
    this.marks = [];
    const maxLengthArray = 10;
    this.attendance.length = maxLengthArray;
    this.marks.length = maxLengthArray;
}

// Возраст:

Student.prototype.getAge = function () {
    return new Date().getFullYear() - this.birthYear;
};

// Посещаемость:

Student.prototype.present = function () {
    const notInArray = -1;
    let index = this.attendance.findIndex(value => value === undefined);
    if (index === notInArray) {
        throw new Error('maximum size exceeded');
    }
    return (this.attendance[index] = true);
};

Student.prototype.absent = function () {
    const notInArray = -1;
    let index = this.attendance.findIndex(value => value === undefined);
    if (index === notInArray) {
        throw new Error('Maximum size exceeded!');
    }
    return (this.attendance[index] = false);
};

// Оценки:

Student.prototype.mark = function (markValue) {
    const notInArray = -1;
    const lowwerMark = 0;
    const higherMark = 10;
    let index = this.marks.findIndex(value => value === undefined);
    if (index === notInArray) {
        throw new Error('Maximum size exceeded!');
    }
    if (markValue < lowwerMark || markValue > higherMark) {
        throw new Error('Incorrect mark value!');
    }
    return (this.marks[index] = markValue);
};

// Успеваемость:

Student.prototype.summary = function () {
    const markThreshhold = 0.9;
    const averageThreshold = 9;
    try {
        let marksSum = this.marks.reduce((acc, val) => acc + val);
        let attendanceSum = this.attendance.map(val => Number(val)).reduce((acc, val) => acc + val);

        const arrLength = arr => arr.filter(el => el != undefined).length;

        let averageMark = marksSum / arrLength(this.marks);
        let averageAttendance = (attendanceSum / arrLength(this.attendance)).toFixed(1);

        if (averageMark > averageThreshold && averageAttendance > markThreshhold) {
            return 'Ути какой молодчинка!';
        } else if (
            (averageMark > averageThreshold && averageAttendance < markThreshhold) ||
            (averageMark < averageThreshold && averageAttendance > markThreshhold)
        ) {
            return 'Норм, но можно лучше';
        } else return 'Редиска!';
    } catch {
        throw new Error('No progress data!');
    }
};

//============================

const ivan = new Student('Ivan', 'Petrov', 1993);

ivan.getAge();
ivan.present();
ivan.absent();
ivan.mark(10);
ivan.summary();
