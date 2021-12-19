import { getFinalResult } from './functions/obtainingFinalResult.js';
import { getStructuredObject } from './functions/structuringData.js';

export const employeesInOffice = (value) => {
  let obj = {};
  getStructuredObject(obj, value);
  return getFinalResult(obj);
};
