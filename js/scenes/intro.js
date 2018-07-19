var Intro = {

    preload:function(){
        game.load.bitmapFont('space', './media/fonts/font.png', './media/fonts/font.fnt');
        game.load.spritesheet('sExplosion','./media/effects/fx-1.png', 38, 38);
        game.load.spritesheet('sSpawn','./media/effects/fx-4.png', 36, 36);
        game.load.spritesheet('sHit','./media/effects/fx-2.png', 34, 34);
        game.load.image('sBackground','./media/backgrounds/1.png');
        game.load.image('sProjectile','./media/shots/1.png');
        game.load.image('sPlayer','./media/ships/2.png');
        game.load.image('sEnemy','./media/ships/10.png');
    },

    create : function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.stage.smoothed = false;

        new BackgroundClass(game, 0, 0, game.world.width, game.world.height, 'sBackground');

        var style = { font: "bold 12px Arial", fill: "#fff"};
        
        game.add.bitmapText(game.world.centerX, game.world.centerY + 20, 'space','PRESS Z TO START', 12).anchor.setTo(.5);
        game.add.bitmapText(game.world.centerX, game.world.centerY, 'space','Space Destroyer', 20).anchor.setTo(.5);
    },

    update : function(){
        if(game.input.keyboard.justPressed(Phaser.Keyboard.Z)) game.state.start('Play');
    }
};
