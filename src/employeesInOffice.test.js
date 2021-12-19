import { employeesInOffice } from './employeesInOffice.js';

// const fs = require('fs');
// const PATH = 'C:\\Users\\USUARIO\\Desktop\\ioet-aplication\\src\\data\\setsOfData.txt';
// const arrayOfData = fs.readFileSync(PATH, 'utf8').split('\n');

xdescribe('Function to comprobate if two employees are in the office simultaneously', () => {
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

  test('If I Have only one pair of persons and any coincidences, then the results should be 0', () => {
    expect(employeesInOffice(arrayOfData[4])).toStrictEqual({
      'PAUL-ANA': 0,
    });
  });

  test('If I have the data of only one person, then return an empty object', () => {
    expect(employeesInOffice(arrayOfData[5])).toStrictEqual({});
  });
});

describe('Function to comprobate if two employees are in the office simultaneously', () => {
  test('It should work with the input shows one', () => {
    expect(
      employeesInOffice(
        'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00|ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00|ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00'
      )
    ).toStrictEqual({
      'ASTRID-ANDRES': 3,
      'RENE-ANDRES': 2,
      'RENE-ASTRID': 2,
    });
  });

  test('It should work with the input shows two', () => {
    expect(
      employeesInOffice(
        'RENE=MO10:15-12:00,TU10:00-12:00,TH13:00-13:15,SA14:00-18:00,SU20:00-21:00|ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00'
      )
    ).toStrictEqual({
      'RENE-ASTRID': 3,
    });
  });

  test('The pairs of employees cannot be repeated and also the results must be as expected.', () => {
    expect(
      employeesInOffice(
        'LENIN=MO11:15-12:00,TU10:00-12:00,TH13:00-13:15,SA14:00-18:00,SU20:00-21:00|ASTRID=MO11:00-12:00,TH12:00-14:00,SU20:00-21:00|CARLOS=MO11:00-12:00,TH12:00-14:00,SU20:00-21:00|PEPE=MO10:00-13:00,TH12:00-14:00,SU08:00-10:00'
      )
    ).toStrictEqual({
      'ASTRID-CARLOS': 3,
      'ASTRID-PEPE': 2,
      'CARLOS-PEPE': 2,
      'LENIN-ASTRID': 3,
      'LENIN-CARLOS': 3,
      'LENIN-PEPE': 2,
    });
  });

  test('Must be work with all cases', () => {
    expect(
      employeesInOffice(
        'RENE=MO10:15-12:00,TU10:00-12:00,TH09:00-13:15,SA14:00-18:00,SU20:00-21:00|ASTRID=MO09:00-12:00,TH11:00-14:00,SU20:00-21:00'
      )
    ).toStrictEqual({
      'RENE-ASTRID': 3,
    });
  });

  test('If I Have only one pair of persons and any coincidences, then the results should be 0', () => {
    expect(
      employeesInOffice(
        'PAUL=MO15:15-20:00,TU10:00-12:00,TH05:00-09:15,SA14:00-18:00,SU21:10-22:00|ANA=MO09:00-12:00,TH11:00-14:00,SU20:00-20:00'
      )
    ).toStrictEqual({
      'PAUL-ANA': 0,
    });
  });

  test('If I have the data of only one person, then return an empty object', () => {
    expect(
      employeesInOffice('RENE=MO10:15-12:00,TU10:00-12:00,TH13:00-13:15,SA14:00-18:00,SU20:00-21:00')
    ).toStrictEqual({});
  });
});
