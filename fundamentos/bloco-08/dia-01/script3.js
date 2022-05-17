const checkAnswers = (array1, array2) => {
  let pontuation = 0;
  for (let range = 0; range < array2.length; range += 1) {
    if (array2[range] === array1[range]) {
      pontuation += 1;
    } else if (array2[range] === '') {

    } else {
      pontuation -= 0.5;
    }
  }
  return pontuation;
}

const correction = (gab, test, func) => {
  return func(gab, test);
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(correction(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));