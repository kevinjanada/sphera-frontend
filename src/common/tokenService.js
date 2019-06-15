const ROLE = 'role';
const TOKEN = 'token';

const tokenService = {
  setRole: () => {
    window.localStorage.setItem(ROLE)
  },
  getRole: () => {
    window.localStorage.getItem(ROLE)
  },
  setToken: (token) => {
    window.localStorage.setItem(TOKEN, token)
  },
  getToken: () => {
    window.localStorage.getItem(TOKEN)
  }
}

export default tokenService