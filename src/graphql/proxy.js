import axios from 'axios';
import { config } from '../config/config';

export const makeGraphqlRequest = async (query, variables = {}) => {
	try {
		const data = { query, variables };
		const response = await axios.post(config.tmdbwApiEndpoint, { ...data });
		if (response.status !== 200) return { error: 'Invalid request' };
		if (!response.data) return { error: 'No data returned' };
		return response.data;
	} catch (e) {
		return { error: e.message };
	}
};