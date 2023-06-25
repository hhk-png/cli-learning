import fs from 'fs-extra'

import { injectable } from 'inversify'

@injectable()
export class DefaultTemplate {
  constructor() {}

  public generateFile(nameOfFileWithExtension: string, fileContent: string, hasPath: boolean = false, pathOfFile: string = ''): void {
    this.createFile(pathOfFile, nameOfFileWithExtension, fileContent)
  }

  private async createFile(pathOfFile: string, fileName: string, fileContent: string) {
    let filepath: string = process.cwd() + `${pathOfFile}/${fileName}`
    try {
      await fs.promises.writeFile(filepath, fileContent)
    } catch(e) {
      if (!e) {
        console.log(`File created: ${fileName}`)
      } else {
        console.log(`File error: ${fileName}`)
      }
    }
  }
}

