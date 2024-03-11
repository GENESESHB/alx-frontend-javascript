// 4-update_grade_by_city.js

/**
 * Returns an array of students for a specific city with their new grades.
 * @param {Array} students - An array of student objects.
 * @param {string} city - The city to filter by.
 * @param {Array} newGrades - An array of grade objects (with studentId and grade).
 * @returns {Array} - An array of updated student objects.
 */
function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return []; // Return an empty array if input is not an array
  }

  const updatedStudents = students.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
    const grade = matchingGrade ? matchingGrade.grade : 'N/A';
    return { ...student, grade };
  });

  return updatedStudents.filter((student) => student.location === city);
}

export default updateStudentGradeByCity;
