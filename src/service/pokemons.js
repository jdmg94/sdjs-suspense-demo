import { randomOffset } from './randomWait';

export const getPokedex = async (limit = 8) => {
	const offset = randomOffset();
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
	const { results } = await response.json();

	// await randomWait();

	return results;
};
