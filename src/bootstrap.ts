import { client } from '@/discord/client'
import { createServer } from '@/server/app'
import { config } from '@/config'

async function bootstrap() {
  try {
    await client.login()

    const app = createServer()

    app.listen(config.port, () => {
      console.log(`Server is running on port "${config.port}"`)
    })
  } catch (error) {
    console.error('Failed to start application', error)
    process.exit(1)
  }
}

bootstrap()
