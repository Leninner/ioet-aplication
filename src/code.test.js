import { employeesInOffice } from './code.js';

const fs = require('fs');
const PATH = 'C:\\Users\\USUARIO\\Desktop\\ioet-aplication\\src\\setsOfData.txt';
const arrayOfData = fs.readFileSync(PATH, 'utf8').split('\n');

describe('Función para comprobar si dos personas se encuentran en la oficina simultáneamente', () => {
  test('Debe funcionar con el input de prueba uno', () => {
    expect(employeesInOffice(arrayOfData[0])).toStrictEqual({
      'ASTRID-ANDRES': 3,
      'RENE-ANDRES': 2,
      'RENE-ASTRID': 2,
    });
  });

  test('Debe funcionar con el input de prueba dos', () => {
    expect(employeesInOffice(arrayOfData[1])).toStrictEqual({
      'RENE-ASTRID': 3,
    });
  });

  test('La pareja de empleados no debe repetirse y además los resultados deben ser los correctos', () => {
    expect(employeesInOffice(arrayOfData[2])).toStrictEqual({
      'ASTRID-CARLOS': 3,
      'ASTRID-PEPE': 2,
      'CARLOS-PEPE': 2,
      'LENIN-ASTRID': 3,
      'LENIN-CARLOS': 3,
      'LENIN-PEPE': 2,
    });
  });

  test('Debe funcionar con todos los casos', () => {
    expect(employeesInOffice(arrayOfData[3])).toStrictEqual({
      'RENE-ASTRID': 3,
    });
  });

  test('Debe funcionar en casos que las personas no tengan ningúna hora de coincidencia', () => {
    expect(employeesInOffice(arrayOfData[4])).toStrictEqual({
      'PAUL-ANA': 0,
    });
  });

  test('Si ingresamos la data de un solo empleado, entonces retornamos un objeto vacío', () => {
    expect(employeesInOffice(arrayOfData[5])).toStrictEqual({});
  });
});
