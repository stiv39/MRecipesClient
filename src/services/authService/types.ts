export type IAuthService = {
  loginUser(request: LoginRequest): Promise<string>
}

export type LoginRequest = {
  email: string
  password: string
}
