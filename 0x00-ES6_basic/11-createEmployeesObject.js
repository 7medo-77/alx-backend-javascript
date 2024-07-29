export default function createEmployeesObject(departmentName, employees) {
  // const employeeArray = employees.map((employee) => employee);

  const department = {
    [departmentName]: employees,
  };

  return department;
}
