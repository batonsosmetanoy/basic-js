module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let correctMembers = members.filter(item => typeof item === "string");
  let trimNsort = correctMembers.map(item => item.trim().toUpperCase()).sort();
  let firstLetters = trimNsort.map(item => item.split('').splice(0, 1).join(''));

  return firstLetters.join('');
};