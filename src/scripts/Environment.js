import Auth from "./Auth";

const env = {
  API_URL: 'https://laki-pawang-ular-backend.herokuapp.com/api',
  STORAGE_URL: "https://laki-pawang-ular-backend.herokuapp.com/storage",
  TOKEN_TYPE : 'Bearer',
  OPTIONS_AXIOS : {
    headers: {
      Authorization: `Bearer ${Auth.getToken()}`,
    },
  }
};

export default env;