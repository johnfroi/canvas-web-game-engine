export class Size {
	private _w: number = 0;
	private _h: number = 0;

	constructor (public w: number, public h: number) {
		this._w = w;
		this._h = h;
	}

	get w () {
		return this._w;
	}

	get h () {
		return this._w;
	}

	set w (value: number) {
		this._w = value;
	}

	set h (value: number) {
		this._h = value;
	}
}