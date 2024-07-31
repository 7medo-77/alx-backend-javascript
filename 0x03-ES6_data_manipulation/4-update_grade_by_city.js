export default function updateStudentGradeByCity(array, city, grade) {
  return array.filter((student) => student.location === city)
    .map((array) => ({
      ...array,
      grade: grade.filter((grade) => (grade.studentId === array.id))[0]
        ? grade.filter((grade) => (grade.studentId === array.id))[0].grade
        : 'N/A',
    }));
}
