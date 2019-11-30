const config: RequestInit = {
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
  referrer: 'no-referrer',
}
export const api = {
  get: async (url: string) => {
    const init = { ...config, method: 'GET' }
    return await fetch(url, init)
  },
  post: async (url: string) => {},
}
