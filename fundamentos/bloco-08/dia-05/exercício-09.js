const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const transformYearSeasons = ({ spring, summer, autumn, winter }) => [...winter, ...spring, ...summer, ...autumn]

console.log(transformYearSeasons(yearSeasons));