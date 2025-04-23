export type IAuthService = {
  loginUser(request: LoginRequest): Promise<LoginResponse>
}

export type LoginRequest = {
  email: string
  password: string
}

export type LoginResponse = {
  token: string
  role: UserRole
}

export type UserRole = "User" | "Admin"
