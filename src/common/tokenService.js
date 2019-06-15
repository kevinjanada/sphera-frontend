const ROLE = 'role';

const tokenService = {
  setRole: () => {
    window.localStorage.setItem(ROLE)
  },
  getRole: () => {
    window.localStorage.getItem(ROLE)
  }
}

export default tokenService