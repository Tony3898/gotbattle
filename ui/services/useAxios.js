import axios from 'axios'
import {useEffect, useState} from "react";

export default function useAxios(url, apiData = {}) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function selfAxios(url, apiData) {
      try {
        let response = await axios.post(url, apiData)
        if (response.data.error)
          throw new Error(response.data.error)
        setData(response.data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    selfAxios(url, apiData)
  }, [url])

  return {data, error, loading}
}
