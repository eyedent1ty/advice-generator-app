// Generate random number as id
const randomId = () => {
  return Math.floor(Math.random() * 224) + 1;
};

// Return a promise with the data if resolved
const fetchAdviceData = async (id) => {
  console.log(navigator.userAgent);
  const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
  const data = await response.json();
  return data;
};

// Display the advice id and quote
const renderData = (data) => {
  const { id, advice } = data.slip;
  const adviceId = document.querySelector('.advice__id');
  const adviceQuote = document.querySelector('.advice__quote');
  adviceId.innerHTML = `ADVICE #${id}`;
  adviceQuote.innerHTML = `"${advice}"`;
};

const fetchAndRenderData = () => {
  fetchAdviceData(randomId())
    .then(renderData)
    .catch((err) => console.log(err));
};

fetchAndRenderData();

const iconContainer = document.querySelector('.icon-container');
iconContainer.addEventListener('click', fetchAndRenderData);
