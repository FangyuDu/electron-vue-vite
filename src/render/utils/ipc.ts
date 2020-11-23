const { ipcRenderer } = require('electron')

// TODO 获取版本信息
export const getEnvInfo = async function () {
  let res = await ipcRenderer.invoke('api:common/getEnv')
  return res
}

// TODO 打开工作台
export const openWorkbench = async function () {
  await ipcRenderer.invoke('sys:open/workbench')
}
