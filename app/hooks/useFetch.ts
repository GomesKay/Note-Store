import { useCallback, useEffect, useState } from "react"

import { api } from "../lib/api"

interface UseFetchProps {
  queryKey?: any[]
  url: string
  params?: object
  delay?: number
  initialData?: any
  enabled?: boolean
}

export function useFetch<T extends object>(config: UseFetchProps) {
  const [memoConfig, setMemoConfig] = useState(config)

  useEffect(() => {
    setMemoConfig(config)
  }, [JSON.stringify(config.queryKey)])

  const { url, params, delay = 2000, initialData, enabled = true } = memoConfig

  const [data, setData] = useState<T>(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const refetch = useCallback(() => {
    if (enabled) {
      async function fetchData() {
        setIsLoading(true)
        setError(null)

        await new Promise((res) => setTimeout(res, delay))

        try {
          const response = await api.get(url, {
            params,
          })

          setData(response.data)
        } catch {
          setError("Não foi possível carregar os dados")
        } finally {
          setIsLoading(false)
        }
      }

      fetchData()
    }
  }, [enabled, delay, url, params])

  useEffect(() => {
    refetch()
  }, [refetch])

  return { data, isLoading, error, refetch }
}
