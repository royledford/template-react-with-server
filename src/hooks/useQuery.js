import { useMemo } from 'react'
import { useQuery as useQueryDefault } from '@tanstack/react-query'

/**
 * Hook to override or extend the react-query behavior
 */
export default function useQuery(queryKey, queryFn) {
  const result = useQueryDefault({ queryKey, queryFn })

  return useMemo(() => {
    return {
      ...result,
      isRefreshing: !result.isLoading && result.isFetching,
    }
  }, [result])
}
