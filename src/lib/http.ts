import fetch from 'cross-fetch'
import merge from 'lodash/merge'

import { ApiErrorResponse } from '@/types/api'

type Payload = Record<string, any>
type Headers = Payload

const defaultHeaders: Headers = {
  'Content-Type': 'application/json'
}

const parseResponse = async <Type>(response: Response): Promise<Type> => {
  const contentType = response.headers.get('Content-Type')

  if (contentType && contentType.startsWith('application/json')) {
    return await response.json()
  }

  return response.text() as unknown as Type
}

export const GET = async <Type>(
  path: string,
  headers: Headers = {}
): Promise<Type | ApiErrorResponse> => {
  const response = await fetch(path, {
    headers: merge({}, defaultHeaders, headers)
  })

  return parseResponse<Type>(response)
}
