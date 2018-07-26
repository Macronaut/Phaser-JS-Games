var loadScriptsSync = function (scripts) {
    if (scripts.length === 0) return game.state.start('BootState'); ;
    var path = scripts.shift();
    var js = document.createElement('script');
    js.async = true;
    js.onload = function(){
        loadScriptsSync(scripts);
    }
    js.src = path;
    document.head.appendChild(js);
}
var scripts = [
    'js/util.js',

    'js/states/BootState.js',
    'js/states/PreloadState.js',
    'js/states/MainMenuState.js',
    'js/states/SelectLevelState.js',
    'js/states/GameState.js',
    'js/main.js',

    'js/classes/util/Orientation.js',
    'js/classes/util/Storage.js',
    'js/classes/util/AudioController.js',
    'js/components/AudioSwitch.js',

    'js/classes/vfx/Parallax.js',
    'js/classes/vfx/Explosion.js',
    'js/classes/shots/Shot.js',
    'js/classes/shots/Bullet.js',
    'js/classes/shots/BulletBig.js',
    'js/classes/shots/Spit.js',
    'js/classes/shots/Laser.js',
    'js/classes/shots/Wave.js',
    'js/classes/shots/Plasma.js',
    'js/classes/shots/BeamSmall.js',
    'js/classes/shots/BeamBig.js',
    'js/classes/weapons/Machinegun.js',
    'js/classes/weapons/Pistol.js',
    'js/classes/weapons/Spitter.js',
    'js/classes/weapons/SmallLaser.js',
    'js/classes/weapons/Sonic.js',
    'js/classes/weapons/PlasmaGun.js',
    'js/classes/weapons/BeamerSmall.js',
    'js/classes/weapons/BeamerBig.js',
    'js/classes/PlayerShip.js',
    'js/classes/enemies/Enemy.js',
    'js/classes/enemies/Marine.js',
    'js/classes/enemies/Scout.js',
    'js/classes/enemies/Asteroid.js',
    'js/classes/enemies/Squid.js',
    'js/classes/enemies/Slider.js',
    'js/classes/enemies/Spider.js',
    'js/classes/enemies/Assault.js',
    'js/classes/enemies/Octopus.js',
    'js/classes/enemies/Brain.js',
    'js/classes/enemies/Lurr.js',
    'js/classes/Powerup.js',
    'js/classes/EnemySpawner.js',

    'js/classes/gui/HUD.js',
    'js/classes/gui/HealthBar.js',
    'js/classes/gui/LevelComplete.js',
    'js/classes/gui/GameOver.js',

    'js/levels.js',
];

loadScriptsSync(scripts);