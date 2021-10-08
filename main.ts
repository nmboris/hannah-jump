const baumStammBild = img`
    .....6feeeeeeeeeef6.....
    ....6776eeeeeeeee676....
    ...6777666eeee6667776...
    ..6776ee67777777667776..
    ...668ee7768867788666...
    ......ee77eeee67eeee....
    ......ee6eeeeee6cef.....
    ......eeeeeeeeeeeef.....
    ......eeeeeeeeeeeef.....
    ......eeeeeeeeeeecf.....
    ......eeeeeeeeeeecf.....
    ......eeeeeeeeeeeff.....
    ......feeeeeeeeeefe.....
    .....6feeeeeeeeeef6.....
    ....6776eeeeeeeee676....
    ...6777666eeee6667776...
    ..6776ee67777777667776..
    ...668ee7768867788666...
    ......ee77eeee67ee......
    ......ee6eeeeee6ce......
    ......eefeeeeeeece......
    ......eeceeeeeeece......
    ......eeceeeeeeefe......
    ......eeceeeeeeefe......
    ......eeeeeeeeeefe......
    ......eeeeeeeeeece......
    .....6eeeeeeeeeece6.....
    ....6776eeeeeeeee676....
    ...6776666eeee6766776...
    ..6776ee77777777667776..
    ...668ce7768867788666...
    ......ce77eeee67ee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......beeeeeeeeeeb......
    .......beeeeeeeeb.......
    ........beeeeeeb........
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `;
const littleCloudImage = img`
    . . . . . . . . . . . . . . . .
    . . . . 1 . . . . 1 1 . . . . .
    . . 1 1 1 1 . . 1 1 1 1 . . . .
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . .
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 . .
    1 1 1 1 1 1 1 1 1 1 1 1 . . . .
    1 1 . 1 1 1 1 1 1 1 1 1 1 . . .
    1 . . . 1 . . . 1 1 1 1 1 . . .
    . . . . . . . . . 1 1 1 . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
const mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . b b d d d 5 5 5 5 5 5 5 b . . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    c b 5 5 b c d d 5 5 5 5 5 5 b . 
    b b c c c d d d 5 5 5 5 5 d b . 
    . . . . c c d d d 5 5 5 b b . . 
    . . . . . . c c c c c b b . . . 
    `, SpriteKind.Player);

