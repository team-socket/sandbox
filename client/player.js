'use strict';

const inquirer = require('inquirer');
const { socket } = require('../socket');

socket.on('START_TRIVIA', (questions) => {
  inquirer.prompt(questions).then(answers => {
    console.log(answers);
  });
});
