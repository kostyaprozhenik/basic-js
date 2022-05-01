const { NotImplementedError } = require('../extensions/index.js');

function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let firstName = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] !== 'string') {
      continue;
    }
    firstName.push(members[i].trim().toUpperCase().charAt(0));
  }
  
  return firstName.sort().join("");
}

module.exports = {
  createDreamTeam
};
