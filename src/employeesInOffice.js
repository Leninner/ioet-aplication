import { getFinalResult } from './functions/structuringData';
import { getObjStructured } from './functions/obtainingFinalResult';

export const employeesInOffice = (value) => {
  let obj = {};
  getObjStructured(obj, value);
  return getFinalResult(obj);
};
