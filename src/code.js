// Exercise

// The company ACME offers their employees the flexibility to work the hours they want. But due to some external circumstances they need to know what employees have been at the office within the same time frame

// The goal of this exercise is to output a table containing pairs of employees and how often they have coincided in the office.

// Input: the name of an employee and the schedule they worked, indicating the time and hours. This should be a .txt file with at least five sets of data. You can include the data from our examples below:

// Example 1:

// INPUT
// RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00- 21:00
// ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
// ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00

// OUTPUT:
// ASTRID-RENE: 2
// ASTRID-ANDRES: 3
// RENE-ANDRES: 2

// Example 2:

// INPUT:
// RENE=MO10:15-12:00,TU10:00-12:00,TH13:00-13:15,SA14:00-18:00,SU20:00-21:00
// ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00

// OUTPUT:
// RENE-ASTRID: 3

const fs = require('fs');

const PATH = 'C:\\Users\\USUARIO\\Desktop\\ioet-aplication\\src\\setsOfData.txt';

const arrayOfData = fs.readFileSync(PATH, 'utf8').split('|');

const getArray = () => {
  let obj = {};

  arrayOfData.forEach((value) => {
    const name = value.split('=')[0];
    const schedule = value.split('=')[1];

    if (!obj[name]) {
      obj[name] = schedule.split(',');
    }
  });

  // NOTE: Se puede utilizar destructuración de arreglos

  return obj;
};

console.log(getArray());
