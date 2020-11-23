import { BrowserWindow } from 'electron'
import { ICtx } from '../types/index'

export default function (N: ICtx) {
  let win
  win = new BrowserWindow({
    width: 1680,
    height: 768,
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  })
  win.maximize()
  const URL = N.baseUrl + '/workbench'
  win.loadURL(URL)  
  win.show()
}