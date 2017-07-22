class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get radius() {
        return this._radius;
    }
    set radius(radius) {
        this._radius = radius;
        this._diameter = radius * 2;
    }

    get diameter() {
        return this._diameter;
    }

    set diameter(value) {
        this._radius = value / 2;
        this._diameter = value;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }

}