export function successfulResponse(message = "Successful", data = {}) {
  return {
    success: true,
    message,
    data // token
  }
}

export function failedResponse(message = "Failed", error = {}) {
  return {
    success: false,
    message,
    error // name, type, reason
  }
}