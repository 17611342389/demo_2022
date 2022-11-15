fetch('http://localhost:8080/aaa')
.then(function (response) {
    return response.json();
})
.then(function (myJson) {
    console.log(myJson);
});
axios.get('http://localhost:8080/aaa')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });