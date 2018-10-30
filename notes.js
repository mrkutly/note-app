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
  return fetchNotes();
}

const getNote = (title) => {
  const notes = fetchNotes();
  const note = notes.find(note => note.title === title);
  return note
}

const printNote = (note, message = "") => {
  return `
    ${message}
    ---

    Title: ${note.title}
    Body: ${note.body}
  `;
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
  printNote,
  removeNote
}
