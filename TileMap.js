class TileMap {
    tileLayers = [];
    tileSets = [];

    getWidth() {
        return this.tileLayers[0].width * TileEngine.TileWidth;
    }

    getHeight() {
        return this.tileLayers[0].height * TileEngine.TileHeight;
    }

    setData(tileLayers,tileSets) {
        this.width = tileLayers[0].width;
        this.height = tileLayers[0].height;
        
        for (var i = 0; i < tileLayers.length; i++) {
            this.tileLayers.push(tileLayers[i]);
        }

        for (i = 0; i < tileSets.length; i++) {
            this.tileSets.push(tileSets[i]);
        }
    }

    draw(ctx,camera) {
        ctx.imageSmoothingEnabled = false;

        let min = new Point();
        let max = new Point();

        let c = new Point();
        c.x = (camera.position.x + window.innerWidth);
        c.y = (camera.position.y + window.innerHeight);

        let cameraPoint = TileEngine.VectorToCell(camera.position);
        let viewPoint = TileEngine.VectorToCell(c);

        min.x = Math.max(0, cameraPoint.x - 1);
        min.y = Math.max(0, cameraPoint.y - 1);
        max.x = Math.min(viewPoint.x + 1, this.getWidth());
        max.y = Math.min(viewPoint.y + 1, this.getHeight());
        
        for (var i = 0; i < this.tileLayers.length; i++) {
            for (var y = min.y; y < max.y; y++) {
                for (var x = min.x; x < max.x; x++) {
                    var t = this.tileLayers[i].getTile(x,y);
                    
                    if (t === undefined || t.tileSet === -1 || t.tileIndex === -1) {
                        continue;
                    }

                    ctx.drawImage(
                        this.tileSets[t.tileSet].img,
                        this.tileSets[t.tileSet].sourceRects[t.tileIndex].x,
                        this.tileSets[t.tileSet].sourceRects[t.tileIndex].y,
                        this.tileSets[t.tileSet].sourceRects[t.tileIndex].width,
                        this.tileSets[t.tileSet].sourceRects[t.tileIndex].height,
                        Math.floor(x * TileEngine.TileWidth - camera.position.x),
                        Math.floor(y * TileEngine.TileHeight - camera.position.y),
                        TileEngine.TileWidth,
                        TileEngine.TileHeight);
                }
            }
        }
    }
}
