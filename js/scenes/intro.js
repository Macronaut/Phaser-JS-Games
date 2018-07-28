var Intro = {

    preload:function(){
        game.load.tilemap('levelJSON', './media/ChocoPrairie.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.json('objectJSON', './media/ChocoPrairie.json');
        game.load.spritesheet('sPlayer','./media/sPlayer.png', 14, 19);
        game.load.image('sTileset', './media/sTileset.png');
    },

    create : function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;        
    },

    update : function(){
        //if( game.input.keyboard.justPressed(Phaser.Keyboard.Z) ) game.state.start('Play');
        game.state.start('Play');
    }
};
