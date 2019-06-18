export const getQuotes = () => {
  return fetch('https://cors-anywhere.herokuapp.com/https://neelpatel05.pythonanywhere.com/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      origin: null
    }
  })
    .then(res => {
      return res.json();
    });
};
  
