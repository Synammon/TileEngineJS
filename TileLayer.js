class TileLayer {
    Tiles = [];

    constructor(width,height) {
        this.Tiles = [];
        this.width = width;
        this.height = height;

        for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
                this.Tiles.push(new Tile(-1, -1));
            }
        }
    }

    getTile(x,y) {
        return this.Tiles[y * this.width + x];
    }

    setTile(x,y,set,index) {
        this.Tiles[y * this.width + x] = new Tile(index, set);
    }
}
