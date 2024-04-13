import { IAuthService, LoginRequest } from './types'
import axios from 'axios'

const baseurl = 'https://localhost:7200'

export class AuthService implements IAuthService {
  loginUser = async (request: LoginRequest): Promise<string> => {
    try {
      const response = await axios.post(`${baseurl}/login`, { ...request })
      console.log(response.data)
      return response.data
    } catch (ex) {
      console.error(ex)
      return ''
    }
  }
}
