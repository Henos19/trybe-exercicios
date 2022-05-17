function employeesInfo(name) {
  const employerInfo = {
    name: name,
    email: `${name}@trybe.com`,
  };
  return employerInfo;
}

const newEmloyees = (func) => {
  const employees = {
    id1: {
      fullname: func('Pedro Guerra').name,
      resEmail: func('Pedro Guerra').email,
    },
    id2: {
      fullname: func('Luiza Drumond').name,
      resEmail: func('Luiza Drumond').email,
    },
    id3: {
      fullname: func('Carla Paiva').name,
      resEmail: func('Carla Paiva').email,
    },
  };

  return employees;
};

console.log(newEmloyees(employeesInfo));