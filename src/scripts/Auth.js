const Auth = {
  isTokenAvailable : () => {
    return !!localStorage.getItem("token");
  },

  getToken : () => {
    return `Bearer ${localStorage.getItem("token")}`;
  },

}

export default Auth;