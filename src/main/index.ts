/**
 * electron 主文件
 */
import { join } from 'path'
import { app, BrowserWindow, ipcMain } from 'electron'
import { MainServe } from './ipc/api'
import is_dev from 'electron-is-dev'
import dotenv from 'dotenv'

dotenv.config({ path: join(__dirname, '../../.env') })

const ms = new MainServe()
let win = null

function createWin() {
  // 创建浏览器窗口
  win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  const URL = is_dev
    ? `http://localhost:${process.env.PORT}` // vite 启动的服务器地址
    : `file://${join(__dirname, '../render/index.html')}` // vite 构建后的静态文件地址

  win.loadURL(URL)

}

// TODO: 构建BS通信结构
// import './ipc'

app.whenReady().then(createWin)
