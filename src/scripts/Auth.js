const Auth = {
  isTokenAvailable : () => {
    return !!localStorage.getItem("token");
  },

  getToken : () => {
    return localStorage.getItem("token");
  },

}

export default Auth;