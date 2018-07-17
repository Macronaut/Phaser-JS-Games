var Boot = {

    preload:function(){
        /* game.load.spritesheet('sExplosion','./media/effects/fx-1.png', 38, 38);
        game.load.spritesheet('sSpawn','./media/effects/fx-4.png', 36, 36);
        game.load.spritesheet('sHit','./media/effects/fx-2.png', 34, 34);
        game.load.image('sBackground','./media/backgrounds/1.png');
        game.load.image('sProjectile','./media/shots/1.png');
        game.load.image('sPlayer','./media/ships/2.png');
        game.load.image('sEnemy','./media/ships/10.png'); */
    },

    create : function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.stage.smoothed = false;

        /* game.add.text(game.width/2, game.height/2 - 25,'RETRO SPACE 2253',{font: '16px Arial', fill:'#FFF'}).anchor.setTo(.5);
        game.state.start('Play'); */
    },

    update : function(){
        //if(game.input.keyboard.justPressed(Phaser.Keyboard.Z)) game.state.start('Play');
    }
};
