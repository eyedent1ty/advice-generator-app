const fetchAdviceData = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    return data;
};

const renderData = (data) => {
    const { id, advice } = data.slip;

    const adviceId = document.querySelector('.advice__id');
    const adviceQuote = document.querySelector('.advice__quote');
    adviceId.innerHTML = `ADVICE #${id}`;
    adviceQuote.innerHTML = `"${advice}"`;
};

const fetchAndRenderData = () => {
    fetchAdviceData()
        .then(renderData)
        .catch((err) => console.log(err));
};

fetchAndRenderData();

const iconContainer = document.querySelector('.icon-container');
iconContainer.addEventListener('click', fetchAndRenderData);
