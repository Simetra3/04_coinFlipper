const stats = { heads: 0, tails: 0 };
const headsCountdown = document.querySelector('.heads-countdown');
const tailsCountdown = document.querySelector('.tails-countdown');
const reverseImg = 'https://cdn.pixabay.com/photo/2013/07/12/14/27/bronze-148228_1280.png';
const obverseImg = 'https://cdn.pixabay.com/photo/2013/07/12/14/27/franc-148229_1280.png';

document.addEventListener('DOMContentLoaded', function () {
  const probabilityHeadsSlider = document.getElementById('probabilityHeadsSlider');
  const selectedHeadsProbability = document.getElementById('selectedHeadsProbability');
  const startTurboHeadsButton = document.getElementById('startTurboHeads');

  const coinImage = document.getElementById('coin-image');
  const droppedItem = document.querySelector('.dropped-item');
  const imgContainer = document.querySelector('.img-container');

  imgContainer.style.display = 'block';

  probabilityHeadsSlider.addEventListener('input', function () {
    selectedHeadsProbability.textContent = `${this.value}%`;
  });

  startTurboHeadsButton.addEventListener('click', function () {
    const probabilityHeads = parseInt(probabilityHeadsSlider.value);
    const flipCoin = turboLuck(probabilityHeads);
    

    displayResult(flipCoin);
  });

  function turboLuck(probability) {
    const randomValue = Math.random() * 100;
    return randomValue < probability ? 'heads' : 'tails';
  }

  function displayResult(result) {
    coinImage.src = result === 'heads' ? reverseImg : obverseImg;
    droppedItem.textContent = result;
    updateStats(result);
  }

  function updateStats(result) {
    stats[result]++;
    localStorage.setItem('coinStats', JSON.stringify(stats));
    headsCountdown.textContent = `${stats.heads}`;
    tailsCountdown.textContent = `${stats.tails}`;
  }

  const storedStats = JSON.parse(localStorage.getItem('coinStats')) || { heads: 0, tails: 0 };
  stats.heads = storedStats.heads;
  stats.tails = storedStats.tails;
  updateStats(); 
});