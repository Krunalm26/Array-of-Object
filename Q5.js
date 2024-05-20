
const students = [
    { name: "Krunal", age: 22, grade: "A" },
    { name: "Deep", age: 22, grade: "B" },
    { name: "Kashyap", age: 21, grade: "C" }
];

students.forEach(student => {
    if (student.age > 21) {
        console.log(student.name);
    }
});
