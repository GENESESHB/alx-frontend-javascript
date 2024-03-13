interface DirectorInterface {
    workFromHome: () => string;
    getCoffeeBreak: () => string;
    workDirectorTasks: () => string;
}

interface TeacherInterface {
    workFromHome: () => string;
    getCoffeeBreak: () => string;
    workTeacherTasks: () => string;
}

class Director implements DirectorInterface {
    workFromHome = (): string => 'Working from home';
    getCoffeeBreak = (): string => 'Getting a coffee break';
    workDirectorTasks = (): string => 'Getting to director tasks';
}
class Teacher implements TeacherInterface {
    workFromHome = (): string => 'Cannot work from home';
    getCoffeeBreak = (): string => 'Cannot have a break';
    workTeacherTasks = (): string => 'Getting to work';
}

const createEmployee = (salary:  number | string) : Teacher | Director => typeof salary === 'number' && salary < 500 ? new Teacher() : new Director();



const isDirector = (employee: Teacher | Director) : boolean => employee instanceof Director; 
const executeWork = (employee: Teacher | Director) : void => {
    const work = employee instanceof Teacher ? employee.workTeacherTasks() : employee.workDirectorTasks();
    console.log(work);
};
executeWork(createEmployee(200));
executeWork(createEmployee(1000));

type Subjects = "Math" | "History";
const teachClass = (todayClass: Subjects) : string => {
    return todayClass === "Math" ? "Teaching Math" : "Teaching History";
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
