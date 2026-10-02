function validateSchema(obj, schema) {
  let errors = [];

  for (let key in schema) {
    let expectedType = schema[key];

    if (!(key in obj)) {
      errors.push(`${key}: missing property`);
    }

    else if (typeof obj[key]!== expectedType) {
      errors.push(`${key}: expected ${expectedType}, got ${typeof obj[key]}`);
    }
  }

  return errors;
}


const schema = { name: 'string', age: 'number', isAdmin: 'boolean' }
console.log(validateSchema({ name: 'Ada', age: 21, isAdmin: false }, schema))


console.log(validateSchema({ name: 'Ada', age: '21' }, schema))
