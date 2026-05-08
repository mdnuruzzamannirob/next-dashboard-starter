import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.trim() ?? ''

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'include',
    prepareHeaders: (headers) => {
      headers.set('Accept', 'application/json')
      return headers
    },
  }),
  endpoints: () => ({}),
})
