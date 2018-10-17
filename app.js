console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

let user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}!`, (err) => {
 if (err) {
   console.log('Unable to write to file.');
 } else {
   console.log('Successfully appended file.')
 }
});
