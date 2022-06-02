import type {BaseEncoding} from './base/encoding';
import type {TransformTargets} from './transform/targets';

export class Value<T> {
	private readonly _value: T;
	private readonly encoding: BaseEncoding;

	constructor(value: T, encoding?: BaseEncoding) {
		this._value = value;

		this.encoding = !encoding ? 'ascii' : encoding;
	}

	public get(): T {
		return this._value;
	}

	public async to(): Promise<Partial<TransformTargets>> {
		return {
			ascii: {
				encode: '',
				decode: ''
			}
		};
	}
}
