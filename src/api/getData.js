const getData = () => {
  return fetch('http://localhost:2403/articles');
}

export default getData;
