export default function fetchData(url) {
  fetch(url)
    .then(response => response.json())
    .then(articles => {
      this.setState({
        articles
      });
    })
    .catch(err => {
      console.log(`error in fetch: ${err.message}`);
    });
}
