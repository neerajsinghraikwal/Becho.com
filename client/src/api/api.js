import axios from "axios";
export const getData = (params = {}) => {
  return axios.get(`https://myolxclone.onrender.com/combined`, {
    params: {
      limit: params.limit,
    },
  });
};
