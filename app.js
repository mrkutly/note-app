console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
const command = argv._[0];
let message;

switch (command) {
  case 'add':
    const note = notes.addNote(argv.title, argv.body);
    message = (!!note ? `Note added: ${note.title}` : "A note with that title already exists.")
    console.log(message)
    break;

  case 'list':
    notes.getAll();
    break;

  case 'read':
    notes.getNote(argv.title);
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
