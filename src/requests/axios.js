import axios from 'axios';

export function axiosRequest(url){
  return axios.get(url)
  .then((response) => response.data)
  .catch((error) => {
    console.log(error);
  });
}