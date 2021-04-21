const INITIAL_STATE = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  authenticated: localStorage.getItem('token') ? true : false,
  username: localStorage.getItem('username') ?  localStorage.getItem('username') : null,
  role: localStorage.getItem('role') ?  localStorage.getItem('role') : null,
  profile_url: localStorage.getItem('profile_url') ?  localStorage.getItem('profile_url') : null,
}

function UserReducer(state = INITIAL_STATE, action){
  console.log('action', action)
  
  switch(action.type){
    case 'LOGIN':
      localStorage.setItem('token', action.token)
      localStorage.setItem('user', JSON.stringify(action.user))
      localStorage.setItem('username', action.user.username)
      localStorage.setItem('role', action.role)
      localStorage.setItem('profile_url', action.profile_url)
      return { ...state, authenticated: true, user: action.user, username: action.username, role: action.role, profile_url: action.profile_url }
    case 'LOGOUT':
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      localStorage.removeItem('username')
      localStorage.removeItem('role')
      localStorage.removeItem('profile_url')
      return { ...state, authenticated: false, user: null, username: null, role: null }
    default:
      return state
  }
}

export default UserReducer