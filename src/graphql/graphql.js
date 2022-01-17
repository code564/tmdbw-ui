export const QUERY_FETCH_POPULAR = `
query fetchPopular {
    movies: popularMovies {
      id
      name
      overview
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
      overview
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

export const QUERY_GET_SIMILAR_MOVIES = (id) => `
query getMovie {
  movie(id: ${id}) {
    similar {
      ... on Movie {
        id
        name
        overview
        genres {
          name
        }
        score
        img: poster {
          url: custom(size: "w185_and_h278_bestv2")
        }
      }
    }
  }
}
`