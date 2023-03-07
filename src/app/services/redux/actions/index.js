export const setToken = (data) => ({
    type: 'setToken',
    payload: data,
  });
  
  export const changeToAuthenticated = () => ({
    type: 'changeToAuthenticated',
    payload: 'authenticated',
  });
  
  export const changeToUnAuthenticated = () => ({
    type: 'changeToUnAuthenticated',
    payload: 'unAuthenticated',
  });
  
  export const setUserInfo = (data) => ({
    type: 'setUserInfo',
    payload: data,
  });
  
  export const signOut = () => ({
    type: 'signOut',
    payload: {
      userInfo: {},
      authenticationState: 'unAuthenticated',
      token: '',
    },
  });
  