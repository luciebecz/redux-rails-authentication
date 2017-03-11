const auth = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
        id: action.id
      } 
    case 'LOGOUT':
    default:  //always have a default case in reducers, that's what will be rendered if the reducer can't be used 
      return state;
  }
}

export default auth;