
function deepFreeze(obj) {
  if (obj === null || typeof obj!== 'object') {
    return obj;
  }

  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = obj[key];

    if (value!== null && typeof value === 'object') {
      deepFreeze(value);
    }
  }

  return Object.freeze(obj);
}

const user = {
  name: 'Setemi',
  address: { city: 'Lagos' }
};

deepFreeze(user);

user.name = 'Hacked'; 
user.address.city = 'London';

console.log(user);
console.log(Object.isFrozen(user)); 
console.log(Object.isFrozen(user.address));