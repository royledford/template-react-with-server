import api from './index'
import queryString from 'query-string'
import { checkAuth } from '@/services/checkAuth'

const PostsApi = {
  all: (query, config) => {
    // const response = await fetch('/posts')
    // console.log('response', response) // TODO: remove this

    // const data = await response.json()
    // console.log('data', data) // TODO: remove this
    // return data ?? []
    return (
      api
        // .get(queryString.stringify({ url: '/posts', query }))
        .get('/posts', query)
        .then((res) => res?.data ?? [])
    )
  },
}

export default PostsApi
