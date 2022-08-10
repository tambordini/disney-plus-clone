import { instant } from '../../configs/axiosConfig'

export interface IMovies {
  id: number
  name: string
}

export const moviesService = {
  getTopRated: () => {
    return instant.get<IMovies[]>(
      `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
    )
  }
}
