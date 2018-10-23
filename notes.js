console.log('Starting notes.js');

const fs = require('fs');

const addNote = (title, body) => {
  let notes = [];
  const note = { title, body };

  try {
    const notesString = fs.readFileSync('note-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {

  }

  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote){
    notes.push(note);
    fs.writeFileSync('note-data.json', JSON.stringify(notes));
  }
}

const getAll = () => {
  console.log('Getting all notes');
}

const getNote = (title) => {
  console.log(`Getting ${title}`)
}

const removeNote = (title) => {
  console.log(`Removing ${title}`)
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
