enum TaskType {
    Urgent = 4,
    NotUrgent = 2,
    Info = 1
}

type Task = { name: string };

let username = 'Someone';
const tasks: string[] = [];
const tasksObj: Task[] = [];

const showTask = () => {
    const task = prompt('Bitte geben Sie eine Aufgabe ein:');
    tasks.push(task || '');
    const inputObject1 = { name: task || '' };
    tasksObj.push(inputObject1);

    // Log the task to the console
    console.log('Aufgabe erstellt ' + task + ' von ' + username);
}
showTask();
showTask();
showTask();

const filterTasks = (tasksArr: string[], direction: string) => {
    const tasksArrCopy = [...tasksArr];
    if(direction === 'rev') {
        tasksArrCopy.reverse();
    } else if(direction === 'no') {
        tasksArrCopy;
    } else if(direction === 'asc') {
        tasksArrCopy.sort((a, b) => a.localeCompare(b)); 
    }
    return tasksArrCopy.toString();
}

//! noch nicht fertig!

// if (array[0] === '') {
//   array.shift();
// } else if (array[1] === '') {
//   array.shift();
// } else if (array[2] === '') {
//   array.shift();
// }
// no good user input - clear the other array too
// if (!array.length) {
//   array2 = [];
// } else {
//   filterThem(array, 'asc');
//   filterThem2(array2, 'asc');
// }
//not urgent as default - fix later
// array2.forEach((e) => {
//   (e as any).type = TaskType.NotUrgent;
// });

// console.log('debug7 - before result outside');
// let resultOutside = 0;
// function addItAllUp(): void {
//   let result = 0;
//   for (let i = 0; i < 100; i++) {
//     for (let j = 0; j < 100; j++) {
//       for (let k = 0; k < 100; k++) {
//         result += i + j + k;
//       }
//     }
//   }
//   console.log('Die maximale Anzahl der Aufgaben ist: ' + result);
//   resultOutside = result;
// }

// if (array.length > 0 && array.length <= 3 && array2.length > 0 && array2.length <= 3) {
//   console.log('Die Anzahl der Aufgaben liegt zwischen 1 und 2.');
// } else if (array.length > resultOutside) {
//   console.log('Die Anzahl der Aufgaben liegt außerhalb des erwarteten Bereichs.');
// }

// processTasks();

// function filterThem(a: string[], b: string): string {
//   const ret = a.concat();
//   if (b === 'rev') {
//     ret.reverse();
//   } else if (b === 'no') {
//     ret;
//   } else if (b === 'asc') {
//     ret.sort((a, b) => a.localeCompare(b));
//   } else if (b === '') {
//     ret;
//   }
//   return ret.toString();
// }

// function filterThem2(a: Task[], b: string): string {
//   const ret = a.concat();
//   if (b === 'rev') {
//     ret.reverse();
//   } else if (b === 'no') {
//     ret;
//   } else if (b === 'asc') {
//     ret.sort((a, b) => b.name.localeCompare(a.name));
//   } else if (b === '') {
//     ret;
//   }

//   return ret.toString();
// }

// This function will proces all the tasks
// function processTasks(): void {
//   //Todo: implement later
//   console.log('implement later');
// }