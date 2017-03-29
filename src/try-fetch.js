let avaliableIds = [];

/**
 * получение всех объектов
 */
 fetch('http://localhost:2403/articles')
   .then(response => response.json())
   .then(articles => {
     const ids = articles.map((article) => {
       return article.id;
     });

     avaliableIds = ids;
   })
   .catch(err => {
     console.log(`error in fetch: ${err.message}`);
   });

const data = {
  title: 'Some title from fetch',
  description: 'some description from fetch',
  lessons: ['Lesson 1', 'Lesson 2', 'Lesson 3']
}

/**
 * создание нового объекта article
 */
(function(data) {
  fetch('http://localhost:2403/articles', {
  method: 'post',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => { console.log('Request succeeded with new article\'s id' , data.id); })
  .catch(err => {console.log(err.message);})
}(data));

/**
 * изменение объекта по id
 */
(function(id) {
  fetch(`http://localhost:2403/articles/${id}`, {
    method: 'put',
    headers: {
      'Content-type': 'application/json'
    },
    body: '{"title": "Fetch can change whatever via put method"}'
  })
    .then(response => response.json())
    .then(data => { console.log('Request succeeded with new article\'s id' , data.id); })
    .catch(err => {console.log(err.message);})
}('940a720df900fa59'));

/**
 * удаление объекта по id
 */
(function() {
  const id = avaliableIds[Math.round(Math.random()) * avaliableIds.length]
  fetch(`http://localhost:2403/articles/${id}`, {
    method: 'delete'
  })
    .then(response => response.json())
    .then(data => { console.log('Request succeeded with new article\'s id' , data.id); })
    .catch(err => {console.log(err.message);})
}());
