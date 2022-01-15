export const QUERY_FETCH_POPULAR = `
query fetchPopular {
    movies: popularMovies {
      id
      name
      overview
      releaseDate
      genres {
        name
      }
      score
      img: poster {
        url: custom(size: "w185_and_h278_bestv2")
      }
      reviews {
        id
        author
        content
        language {
          code
          name
        }
      }
    }
  }
`

export const QUERY_SEARCH_MOVIES = (query) => `
query SearchMovies {
    searchMovies(query: "${query}") {
      id
      name
      overview
      releaseDate
      genres {
        name
      }
      score
      img: poster {
        url: custom(size: "w185_and_h278_bestv2")
      }
      cast {
        id
        person {
          name
        }
        role {
          ... on Cast {
            character
          }
        }
      }
    }
  }
`