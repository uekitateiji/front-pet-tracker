import axios from 'axios';

const api = axios.create({
  //IMPORTANTE: TROCAR PARA O IP DA SUA MÁQUINA -----------------------------------------
  //EXEMPLO: http://999.999.99.9:3000/
  baseURL: 'http://192.168.15.6:3000/',
});

export default api;
