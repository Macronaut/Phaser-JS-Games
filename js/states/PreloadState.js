var PreloadState = {
    preload: function() {
        // show logo and progress bar
        game.preloadLogo = game.add.image(game.world.width/2, game.world.height/2-100, 'preload', 'logo');
        game.preloadLogo.anchor.setTo(0.5);
        
        game.preloadBar = game.add.sprite(game.world.width/2, game.world.height/2+100, 'preload', 'progress');
        game.preloadBar.x -= game.preloadBar.width/2;
        game.load.setPreloadSprite(game.preloadBar);
        
        // load assets 
        game.load.atlasJSONHash('atlas', 'assets/images/atlas.png', 'assets/images/atlas.json');

        // audio
        game.load.audio('sndPew', 'assets/audio/pew.mp3', 'assets/audio/pew.ogg');
        game.load.audio('sndPistol', 'assets/audio/pistol.mp3', 'assets/audio/pistol.ogg');
        game.load.audio('sndGeneric', 'assets/audio/generic.mp3', 'assets/audio/generic.ogg');
        game.load.audio('sndPowerup', 'assets/audio/powerup.mp3', 'assets/audio/powerup.ogg');
        game.load.audio('sndExplosion', 'assets/audio/explosion.mp3', 'assets/audio/explosion.ogg');
        game.load.audio('sndHit', 'assets/audio/hit.mp3', 'assets/audio/hit.ogg');
        game.load.audio('musicOst', 'assets/audio/ost.mp3', 'assets/audio/ost.ogg');
    },
    
    create: function() {
        game.audio.addSound('sndPew', true);
        game.audio.addSound('sndPistol', true);
        game.audio.addSound('sndGeneric', true);
        game.audio.addSound('sndPowerup', true);
        game.audio.addSound('sndExplosion', true);
        game.audio.addSound('sndHit', true);

        game.audio.addMusic('musicOst');
        game.audio.playMusic('musicOst');
        // start game
        game.state.start('MainMenuState');
    }
};