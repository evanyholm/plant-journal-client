export type Response<T> = {
  data: T
  status: number
}

const formatResponse = <T>(data: T, status: number): Response<T> => {
  return { data, status }
}

export const apiAgent = (function() {
  const makeRequest = <T>(url: string, method = 'GET', data?: any) => {
    return fetch(url, {
      method,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok && response.status === 200) {
          return response
        }

        throw Error(response.statusText)
      })
      .then(async res => {
        return formatResponse<T>(await res.json(), res.status)
      })
  }

  return {
    get<T>(url: string): Promise<Response<T>> {
      return makeRequest(url)
    },
    // post<T>(url: string, data?: any): Promise<Response<T>> {
    //   return makeRequest(url, 'POST', data)
    // },
    // put<T>(url: string, data?: any): Promise<Response<T>> {
    //   return makeRequest(url, 'PUT', data)
    // },
    // delete<T>(url: string): Promise<Response<T>> {
    //   return makeRequest(url, 'DELETE')
    // },
  }
})()
