import { Request, Response, NextFunction } from 'express'
import { config } from '@/config'

export const integrationAuth = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (request.path === '/health') {
    return next()
  }

  const integrationKey = request.header('X-Integration-Key')

  if (!integrationKey || integrationKey !== config.integrationKey) {
    return response.status(401).json({
      error: 'Unauthorized'
    })
  }

  next()
}
