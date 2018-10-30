const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
}

const argv = yargs
  .command('add', 'Add a new note', { title: titleOptions, body: bodyOptions })
  .command('list', 'List all notes')
  .command('read', 'Read a note', { title: titleOptions })
  .command('remove', 'Remove a note', { title: titleOptions })
  .help()
  .argv;

const command = argv._[0];
let message;
let note;

switch (command) {
  case 'add':
    note = notes.addNote(argv.title, argv.body);
    message = (!!note ? notes.printNote(note, "Note created") : "A note with that title already exists.");
    console.log(message);
    break;

  case 'list':
    const allNotes = notes.getAll();
    const formatted = allNotes.map(note => notes.printNote(note)).join("");
    console.log(`Printing ${allNotes.length} note(s)`);
    console.log(formatted);
    break;

  case 'read':
    note = notes.getNote(argv.title);
    message = (!!note ? notes.printNote(note, "Note found") : `No note found with title ${argv.title}`);
    console.log(message);
    break;

  case 'remove':
    const noteRemoved = notes.removeNote(argv.title);
    message = (noteRemoved ? `Note was removed` : `Note not found`);
    console.log(message);
    break;

  default:
    console.log('Command not recognized');
    break;
}
