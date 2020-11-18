interface result {
  success: boolean,
  code: number,
  data: any,
  msg?: undefined | string
}

export class Result implements result{
  success = true
  data = null
  code = 0
  msg = ''
  constructor (data: any, success: boolean, code: number, msg?: string) {
    this.data = data
    this.success = success
    this.code = code
    this.msg = msg as string
  }
}

export const packRes = {
  success: (data: any) => new Result(data, true, 0),
  fail: (data: any, code: number = 100, msg?: string) => new Result(data, false, code, msg)
}