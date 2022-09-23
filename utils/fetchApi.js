import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': 'cdac2fe1eamshc6770f6cb0ad0ccp1210e8jsne3c5fb84b6db',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  })

  return data
}
