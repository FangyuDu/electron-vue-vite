import { ipcMain } from 'electron'
import { packRes } from '../utils/result'
import checkEnv from '../models/checkEnv'
import openWorkbench from '../models/openWorkbench'
import { ICtx, IServe } from '../types/index'

export class MainServe implements IServe {
  ctx
  constructor (N: ICtx) {
    this.ctx = N
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

export class SysServe implements IServe {
  ctx
  constructor (N: ICtx) {
    this.ctx = N
    this.registerListeners(N)
  }
  private registerListeners(N: ICtx): void {
    ipcMain.handle('sys:open/workbench', (e, args) => {
      try {
        openWorkbench(N)
        this.ctx.win.close()
        return packRes.success({msg: '窗口成功打开!'})
      } catch(err) {
        return packRes.fail({}, 100, '环境检测状态异常')
      }
    })
  }
}