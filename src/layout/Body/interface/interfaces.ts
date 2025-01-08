export interface IUserInfo {
  id: number
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  createdAt: string
  updatedAt: string
  role: Role
  trades: any[]
}

export interface Role {
  id: number
  name: string
  description: string
  type: string
  createdAt: string
  updatedAt: string
}
