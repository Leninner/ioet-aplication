const getDataWithOnlyHours = (obj) => {
  return Object.entries(obj).map(([key, value]) => {
    obj[key] = value.map((value) => value.map((value) => value.split(':')[0]).join('-'));
  });
};

const separateHours = (obj) => {
  return Object.entries(obj).map(([key, value]) => {
    obj[key] = value.map((value) => value.split('-'));
  });
};

export const getStructuredObject = (obj, value) => {
  value.split('|').forEach((value) => {
    const name = value.split('=')[0];
    const schedule = value.split('=')[1];

    if (!obj[name]) {
      obj[name] = schedule.split(',');
    }
  });

  // 02

  separateHours(obj);

  // 03

  getDataWithOnlyHours(obj);

  // 04

  return obj;
};
