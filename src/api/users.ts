import { config } from '@/config'
import { GET } from '@/lib/http'
import { ApiErrorResponse } from '@/types/api'
import { UserDiscord } from '@/types/user'

export class Users {
  private static apiUrl = config.apiUrl

  private static headers = {
    'X-Integration-Key': config.integrationKey
  }

  public static findByDiscordId(discordId: string): Promise<UserDiscord | ApiErrorResponse> {
    return GET<UserDiscord | ApiErrorResponse>(`${this.apiUrl}/users/discord/${discordId}`, this.headers)
  }
}
