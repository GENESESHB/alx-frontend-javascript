// 3-get_ids_sum.js

/**
 * Returns the sum of all student IDs.
 * @param {Array} students - An array of student objects.
 * @returns {number} - The sum of student IDs.
 */
function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0; // Return 0 if input is not an array
  }

  return students.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;
