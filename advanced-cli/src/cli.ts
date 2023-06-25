import { injectable, inject } from 'inversify'
import { FeatureRequest } from './templates/github/feature-request.template'
import { Answer, GithubChoiceValue, GitlabChoiceValue, ProviderChoiceValue } from './models/answer-choice'
import { MergeRequest } from './templates/gitlab/merge-request.template'
import { providerQuestion, githubFileQuestion, gitlabFileQuestion } from './questions'

@injectable()
export class CLI {
  constructor(@inject('FeatureRequest') private featureRequest: FeatureRequest,
              @inject('MergeRequest') private mergeRequest: MergeRequest
  ) {

  }

  public async executeCLI(): Promise<any> {
    let providerAnswer: Answer = await providerQuestion()

    if (providerAnswer.provider === ProviderChoiceValue.GITHUB) {
      return this.githubActions()
    } else if (providerAnswer.provider === ProviderChoiceValue.GITLAB) {
      return this.gitlabActions()
    }
  }

  private async githubActions() {
    let githubAnswer: Answer = await githubFileQuestion()

    if (githubAnswer.file === GithubChoiceValue.FEATURE_REQUEST) {
      return this.featureRequest.generateFile()
    }
  }

  private async gitlabActions() {
    let gitlabAnswer: Answer = await gitlabFileQuestion()

    if (gitlabAnswer.file === GitlabChoiceValue.MERGE_REQUEST) {
      return this.mergeRequest.generateFile()
    }
  }
}


