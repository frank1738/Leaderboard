const container = document.querySelector('.recent-scores');
const divContainer = [];
const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fDgOBjH7H9Mg3MUCeA04/scores/';
const get = async (e) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const scoreData = json.result;
    if (divContainer.length > 0) {
      const divs = document.querySelectorAll('.details');
      divs.forEach((div) => {
        div.remove();
      });
    }
    for (let i = 0; i < scoreData.length; i++) {
      const divElement = document.createElement('div');
      divElement.classList.add('details');
      divElement.innerHTML = ` <p class="score">Name: ${scoreData[i].user}   score:  ${scoreData[i].score}</p>`;
      container.appendChild(divElement);
      divContainer.push(divElement);
    }
  } catch (e) {
    alert('an error occured');
  }
};
export default get;
