// const fetch = require('node-fetch');

const assetsURL = 'https://api.coincap.io/v2/assets';
const cur = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/brl.json';
const postList = document.getElementById('coins-list');
const convList = document.getElementById('convert-list');

const createLi = (dataTen, listID, brl = 1) => {
  dataTen.forEach(({ name, symbol, priceUsd }) => {
    const newLi = document.createElement('li');
    newLi.innerHTML = `${name} (${symbol}): ${(Number(priceUsd) * brl).toFixed(2)}`;
    listID.appendChild(newLi);
  });
};

const fetchCoins = async () => {
  try {
    const respAssets = await fetch(assetsURL);
    const dataAssets = await respAssets.json();
    const { data } = dataAssets;
    const dataTen = data.slice(0, 10);
    createLi(dataTen, postList);
    
    const respConvert = await fetch(cur);
    const dataConvert = await respConvert.json();
    const { brl } = dataConvert;
    createLi(dataTen, convList, brl);
  } catch (err) { console.log(err); }
};

fetchCoins();