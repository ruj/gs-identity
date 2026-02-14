import { Role } from '@/constants/role'

export type User = {
  id: number
  username: string
  role: Role
}

export type UserDiscord = {
  id: string
  discordId: string
  username: string
  createdAt: string
  updatedAt: string
  user: User
}
