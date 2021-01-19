class TileSet {
    sourceRects = [];

    constructor(img,tilesWide,tilesHigh,tileWidth,tileHeight) {
        this.img = img;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;

        for (var y = 0; y < tilesHigh; y++) {
            for (var x = 0; x < tilesWide; x++) {
                var r = new Rectangle();

                r.x = x * tileWidth;
                r.y = y * tileHeight;
                r.width = tileWidth;
                r.height = tileHeight;

                this.sourceRects.push(r);
            }
        }
    }
}
