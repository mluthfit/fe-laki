import Auth from "./Auth";

const env = {
  API_URL: 'http://be-laki.test/api',
  TOKEN_TYPE : 'Bearer',
  OPTIONS_AXIOS : {
    headers: {
      Authorization: `Bearer ${Auth.getToken()}`,
    },
  }
};

export default env;