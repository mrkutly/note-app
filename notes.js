console.log('Starting notes.js');

const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('note-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('note-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
  const notes = fetchNotes();
  const note = { title, body };
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}

const getAll = () => {
  console.log('Getting all notes');
}

const getNote = (title) => {
  console.log(`Getting ${title}`)
}

const removeNote = (title) => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
