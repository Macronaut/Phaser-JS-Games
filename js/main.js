var game = new Phaser.Game(320, 320, Phaser.AUTO, 'body', this, false, false);

game.state.add('Intro', Intro);
game.state.add('Play', Play);
game.state.start('Intro');
