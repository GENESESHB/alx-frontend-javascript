interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const printTeacher = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string,  lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework = () : string => 'Currently working';
  displayName = () : string => `${this.firstName}`;

}
interface studentConstructor {
  new (firstName: string, lastName: string) :  StudentClass;
}

interface StudentClass  {
  firstName: string;
  lastName: string;
  workOnHomework: () => string;
  displayName: () => string;
}

const result: string = printTeacher("Yasin", "Fouad");
console.log(result);
const student = new StudentClass("Paul", "jerry");
console.log(student.displayName())
console.log(student.workOnHomework())
