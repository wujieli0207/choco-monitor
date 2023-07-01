import reportData from './reportData'

export class HandleEvents {
  public handleError(err: Error) {
    return reportData.resport(err)
  }
}

const handleEvents = new HandleEvents()
export default handleEvents
