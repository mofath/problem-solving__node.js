const grades = [73, 67, 38, 33];

const gradingStudents = (grades) => {
    return grades.map(grade => {
        if (grade < 38) return grade;
        return grade % 5 > 2 ? Math.ceil(grade / 5) * 5 : grade
    });
}


console.log(gradingStudents(grades));