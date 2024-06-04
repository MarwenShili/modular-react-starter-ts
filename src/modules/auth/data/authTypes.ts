export interface LoginPayload {
  email: string
  password: string
}

export interface RegisterPayload {
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
  verify_password: string
  phone?: string | null
  age?: number | null
  birthDate?: string | null
}

export interface User {
  id: string
  name: string
  email: string
}

export interface IAuthState {
  status: string
  isAuthenticated: boolean
  isInitialised: boolean
  user: User | null
  error: string | null
}
