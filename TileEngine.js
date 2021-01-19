class TileEngine {
    static TileWidth = 64;
    static TileHeight = 64;

    static VectorToCell(p) {
        let r = new Point();

        r.x = Math.floor(p.x / this.TileWidth);
        r.y = Math.floor(p.y / this.TileHeight);

        return r;
    }
}
