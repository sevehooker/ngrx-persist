
export function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();
  if (Array.isArray(target) && Array.isArray(source)) {
    Object.assign(
      target,
      Object.values(mergeDeep(toDictionary(target), toDictionary(source)))
    );
  } else if (isObject(target) && isObject(source)) {
    for (const key in source) {
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

function toDictionary(list: object[], keyProperty = "id") {
  return list.reduce((dictionary, item) => {
    dictionary[item[keyProperty]] = item;
    return dictionary;
  }, {});
}

function isObject(val: any) {
  if (val === null) {
    return false;
  }
  return typeof val === "function" || typeof val === "object";
}
