export const wait = (timeout) =>
	new Promise((resolve) => {
		setTimeout(resolve, timeout);
	});

export const randomOffset = (limit = 200) => Math.round(Math.random() * 100) % limit;

const RandomWait = () => {
	const offset = randomOffset(100);

	if (offset < 50) {
		return Promise.resolve();
	}

	return wait(randomOffset(1000));
};

export default RandomWait;
