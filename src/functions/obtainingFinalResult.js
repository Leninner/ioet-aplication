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

//crear la lógica para mostrar en la consola los resultados
const getUniqueDays = (arrayOne, arrayTwo) => {
  let arrayGeneral = [...arrayOne, ...arrayTwo];
  let objeto = {};

  arrayGeneral.forEach((value) => {
    let nuevo = value.slice(0, 2);
    if (objeto[nuevo]) {
      objeto[nuevo].push(value.slice(2));
    } else {
      objeto[nuevo] = [value.slice(2)];
    }
  });

  // getUniqueDays

  return Object.entries(objeto).filter(([key, value]) => {
    return value.length === 2;
  });
};

const getStructuredData = (structuredData) => {
  return Object.entries(structuredData).forEach(([key, value]) => {
    structuredData[key] = getUniqueDays(value[0], value[1]);
    // getUniqueDays2
  });
};

export const getFinalResult = (obj) => {
  const structuredData = getPairs(Object.entries(obj));
  // 05
  getStructuredData(structuredData);
  // 06
  Object.entries(structuredData).map(([key, value]) => {
    let cont = 0;

    value.forEach((value) => {
      const [day, schedule] = value;
      // day  schedule
      const [timeOne, timeTwo] = schedule;
      const [hourStartOne, hourEndOne] = timeOne.split('-');
      const [hourStartTwo, hourEndTwo] = timeTwo.split('-');

      if (
        parseInt(hourStartOne) === parseInt(hourStartTwo) ||
        parseInt(hourEndOne) === parseInt(hourEndTwo) ||
        parseInt(hourStartOne) === parseInt(hourEndTwo) ||
        parseInt(hourStartTwo) === parseInt(hourEndOne)
      ) {
        cont++;
      } else if (parseInt(hourEndOne) < parseInt(hourStartTwo) || parseInt(hourStartOne) > parseInt(hourEndTwo)) {
        return;
      } else if (parseInt(hourStartOne) < parseInt(hourEndTwo) && parseInt(hourEndOne) > parseInt(hourStartTwo)) {
        cont++;
      }
    });

    structuredData[key] = cont;
  });
  // 07

  return structuredData;
};
