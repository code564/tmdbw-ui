export const QUERY_FETCH_POPULAR = `
query fetchPopular {
    movies: popularMovies {
      id
      name
      genres {
        name
      }
      score
      img: poster {
        url: custom(size: "w185_and_h278_bestv2")
      }
    }
  }
`

export const QUERY_SEARCH_MOVIES = (query) => `
query SearchMovies {
    searchMovies(query: "${query}") {
      id
      name
      genres {
        name
      }
      score
      img: poster {
        url: custom(size: "w185_and_h278_bestv2")
      }
    }
  }
`