import { getFinalResult, getObjStructured } from './functions/structuringData';

export const employeesInOffice = (value) => {
  let obj = {};
  getObjStructured(obj, value);
  return getFinalResult(obj);
};
