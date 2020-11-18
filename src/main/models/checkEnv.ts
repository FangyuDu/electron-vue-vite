const spawn = require('cross-spawn')

export default function checkEnv() {
  let nodeV = spawn.sync('node', ['-v'], { stdio: ['pipe', 'pipe', 'pipe'] })
  let npmV = spawn.sync('npm', ['-v'], { stdio: ['pipe', 'pipe', 'pipe'] })

  return {
    nodeV: nodeV.stdout.toString(),
    npmV: npmV.stdout.toString()
  }
}
