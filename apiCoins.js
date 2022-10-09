// const fetch = require('node-fetch');

const fetchCoins = async () => {
  const assetsURL = 'https://api.coincap.io/v2/assets';
  const postList = document.getElementById('coins-list');

  try {
    const response = await fetch(assetsURL);
    const data = await response.json();
    const { data: dataKey } = data;
    const dataKeyTen = dataKey.slice(0, 10);

    dataKeyTen.forEach(({ name, symbol, priceUsd }) => {
      const newLi = document.createElement('li');
      newLi.innerHTML = `${name} (${symbol}): ${Number(priceUsd).toFixed(2)}`;
      postList.appendChild(newLi);
    });
  } catch (err) {
    console.log(err);
  }
};

fetchCoins();