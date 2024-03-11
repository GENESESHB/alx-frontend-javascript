// 2-get_students_by_loc.js

/**
 * Returns an array of student objects located in a specific city.
 * @param {Array} students - An array of student objects.
 * @param {string} city - The city to filter by.
 * @returns {Array} - An array of student objects in the specified city.
 */
function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return []; // Return an empty array if input is not an array
  }

  return students.filter((student) => student.location === city);
}

export default getStudentsByLocation;
