'use strict';

const inquirer = require('inquirer');
const axios = require('axios');
const { default: ListPrompt } = require('inquirer/lib/prompts/list');

async function questions() {
  const otdb = await axios('https://opentdb.com/api.php?amount=10');
  // console.log(otdb.data.results);

  let i = 0;

  const questions = otdb.data.results.map(question => {
    i++;
    return {
      type: 'list',
      name: `${i}`,
      message: question.question,
      choices: [
        ...question.incorrect_answers, question.correct_answer,
      ],
    };
  });

  inquirer.prompt(questions).then(answers => {
    console.log(answers);
  });
}

questions();
