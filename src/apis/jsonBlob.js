import axios from 'axios';

export const jsonBlob = axios.create({
  baseURL: 'https://jsonblob.com/api/jsonBlob',
});
