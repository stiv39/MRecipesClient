import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:7116',
});

class APIClient {
    endpoint: string;
  
    constructor(endpoint: string) {
      this.endpoint = endpoint;
    }
  
    getClient = () => {
      return axiosInstance;
    }

  }
  
  export default APIClient;
