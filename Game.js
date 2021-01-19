let tileMap = new TileMap();
let lastUpdate = new Date();
let delta = 0;

    function preload() {
        let tileSets = [];
        let tileLayers = [];

        let img = new Image();
        img.src = 'tileset1.png';
        
        let tileSet = new TileSet(img, 8, 8, 32, 32);
        tileSets.push(tileSet);

        var layer = new TileLayer(100, 100);

        for (var y = 0; y < 100; y++) {
            for (var x = 0; x < 100; x++) {
                layer.setTile(x, y, 0, 0);
            }
        }

        tileLayers.push(layer);

        tileMap.setData(tileLayers, tileSets);
    }

    const camera = new Camera();

    function handleInput(e) {
        if (e.code === 'ArrowDown') {
            camera.position.y += 8;
        }

        if (e.code === 'ArrowLeft') {
            camera.position.x -= 8;
        }    

        if (e.code === 'ArrowRight') {
            camera.position.x += 8;
        }

        if (e.code === 'ArrowUp') {
            camera.position.y -= 8;
        }
        camera.lock(tileMap);
    }

    let timer = 0;
    let fps = 0;

    function update() {
        var current = new Date();
        delta = (current - lastUpdate) / 1000;
        lastUpdate = current;
        timer += delta;
        fps++;

        if (timer >= 1) {
            console.log(fps);
            fps = 0;
            timer = 0;
        }

        window.requestAnimationFrame(update);
    }

    function render() {
        var game = document.getElementById('game');

        if (game === null) {
            return;
        }
        
        var ctx = game.getContext('2d');
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        ctx.fillStyle = 'cornflowerblue';
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

        tileMap.draw(ctx, camera);
        requestAnimationFrame(render);
    }

window.addEventListener('resize', () => {
    if (document.getElementById('game') !== null) {
        document.getElementById('game').height = window.innerHeight;
        document.getElementById('game').width = window.innerWidth;
    }
});

preload();

document.onkeydown = handleInput;
window.requestAnimationFrame(update);
window.requestAnimationFrame(render);
document.getElementById('game').height = window.innerHeight;
document.getElementById('game').width = window.innerWidth;
