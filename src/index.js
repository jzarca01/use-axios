import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

import { reducer, INITIAL_STATE } from './reducer'

export function useAxiosMamene(options) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  if (typeof options === 'string') {
    options = {
      method: 'GET',
      url: options
    }
  }

  useEffect(() => {
    ;async () => {
      dispatch({ type: 'DISPATCH_REQUEST' })
      try {
        const response = await axios(options)
        return dispatch({ type: 'COMPLETED_REQUEST', data: response.data })
      } catch (err) {
        dispatch({ type: 'FAILED_REQUEST' })
      }
    }
  }, [options])

  return [state.data, state.loading, state.error]
}
