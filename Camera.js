class Camera {
    position;

    constructor() {
        this.position = new Point();
    }

    lock(tileMap) {
        this.position.x = MathHelper.clamp(this.position.x, 0, tileMap.getWidth() - window.innerWidth);
        this.position.y = MathHelper.clamp(this.position.y, 0, tileMap.getHeight() - window.innerHeight);
    }
}
