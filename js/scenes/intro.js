var Intro = {

    preload:function(){
        game.load.spritesheet('sExplosion', './media/effects/fx-1.png', 38, 38);
        game.load.image('sBackground', './media/backgrounds/1.png');
        game.load.image('sProjectile', './media/shots/1.png');
        game.load.image('sOctopus', './media/ships/10.png');
        game.load.image('sPlayer','./media/ships/2.png');
    },

    create : function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.stage.smoothed = false;

        var subtitle = game.add.text(game.world.centerX, game.world.centerY, "PRESS Z TO START", { font: "bold 12px Arial", fill: "#fff"} );
        var title = game.add.text(game.world.centerX, game.world.centerY - 35, "POWER SPACE", { font: "bold 30px Arial", fill: "#fff"} );

        subtitle.anchor.setTo(.5);
        title.anchor.setTo(.5);
    },

    update : function(){
        if( game.input.keyboard.justPressed(Phaser.Keyboard.Z) ) game.state.start('Play');
    }
};
