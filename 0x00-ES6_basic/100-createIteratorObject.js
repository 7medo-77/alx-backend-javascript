export default function createIteratorObject(report) {
  const employeeComplex = Object.values(report.allEmployees)
    .map((element) => element.map((employee) => employee));
  const employeeArray = [];

  for (const employees of employeeComplex) {
    for (const employee of employees) {
      employeeArray.push(employee);
    }
  }

  return {
    data: employeeArray,
    [Symbol.iterator]() {
      let index = 0;
      return {
        next: () => {
          if (index < this.data.length) {
            index += 1;
            return ({ value: this.data[index - 1], done: false });
          }
          return ({ value: undefined, done: true });
        },
      };
    },
  };
}
