export default function getListStudentIds(studentIds) {
    if (!Array.isArray(studentIds)){
        return [];
    } else {
        return studentIds.map(studentId => studentId.id);
    }
}
 