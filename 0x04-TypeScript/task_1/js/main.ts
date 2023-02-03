interface Teacher {
    readonly firstName : string,
    readonly lastName : string,
    fullTimeEmployee? : boolean,
    yearsOfExperience : number,
    location : string,
    contract: boolean;
  [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher (firstName : string,  lastName : string): string {
    return `${firstName[0]}. ${lastName}`;
}

interface printTeacher {
    (firstName : string,  lastName : string): string;
}