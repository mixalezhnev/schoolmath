export const getCircleProgress = (radius, percent = 0) => {
	const circumference = Math.PI * (2 * radius);

	const dasharray = circumference - ((percent / 100) * circumference)

	return {
		circumference,
		dasharray
	};
}

export const objToArray = (obj) =>
	Object.keys(obj).map(key => obj[key]);
