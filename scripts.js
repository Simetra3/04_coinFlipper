const coin = ['heads', 'tails'];
const droppedItem = document.querySelector('.dropped-item');
const button = document.getElementById('wish-u-luck');
const imgContainer = document.querySelector('.img-container');
const coinImage = document.getElementById('coin-image');
const headsCountdown = document.querySelector('.heads-countdown');
const tailsCountdown = document.querySelector('.tails-countdown');
const reset = document.getElementById('reset-countdowns');

let reverseImg = 'https://cdn.pixabay.com/photo/2013/07/12/14/27/bronze-148228_1280.png';
let obverseImg = 'https://cdn.pixabay.com/photo/2013/07/12/14/27/franc-148229_1280.png';

const stats = {
  heads: 0,
  tails: 0
}


const luck = () => {
  return coin[Math.floor(Math.random() * coin.length)]
};



const updateStats = () => {
  headsCountdown.textContent = `${stats.heads}`;
  tailsCountdown.textContent = `${stats.tails}`;

  localStorage.setItem('headsCount', stats.heads);
  localStorage.setItem('tailsCount', stats.tails);
};

button.addEventListener('click', () => {
  const flipCoin = luck();

  imgContainer.style.display = 'block';

  if (flipCoin === 'heads') {
    droppedItem.textContent = flipCoin;
    coinImage.src = reverseImg;
    stats.heads++;
  } else if (flipCoin === 'tails') {
    droppedItem.textContent = flipCoin;
    coinImage.src = obverseImg;
    stats.tails++;
  }

  updateStats();
});

const resetStats = () => {
  stats.heads = 0;
  stats.tails = 0;
  updateStats();
};

reset.addEventListener('click', resetStats);