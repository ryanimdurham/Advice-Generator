const apiURL = 'https://api.adviceslip.com/advice';
fetch(apiURL)
  .then(response => response.json())
  .then((data) => {
    document.getElementById('advice-id').innerHTML = data.slip.id;
    document.getElementById('advice-text').innerHTML = data.slip.advice;
    console.log(data)}
    );

