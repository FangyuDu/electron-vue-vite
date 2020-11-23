/**
 * electron 主文件
 */
import { join } from 'path'
import { app, BrowserWindow, ipcMain } from 'electron'
import { MainServe, SysServe } from './ipc/api'
import is_dev from 'electron-is-dev'
import dotenv from 'dotenv'

dotenv.config({ path: join(__dirname, '../../.env') })

interface ICtx {
  [p:string]: any
}
// 集成总线
const ctx:ICtx = {}

function createWin(N:ICtx) {
  // 创建浏览器窗口
  N.win = new BrowserWindow({
    width: 1024,
    height: 768,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  const URL = is_dev
    ? `http://localhost:${process.env.PORT}` // vite 启动的服务器地址
    : `file://${join(__dirname, '../render/index.html')}` // vite 构建后的静态文件地址
  N.baseUrl = URL
  N.win.loadURL(URL)
}

app.whenReady().then(() => {
  // TODO 入口内容
  createWin(ctx)
  // TODO 数据接口
  const ms = new MainServe(ctx)
  // TODO 功能接口
  const ss = new SysServe(ctx)
})
