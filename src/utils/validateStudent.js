import { students } from "../data/students";

export function validateStudent(name) {
  return students.some(
    (student) => student.toLowerCase() === name.trim().toLowerCase()
  );
}