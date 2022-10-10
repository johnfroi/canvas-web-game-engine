export class Position {
	private _x: number = 0;
	private _y: number = 0;

	constructor (public posX: number, public posY: number) {
		this.x = posX;
		this.y = posY;
	}

	get x () {
		return this._x;
	}

	get y () {
		return this._y;
	}

	set x (value: number) {
		this._x = value;
	}

	set y (value: number) {
		this._y = value;
	}
}