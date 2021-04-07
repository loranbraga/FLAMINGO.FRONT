const INITIAL_STATE = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  authenticated: localStorage.getItem('token') ? true : false,
}

function UserReducer(state = INITIAL_STATE, action){
  console.log('action', action)
  
  switch(action.type){
    case 'LOGIN':
      localStorage.setItem('token', action.token)
      localStorage.setItem('user', JSON.stringify(action.user))
      return { ...state, authenticated: true, user: action.user }
    case 'LOGOUT':
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      return { ...state, authenticated: false, user: null }
    default:
      return state
  }
}

export default UserReducer