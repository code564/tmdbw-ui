import axios from 'axios';

export const makeGraphqlRequest = async (query, variables = {}) => {
    try {
      const data = { query, variables };
      const response = await axios.post(`https://tmdb.sandbox.zoosh.ie/dev/graphql`, { ...data });
      if (response.status !== 200) return null;
      if (!response.data) return { error: 'NO_DATA_RETURNED' };
      return response.data;
    } catch (e) {
      return { error: e.message };
    }
};