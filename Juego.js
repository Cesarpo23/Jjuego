const player = document.getElementById('player');
const gameBoard = document.getElementById('game-board');

let playerTop = 0;

gameBoard.addEventListener('touchstart', (event) => {
	const touch = event.touches[0];
	playerTop = touch.pageY;
});

gameBoard.addEventListener('touchend', (event) => {
	const touch = event.changedTouches[0];
	const swipeDistance = touch.pageY - playerTop;

	if (swipeDistance > 50) {
		// User swiped up, move player up
		player.style.top = `${playerTop - 50}px`;
	} else if (swipeDistance < -50) {
		// User swiped down, move player down
		player.style.top = `${playerTop + 50}px`;
	}
});
