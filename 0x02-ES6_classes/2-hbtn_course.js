class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (!Number.isInteger(length) || (length < 0)) {
      throw new TypeError('Length must be a number');
    }

    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudent) {
    if (!Array.isArray(newStudent)) {
      throw new TypeError('Students must be an array');
    }
    if (!newStudent.every((newStudent) => typeof newStudent === 'string')) {
      throw new TypeError('Name must be a string');
    }
    this._students = newStudent;
  }
}

export default HolbertonCourse;
