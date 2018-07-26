var game = new Phaser.Game(320, 320, Phaser.AUTO);

game.state.add('Intro', Intro);
game.state.add('Play', Play);
game.state.start('Intro');
