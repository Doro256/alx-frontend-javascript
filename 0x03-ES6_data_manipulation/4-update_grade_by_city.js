export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const currentGrade = newGrades.find((grade) => grade.studentId === student.id);
    return { ...student, grade: currentGrade ? currentGrade.grade : 'N/A' };
  });
}