const costumes: Image[] = [
    img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . b 5 5 b . . .
        . . . . . . b b b b b b . . . .
        . . . . . b b 5 5 5 5 5 b . . .
        . b b b b b 5 5 5 5 5 5 5 b . .
        . b d 5 b 5 5 5 5 5 5 5 5 b . .
        . . b 5 5 b 5 d 1 f 5 d 4 f . .
        . . b d 5 5 b 1 f f 5 4 4 c . .
        b b d b 5 5 5 d f b 4 4 4 4 b .
        b d d c d 5 5 b 5 4 4 4 4 4 4 b
        c d d d c c b 5 5 5 5 5 5 5 b .
        c b d d d d d 5 5 5 5 5 5 5 b .
        . c d d d d d d 5 5 5 5 5 d b .
        . . c b d d d d d 5 5 5 b b . .
        . . . c c c c c c c c b b . . .
    `,
    img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . b 5 b . . .
        . . . . . . . . . b 5 b . . . .
        . . . . . . b b b b b b . . . .
        . . . . . b b 5 5 5 5 5 b . . .
        . b b b b b 5 5 5 5 5 5 5 b . .
        . b d 5 b 5 5 5 5 5 5 5 5 b . .
        . . b 5 5 b 5 d 1 f 5 d 4 f . .
        . . b d 5 5 b 1 f f 5 4 4 c . .
        b b d b 5 5 5 d f b 4 4 4 4 4 b
        b d d c d 5 5 b 5 4 4 4 4 4 b .
        c d d d c c b 5 5 5 5 5 5 5 b .
        c b d d d d d 5 5 5 5 5 5 5 b .
        . c d d d d d d 5 5 5 5 5 d b .
        . . c b d d d d d 5 5 5 b b . .
        . . . c c c c c c c c b b . . .
    `,
    img`
        . . . . . . . . . . b 5 b . . .
        . . . . . . . . . b 5 b . . . .
        . . . . . . . . . b c . . . . .
        . . . . . . b b b b b b . . . .
        . . . . . b b 5 5 5 5 5 b . . .
        . . . . b b 5 d 1 f 5 5 d f . .
        . . . . b 5 5 1 f f 5 d 4 c . .
        . . . . b 5 5 d f b d d 4 4 . .
        b d d d b b d 5 5 5 4 4 4 4 4 b
        b b d 5 5 5 b 5 5 4 4 4 4 4 b .
        b d c 5 5 5 5 d 5 5 5 5 5 b . .
        c d d c d 5 5 b 5 5 5 5 5 5 b .
        c b d d c c b 5 5 5 5 5 5 5 b .
        . c d d d d d d 5 5 5 5 5 d b .
        . . c b d d d d d 5 5 5 b b . .
        . . . c c c c c c c c b b . . .
    `,
    img`
        . . . . . . . . . . b 5 b . . .
        . . . . . . . . . b 5 b . . . .
        . . . . . . b b b b b b . . . .
        . . . . . b b 5 5 5 5 5 b . . .
        . . . . b b 5 d 1 f 5 d 4 c . .
        . . . . b 5 5 1 f f d d 4 4 4 b
        . . . . b 5 5 d f b 4 4 4 4 b .
        . . . b d 5 5 5 5 4 4 4 4 b . .
        . . b d d 5 5 5 5 5 5 5 5 b . .
        . b d d d d 5 5 5 5 5 5 5 5 b .
        b d d d b b b 5 5 5 5 5 5 5 b .
        c d d b 5 5 d c 5 5 5 5 5 5 b .
        c b b d 5 d c d 5 5 5 5 5 5 b .
        . b 5 5 b c d d 5 5 5 5 5 d b .
        b b c c c d d d d 5 5 5 b b . .
        . . . c c c c c c c c b b . . .
    `,
    img`
        . . . . . . . . . . b 5 b . . .
        . . . . . . . . . b 5 b . . . .
        . . . . . . b b b b b b . . . .
        . . . . . b b 5 5 5 5 5 b . . .
        . . . . b b 5 d 1 f 5 d 4 c . .
        . . . . b 5 5 1 f f d d 4 4 4 b
        . . . . b 5 5 d f b 4 4 4 4 b .
        . . . b d 5 5 5 5 4 4 4 4 b . .
        . b b d d d 5 5 5 5 5 5 5 b . .
        b d d d b b b 5 5 5 5 5 5 5 b .
        c d d b 5 5 d c 5 5 5 5 5 5 b .
        c b b d 5 d c d 5 5 5 5 5 5 b .
        c b 5 5 b c d d 5 5 5 5 5 5 b .
        b b c c c d d d 5 5 5 5 5 d b .
        . . . . c c d d d 5 5 5 b b . .
        . . . . . . c c c c c b b . . .
    `,
    img`
        . . . . . . . . . . b 5 b . . .
        . . . . . . . . . b 5 b . . . .
        . . . . . . b b b b b b . . . .
        . . . . . b b 5 5 5 5 5 b . . .
        . . . . b b 5 d 1 f 5 5 d f . .
        . . . . b 5 5 1 f f 5 d 4 c . .
        . . . . b 5 5 d f b d d 4 4 . .
        . b b b d 5 5 5 5 5 4 4 4 4 4 b
        b d d d b b d 5 5 4 4 4 4 4 b .
        b b d 5 5 5 b 5 5 5 5 5 5 b . .
        c d c 5 5 5 5 d 5 5 5 5 5 5 b .
        c b d c d 5 5 b 5 5 5 5 5 5 b .
        . c d d c c b d 5 5 5 5 5 d b .
        . . c b d d d d d 5 5 5 b b . .
        . . . c c c c c c c c b b . . .
        . . . . . . . . . . . . . . . .
    `
];

let currentCostume = 0;
let jumps = 0;  // Jump counter
let treeSpeed = -60;

// Init the little cloud in the sky
const CloudSpriteKind = SpriteKind.create();
const littleCloud = sprites.create(littleCloudImage, CloudSpriteKind);
littleCloud.x = screen.width;
littleCloud.y = 30;
littleCloud.vx = treeSpeed * .4;

// Init mySprit
mySprite.setImage(costumes[currentCostume]);
mySprite.setStayInScreen(true); // Player can't fall off the screen
mySprite.x = 20;
mySprite.y = screen.height /2;  // Startposition
mySprite.ay = 160;

// Let the player move the bird left <-> right
controller.moveSprite(mySprite, 30, mySprite.vy);

// Init screen
scene.setBackgroundColor(9);

// Init score
info.setScore(0);

// Jump one or max two times on button A press
controller.A.onEvent(ControllerButtonEvent.Pressed, () => {
    if (jumps > 1) {    // Sometimes we need a second jump
        return;         // If we jumped too often, nothing happens
    }

    mySprite.vy = -120;
    jumps += 1;
});

// If the two sprites overlap, the game is over
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
   game.over(false);
});

// Check if our bird is already in the air
game.onUpdate(function () {
    // Reset the jump counter
    if (mySprite.bottom >= screen.height) jumps = 0;
})

// Randmize the tree appearance, score increase
// and handle little cloud on stage
game.onUpdateInterval(1000, () => {
    // Every sec alive gets points
    info.setScore(info.score() + 1);

    // Create obstacles with a certain ramdomness
    const m = Math.randomRange(1, 9);
    if (m % 3 === 0) {
        const baum = sprites.createProjectileFromSide(baumStammBild, treeSpeed, 0)
        baum.x = screen.width
        baum.y = screen.height -Math.randomRange(0,10);
    }

    // If little cloud is off screen, send it back and let
    // it fly again
    littleCloud.right < 0 && (littleCloud.x = screen.width);
})
