export default (radius, percent) => {
  const circumference = Math.PI * (2 * radius);

  const dasharray = circumference - ((percent / 100) * circumference)

  return {
    circumference,
    dasharray
  };
}
