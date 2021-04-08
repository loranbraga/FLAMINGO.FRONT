const INITIAL_STATE = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  authenticated: localStorage.getItem('token') ? true : false,
  username: localStorage.getItem('username') ?  localStorage.getItem('username') : null,
}

function UserReducer(state = INITIAL_STATE, action){
  console.log('action', action)
  
  switch(action.type){
    case 'LOGIN':
      localStorage.setItem('token', action.token)
      localStorage.setItem('user', JSON.stringify(action.user))
      localStorage.setItem('username', action.user.username)
      return { ...state, authenticated: true, user: action.user, username: action.username }
    case 'LOGOUT':
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      localStorage.removeItem('username')
      return { ...state, authenticated: false, user: null, username: null }
    default:
      return state
  }
}

export default UserReducer