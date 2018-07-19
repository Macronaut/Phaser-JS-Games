var game = new Phaser.Game(320, 480, Phaser.AUTO);

game.state.add('Intro', Intro);
game.state.add('Play', Play);
game.state.start('Intro');
