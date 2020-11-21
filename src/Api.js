import axios from 'axios'

const URL = 'https://owlbot.info/api/v4/dictionary'

export const GetSearchResult = async (term) => {
  const response = await axios.get(`${URL}/${term}`, {
    headers: {
      Authorization: `Token ${process.env.REACT_APP_OWLBOT_KEY}`
    }
  })
  return response.data
}