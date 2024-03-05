export const timeoutCode = 'ECONNABORTED'

/**
 *  Search through the array of error messages and look for one with a
 *  matching value.
 *
 * @param error - an error object
 * @param messages - an array of error messages to search for
 * @returns {boolean} true if found, false otherwise
 */
export const includesOneOfErrorMessages = (error, messages) => {
  if (!error) return false
  if (!messages || messages.length === 0) return false

  const data = error.response?.data
  if (data?.errors?.length) {
    return messages.some((message) => {
      const check = (m) => m.toLowerCase().includes(message.toLowerCase())

      return data.errors.some(({ detail }) => {
        return Array.isArray(detail) ? detail.some(check) : check(detail)
      })
    })
  }
  return messages.some((message) => data?.error?.toLowerCase().includes(message.toLowerCase()))
}

export const getErrorMessage = (error) => {
  if (!error) return undefined

  let errorObj

  if (error.code === timeoutCode) {
    errorObj = {
      code: 408,
      message: 'Request timeout',
    }
  } else {
    errorObj = {
      status: error.response.status,
      code: error.code,
      message: error.message,
      response: error.response.data,
    }
  }

  return `
${error.config.method.toUpperCase()} ${error.config.baseURL}${error.config.url}

Response:
${JSON.stringify(errorObj, null, 2)}
  `
}

export const getErrorCode = (error) => {
  if (!error) return undefined
  if (error.response?.status === 403 && includesOneOfErrorMessages(error, ['does not has permissions on this endpoint'])) {
    return 401
  }
  return error.response?.status === 404 ? 404 : 500
}
