function init() {
	var c=document.getElementById('game_canvas');
	var ctx=c.getContext("2d");

	var game_board = new Image(); 
	game_board.src = 'pacman10-hp-sprite.png';
	game_board.addEventListener("load", function() {
	  ctx.drawImage(game_board, 322, 2, 463, 135, 0, 0, 463, 135);
	  ctx.drawImage(game_board, 83, 23, 15, 15, 37, 32, 15, 15);
	}, false);
}