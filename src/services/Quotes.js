export const getQuotes = () => {
  return fetch('https://neelpatel05.pythonanywhere.com/', {
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
  
