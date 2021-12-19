import { getFinalResult } from './functions/obtainingFinalResult.js';
import { getObjStructured } from './functions/structuringData.js';

export const employeesInOffice = (value) => {
  let obj = {};
  getObjStructured(obj, value);
  return getFinalResult(obj);
};
