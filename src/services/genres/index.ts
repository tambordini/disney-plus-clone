import { instant } from '../../configs/axiosConfig'

export interface IGenres {
  id: number
  name: string
}

export const genresService = {
  getAll: () => {
    return instant.get<IGenres[]>(
      `/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
    )
  }
}
