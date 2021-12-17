import { employeesInOffice } from './employeesInOffice.js';

const fs = require('fs');
const PATH = 'C:\\Users\\USUARIO\\Desktop\\ioet-aplication\\src\\data\\setsOfData.txt';
const arrayOfData = fs.readFileSync(PATH, 'utf8').split('\n');

describe('Function to comprobate if two employees are in the office simultaneously', () => {
  test('It should work with the input shows one', () => {
    expect(employeesInOffice(arrayOfData[0])).toStrictEqual({
      'ASTRID-ANDRES': 3,
      'RENE-ANDRES': 2,
      'RENE-ASTRID': 2,
    });
  });

  test('It should work with the input shows two', () => {
    expect(employeesInOffice(arrayOfData[1])).toStrictEqual({
      'RENE-ASTRID': 3,
    });
  });

  test('The pairs of employees cannot be repeated and also the results must be as expected.', () => {
    expect(employeesInOffice(arrayOfData[2])).toStrictEqual({
      'ASTRID-CARLOS': 3,
      'ASTRID-PEPE': 2,
      'CARLOS-PEPE': 2,
      'LENIN-ASTRID': 3,
      'LENIN-CARLOS': 3,
      'LENIN-PEPE': 2,
    });
  });

  test('Must be work with all cases', () => {
    expect(employeesInOffice(arrayOfData[3])).toStrictEqual({
      'RENE-ASTRID': 3,
    });
  });

  test('Si solo tengo un par de personas y no tengo ninguna coincidencia, entonces el resultado debe ser 0', () => {
    expect(employeesInOffice(arrayOfData[4])).toStrictEqual({
      'PAUL-ANA': 0,
    });
  });

  test('If I have the data of only one person, then return an empty object', () => {
    expect(employeesInOffice(arrayOfData[5])).toStrictEqual({});
  });
});
