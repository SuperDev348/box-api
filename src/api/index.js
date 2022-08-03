import axios from 'axios'

export const SUCCESS = 'success'
export const FAILURE = 'failure'

const API_PORT = process.env.BS_API_PORT ? process.env.BS_API_PORT : 5000

export const getGameData = async (league) => {
  let url = `http://localhost:${API_PORT}/api/games`
  if (league) {
    url = `${url}?league=${league}`
  }

  let formattedResponse

  try {
    const res = await axios.get(url)

    formattedResponse = {
      type: SUCCESS,
      payload: { body: res.data },
    }
  } catch (err) {
    const { response } = err
    formattedResponse = {
      type: FAILURE,
      payload: {
        error: {
          message: response.data.message ? response.data.message : 'Request failed',
          status: response.status,
        },
      },
    }
  }

  return formattedResponse
}

export default getGameData
