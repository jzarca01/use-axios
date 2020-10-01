export const reducer = (state, action) => {
  switch (action.type) {
    case 'DISPATCH_REQUEST':
      return {
        ...state,
        error: false,
        loading: true
      }
    case 'COMPLETED_REQUEST':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      }
    case 'FAILED_REQUEST':
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return { ...state }
  }
}

export const INITIAL_STATE = {
  data: null,
  loading: false,
  error: false
}
