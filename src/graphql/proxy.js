import axios from 'axios';

export const makeGraphqlRequest = async (query, variables = {}) => {
    try {
      const data = { query, variables };
      const response = await axios.post(`https://tmdb.sandbox.zoosh.ie/dev/graphql`, { ...data });
      if (response.status !== 200) return { error: 'Invalid request' };
      if (!response.data) return { error: 'No data returned' };
      return response.data;
    } catch (e) {
      return { error: e.message };
    }
};