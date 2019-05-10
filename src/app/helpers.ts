
export function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();
  if (Array.isArray(target) && Array.isArray(source)) {
    Object.assign(target, Object.values(mergeDeep(toDictionary(target), toDictionary(source))));
  } else if (isObject(target) && isObject(source)) {
    for(const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

function toDictionary(list, keyProperty = 'id') {
  return list.reduce((dictionary, item) => {
    dictionary[item[keyProperty]] = item;
    return dictionary; 
  }, {});
}

function isObject(val) {
  if (val === null) {
    return false;
  }
  return typeof val === 'function' || typeof val === 'object';
}

// mergeDeep(...objects) {
//   const isObject = obj => obj && typeof obj === 'object';

//   return objects.reduce((prev, obj) => {
//     if (obj) {
//       Object.keys(obj).forEach(key => {
//         var pVal = prev[key];
//         const oVal = obj[key];
//         if (Array.isArray(pVal) && Array.isArray(oVal)) {
//           pVal = pVal.filter(x => oVal.find(y => y.id === x.id));
//           prev[key] = this.arrayUnique(pVal.concat(...oVal));

//         } 
//         if (isObject(pVal) && isObject(oVal)) {
//           prev[key] = this.mergeDeep(pVal, oVal);
//         } else {
//           prev[key] = oVal;
//         }
//       });
//       return prev;
//     } else {
//       return {};
//     }
//   }, {});
// }

// arrayUnique(array) {
//   var arr = array.concat();
//   for (var i = 0; i < arr.length; ++i) {
//     for (var j = i + 1; j < arr.length; ++j) {
//       if (arr[i] === arr[j]) {
//         arr.splice(j--, 1);
//       } else if (
//         this.isObject(arr[i]) &&
//         this.isObject(arr[j]) &&
//         arr[i].hasOwnProperty('id') &&
//         arr[j].hasOwnProperty('id') &&
//         arr[i].id !== '' &&
//         arr[j].id !== '' &&
//         arr[i].id === arr[j].id
//       ) {
//         arr[i] = this.mergeDeep(arr[i], arr[j]);
//         arr.splice(j--, 1);
//       }
//     }
//   }
//   return arr;
// }