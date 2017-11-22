function respondData (data = {}, code = 0, message = '请求成功') {
  return {
    code,
    message,
    data
  }
}

export default respondData
