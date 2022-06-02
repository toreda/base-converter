import {Base64Decode, Base64Encode} from 'base64-stream';

import {Base64Decoder} from '../base/64/decoder';
import type {Base64Encoder} from '../base/64/encoder';
import {Readable} from 'stream';
import type {Transform} from '../transform';
import type {TransformId} from './id';

/**
 * @category Transforms
 */
export class TransformBase62 implements Transform<Base64Encoder, Base64Decoder> {
	public readonly id: TransformId;

	constructor() {
		this.id = 'base62';
	}

	public async encode(input?: string): Promise<string | null> {
		if (input === undefined) {
			return null;
		}

		let result: string | null = null;

		try {
			const stream = new Readable();
			stream.push(input);

			stream.pipe(new Base64Encode());
		} catch (e) {
			result = null;
		}

		return result;
	}

	public async decode(input?: string): Promise<string> {
		return '';
	}
}
