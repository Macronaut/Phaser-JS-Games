var Phaser = Phaser || {};
var gameWidth = 540;
var gameHeight = 960;

var game = new Phaser.Game(gameWidth, gameHeight, Phaser.CANVAS);
game.settings = {
    'lockOrientation': true, // should we prevent a player from playing using incorrect orientation?
    'displayOrientation': 'portrait', // portrait, landscape
    'storagePrefix': 'o10_' // prefix for local storage items
}

game.state.add('BootState', BootState);
game.state.add('PreloadState', PreloadState);
game.state.add('MainMenuState', MainMenuState);
game.state.add('SelectLevelState', SelectLevelState);
game.state.add('GameState', GameState);