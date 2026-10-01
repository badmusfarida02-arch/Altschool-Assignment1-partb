function diffObjects(oldObj, newObj) {
  let result = {
    added: {},
    removed: {},
    changed: {}
  };

  for (let key in newObj) {

    if (!(key in oldObj)) {
      result.added[key] = newObj[key];
    }
    else if (oldObj[key]!== newObj[key]) {
      result.changed[key] = {
        from: oldObj[key],
        to: newObj[key]
      };
    }
  }

  for (let key in oldObj) {
    if (!(key in newObj)) {
      result.removed[key] = oldObj[key];
    }
  }

  return result;
}

// console.log the result of diffObjects with the following two objects:
const oldObj = {
  name: "Alice",
  age: 30,
  city: "New York"
};

const newObj = {
  name: "Alice",
  age: 31,
  country: "USA"
};

console.log(diffObjects(oldObj, newObj));