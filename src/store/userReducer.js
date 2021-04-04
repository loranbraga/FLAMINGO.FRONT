const INITIAL_STATE = {
  email: '',
  authenticated: false,
}

function userReducer(state = INITIAL_STATE, action){
  
  switch(action.type){
    case 'LOGIN':
      return { ...state, authenticated: true, email: action.email }
    case 'LOGOUT':
      return { ...state, authenticated: false, email: null }
    default:
      return state
  }
}

export default userReducer