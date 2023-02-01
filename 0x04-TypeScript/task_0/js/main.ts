interface Student {
    firstName : string; 
    lastName : string; 
    age : number; 
    location : string;
}

const student1: Student = {
    firstName : "Dorothy",
    lastName : "Oyera",
    age : 15, 
    location : "Kampala",
};

const student2: Student = {
    firstName : "Kiran",
    lastName : "Oyera",
    age : 10, 
    location : "Mbarara",
};

const studentsList = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((obj) => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');
  cellName.textContent = obj.firstName;
  cellLocation.textContent = obj.location;
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);