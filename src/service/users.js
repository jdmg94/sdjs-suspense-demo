// import randomWait from './randomWait';

export const getUser = async () => {
	const response = await fetch('https://randomuser.me/api');
	const { results } = await response.json();
	const [data] = results;

	// await randomWait();

	return data;
};
