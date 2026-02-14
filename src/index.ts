import { Client, Events, GatewayIntentBits } from 'discord.js'

import { Users } from '@/api/users'
import { USER_ROLE_DISCORD_IDS as UserRoleDiscordIds } from '@/constants/role'
import { getGsNickname } from '@/utils'
import { Errors } from '@/constants/errors'

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
})

client.on(Events.GuildMemberAdd, async (member) => {
  try {
    const data = await Users.findByDiscordId(member.id)

    if ('error' in data) {
      if (data.error === Errors.USER_NOT_FOUND) {
        return console.log(`User "${member.user.username}" (${member.id}) not found`)
      }

      return console.error(data.error)
    }

    const roleId = UserRoleDiscordIds[data.user.role]
    const gsNickname = getGsNickname(data.username)

    await member.roles.add(roleId)
    await member.setNickname(gsNickname)

    console.log(`Set nickname for "${member.user.username}" (${member.id}) to "${gsNickname}" (${data.user.id})`)
  } catch (error) {
    console.error('Error processing new guild member', error)
  }
})

client.once(Events.ClientReady, async() => {
  console.log(`Logged in as ${client.user?.tag}`)
})

client.login()
