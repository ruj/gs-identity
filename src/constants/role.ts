export const Role = {
  GUEST: 'GUEST',
  BETA_USER: 'BETA_USER',
  ADMIN: 'ADMIN',
  DEVELOPER: 'DEVELOPER',
  SYSTEM: 'SYSTEM'
} as const

export type Role = (typeof Role)[keyof typeof Role]

export const USER_ROLE_DISCORD_IDS: Record<Role, string> = {
  [Role.GUEST]: '1415707332087779458',
  [Role.BETA_USER]: '1415707029372403735',
  [Role.ADMIN]: '1415707161606230106',
  [Role.DEVELOPER]: '1415703205412601987',
  [Role.SYSTEM]: '1415707275267670020'
}
