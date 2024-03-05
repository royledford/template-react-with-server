export function checkAuth() {
  // return new Promise((resolve, reject) => {
  const token = getToken()
  if (token) {
    return true
  } else {
    return false
  }
  // })
}

function getToken() {
  return localStorage.getItem('authToken')
}

export function setToken(token) {
  localStorage.setItem('authToken', token)
}
