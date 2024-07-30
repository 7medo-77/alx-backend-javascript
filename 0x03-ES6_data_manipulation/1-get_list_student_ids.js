export default function getListStudentIds(objects) {
  return Array.isArray(objects) ? objects.map((object) => object.id) : [];
}
