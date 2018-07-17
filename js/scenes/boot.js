var Boot = {

    preload:function(){
        /* game.load.spritesheet('sExplosion','./media/effects/fx-1.png', 38, 38);
        game.load.image('sBackground','./media/backgrounds/1.png'); */
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
