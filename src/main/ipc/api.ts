import { ipcMain } from 'electron'
import { packRes } from '../utils/result'
import checkEnv from '../models/checkEnv'

export class MainServe {
  constructor () {
    this.registerListeners()
  }
  private registerListeners(): void {
    ipcMain.handle('api:common/getEnv', (e, args) => {
      try {
        return packRes.success(checkEnv())
      } catch(err) {
        return packRes.fail({}, 100, '环境检测状态异常')
      }
    })
  }
}
