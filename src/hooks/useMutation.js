import toast from 'react-hot-toast'

import { getErrorMessage, Logger } from '@/libs'

export { useMutation } from '@tanstack/react-query'
export { useInfiniteQuery } from '@tanstack/react-query'

const log = Logger('useMutation.js')

export function handleError(
  e,
  { message = 'There was an issue. Please contact customer support.' } = {},
) {
  log.warn(getErrorMessage(e))
  toast.error(message)
}

export function handleDetailedError(e) {
  const errorMessages = (e.response?.data?.errors ?? []).reduce(
    (previousValue, error) => {
      if (error?.detail?.length) {
        previousValue.push(error.detail)
      }

      return previousValue
    },
    [],
  )

  if (!errorMessages.length) {
    handleError(e)
    return
  }

  log.warn(getErrorMessage(e))
  toast.error(errorMessages.join('\n'))
}
