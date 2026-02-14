import { client } from '@/discord/client'
import { integrationAuth } from '@/middlewares/integration-auth'
import express from 'express'

export const createServer = () => {
  const app = express()

  app.use(integrationAuth)
  app.use(express.json())

  app.get('/health', (request, response) => {
    response.json({
      ok: true,
      discord: client.isReady(),
      timestamp: new Date().toISOString()
    })
  })

  return app
}
