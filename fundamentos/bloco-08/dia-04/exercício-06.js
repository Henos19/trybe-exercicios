const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  return students.map((estudante, index) => {
    const studentInfo = {
      name: estudante,
      average: grades[index].reduce((medium, grade) => medium + grade) / grades[index].length,
    }

    return studentInfo
  });
}

console.log(studentAverage());
