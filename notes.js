console.log('Starting notes.js');

module.exports.addNote = () => {
  console.log('addNote function called.');
  return 'New note';
}

module.exports.add = (a, b) => {
  return a + b;
}
