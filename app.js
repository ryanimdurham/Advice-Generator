const apiURL = 'https://api.adviceslip.com/advice';
fetch(apiURL)
  .then(response => response.json())
  .then((data) => {
    document.getElementById('adviceId').innerHTML = data.slip.id;
    document.getElementById('adviceText').innerHTML = data.slip.advice;
    console.log(data)}
    );

