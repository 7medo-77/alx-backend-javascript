export default function getStudentIdsSum(objects) {
  return objects.map((object) => object.id).reduce((prev, next) => prev + next);
}
