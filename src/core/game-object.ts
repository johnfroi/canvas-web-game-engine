import { Position, Size } from './';

export class GameObject {
	public position: Position | null = null;
	public size: Size | null = null;

	constructor (public _position: Position, public _size: Size) {
		this.position = _position;
		this.size = _size;
	}

	public get positionX() {
		return this.position.x;
	}

	public get positionY() {
		return this.position.y + this.size.w;
	}
}