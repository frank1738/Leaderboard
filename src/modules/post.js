const name = document.querySelector('.name');
const score = document.querySelector('.scoreValue');
const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fDgOBjH7H9Mg3MUCeA04/scores/';
const post = async (e) => {
  if (name.value === '' && score.value === '') {
    return;
  }
  const newScore = { user: name.value, score: score.value };
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(newScore),
      headers: {
        'content-type': 'application/json',
      },
    });
    const json = await response.json();
  } catch (e) {
    alert('there was an error');
  }
  name.value = '';
  score.value = '';
};
export default post;
