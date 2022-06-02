import {Base64Decoder} from '../base/64/decoder';
import type {Base64Encoder} from '../base/64/encoder';
import type {Transform} from '../transform';
import type {TransformId} from './id';

export class TransformBase64 implements Transform<Base64Encoder, Base64Decoder> {
	public readonly id: TransformId;

	constructor() {
		this.id = 'base64';
	}

	public async encode(input?: string): Promise<string> {
		return '';
	}

	public async decode(input?: string): Promise<string> {
		return '';
	}
}
