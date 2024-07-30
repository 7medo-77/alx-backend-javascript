export default function getStudentIdsSum(objects) {
  return objects.reduce((prev, next) => prev + next);
}
