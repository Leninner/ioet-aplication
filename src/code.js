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

// función para hacer emparejamiento de números sin parejas repetidas

const getPairs = (array) => {
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let nameOne = array[i][0];
      let nameTwo = array[j][0];

      obj[`${nameOne}-${nameTwo}`] = [array[i][1], array[j][1]];
    }
  }

  return obj;
};

// crear la lógica para mostrar en la consola los resultados
const getUniqueDays = (arrayOne, arrayTwo) => {
  let arrayGeneral = [...arrayOne, ...arrayTwo];
  let objeto = {};

  arrayGeneral.forEach((value) => {
    if (objeto[value]) {
      objeto[value]++;
    } else {
      objeto[value] = 1;
    }
  });

  return Object.entries(objeto).filter((value) => value[1] > 1).length;
};

const getArray = (some) => {
  let obj = {};

  some.forEach((value) => {
    const name = value.split('=')[0];
    const schedule = value.split('=')[1];

    if (!obj[name]) {
      obj[name] = schedule.split(',');
    }
  });

  Object.entries(obj).map(([key, value]) => {
    obj[key] = value.map((value) => value.split('-'));
  });

  Object.entries(obj).map(([key, value]) => {
    obj[key] = value.map((value) => value.map((value) => value.split(':')[0]).join('-'));
  });

  const structuredData = getPairs(Object.entries(obj));

  Object.entries(structuredData).forEach(([key, value]) => {
    structuredData[key] = getUniqueDays(value[0], value[1]);
  });

  return structuredData;
};

console.log(getArray(arrayOfData));
