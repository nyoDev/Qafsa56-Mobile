const initialState = {
    token: '',
    authenticationState: 'unAuthenticated',
    userInfo: {},
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'setToken':
        return {
          ...state,
          token: action.payload,
        };
      case 'changeToAuthenticated':
        return {
          ...state,
          authenticationState: action.payload,
        };
      case 'changeToUnAuthenticated':
        return {
          ...state,
          authenticationState: action.payload,
        };
      case 'setUserInfo':
        return {
          ...state,
          userInfo: action.payload,
        };
      case 'signOut':
        return {
          ...state,
          userInfo: action.payload.userInfo,
          authenticationState: action.payload.authenticationState,
          token: action.payload.token,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  