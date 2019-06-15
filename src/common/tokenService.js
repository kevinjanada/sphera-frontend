const ROLE = 'role';
const TOKEN = 'token';
const USER_ID = 'userId';

const tokenService = {
  setRole: (role) => {
    localStorage.setItem(ROLE, role)
  },
  getRole: () => {
    localStorage.getItem(ROLE)
  },
  setUserId: (userId) => {
    localStorage.setItem(USER_ID, userId)
  },
  getUserId: () => {
    localStorage.getItem(USER_ID)
  },
  setToken: (token) => {
    localStorage.setItem(TOKEN, token)
  },
  getToken: () => {
    localStorage.getItem(TOKEN)
  }
}

export default tokenService