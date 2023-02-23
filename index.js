const boxes = Array.from(document.querySelectorAll('#box'));
const button = document.getElementById('button1');
const resultDiv = document.getElementById('winner');

const combinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
  [0, 4, 8], [2, 4, 6] 
];

let count = 0;
let winner = null;

boxes.forEach(function(box) {
    box.addEventListener('click', function(e) {
      if(winner) return;
        e.preventDefault();
        box.innerHTML = (count % 2 === 0? 'X' : 'O');
        count++;
        combinations.forEach(function(combination) {
          if(combination.every(element => boxes[element].innerHTML === box.innerHTML)) {
            winner = box.innerHTML;
            console.log(`Winner is ${winner}`);
            resultDiv.innerHTML = `Winner is: ${winner}!`;
          }
        });
    });
});

button.addEventListener('click', function() {
    boxes.forEach(function(box) {
        box.innerHTML = '';
    });
    winner = 0;
    count = 0;
    resultDiv.innerHTML = '';
});







/* const boxes = Array.from(document.querySelectorAll('#box'));
const winCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],  // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8],  // columns
  [0, 4, 8], [2, 4, 6]  // diagonals
];

let count = 0;
let winner = null;

boxes.forEach(function(box, index) {
  box.addEventListener('click', function(e) {
    if (winner) return;
    e.preventDefault();
    box.innerHTML = (count % 2 === 0? 'X' : 'O');
    count++;

    winCombinations.forEach(function(combination) {
      if (combination.every(i => boxes[i].innerHTML === box.innerHTML)) {
        winner = box.innerHTML;
        console.log(`The winner is ${winner}!`);
      }
    });
  });
});
 */