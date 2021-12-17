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

  return Object.entries(objeto).filter(([key, value]) => {
    return value.length === 2;
  });
};

const getStructuredData = (structuredData) => {
  return Object.entries(structuredData).forEach(([key, value]) => {
    structuredData[key] = getUniqueDays(value[0], value[1]);
  });
};

export const getFinalResult = (obj) => {
  const structuredData = getPairs(Object.entries(obj));
  getStructuredData(structuredData);

  Object.entries(structuredData).map(([key, value]) => {
    let cont = 0;
    value.forEach((value) => {
      let peopleOneEntrada = Math.min(parseInt(value[1][0].slice(0, 2)), parseInt(value[1][1].slice(0, 2)));
      let peopleOneSalida = parseInt(value[1][1].slice(3));
      let peopleTwoEntrada = Math.max(parseInt(value[1][0].slice(0, 2)), parseInt(value[1][1].slice(0, 2)));
      let peopleTwoSalida = parseInt(value[1][0].slice(3));
      if (peopleOneEntrada === peopleTwoEntrada || peopleOneSalida === peopleTwoSalida) {
        cont++;
      } else if (peopleOneSalida < peopleTwoEntrada) {
        return;
      } else if (peopleOneSalida > 12 || peopleTwoSalida > 12) {
        if (peopleTwoEntrada - peopleOneEntrada + 12 <= peopleOneSalida) cont++;
      }
    });
    structuredData[key] = cont;
  });

  return structuredData;
};
