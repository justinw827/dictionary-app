import axios from 'axios'

const OWLBOT_URL = 'https://owlbot.info/api/v4/dictionary'
const BACKEND_URL = 'http://localhost:8000'


export const GetSearchResult = async (term) => {
  const response = await axios.get(`${OWLBOT_URL}/${term}`, {
    headers: {
      Authorization: `Token ${process.env.REACT_APP_OWLBOT_KEY}`
    }
  })
  return response.data
}

export const GetFavorites = async () => {
  const response = await axios.get(`${BACKEND_URL}/favorites`)

  return response.data
}

export const AddFavorite = async (newFavorite) => {
  const response = await axios.post(`${BACKEND_URL}/favorites`, {newFavorite}, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        })

  return response
}
