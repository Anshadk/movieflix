import axios from 'axios'
import { baseURL } from './constants/constants';

//here we create our own custom axios using "npm create instance" and using it everywhere
const instance = axios.create({
    baseURL: baseURL,
   
  });

  export default instance