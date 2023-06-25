import inquirer from "inquirer"
import { Answer, Choice, ProviderChoiceValue } from '../models/answer-choice'

export async function providerQuestion(): Promise<Answer> {
  const listOfFiles: Choice[] = [
    { name: 'Github', value: ProviderChoiceValue.GITHUB },
    { name: 'Gitlab', value: ProviderChoiceValue.GITLAB }
  ]

  return inquirer.prompt([{
    name: 'provider',
    type: 'list',
    message: 'Select a Git hosting provider:',
    choices: listOfFiles
  }])
}




