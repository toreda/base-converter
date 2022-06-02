import {BaseEncoderConfig} from './encoder/config';
import {BaseEncoderOptions} from './encoder/options';
import type {BaseEncoding} from './encoding';
import {Fate} from '@toreda/fate';
import type {TransformTarget} from '../transform/target';
import {baseEncoderMkCode} from './encoder/mk/code';

export class BaseEncoder<InputT, OutputT> {
	public readonly encoder: unknown;
	public readonly decoder: unknown;
	public readonly cfg: BaseEncoderConfig;

	constructor(options: BaseEncoderOptions) {
		this.cfg = new BaseEncoderConfig(options);
	}

	public async encodeAscii(content?: string | null): Promise<Fate<OutputT | null>> {
		return this.encode(content, 'ascii');
	}

	public async encodeBuffer(content?: string | null): Promise<Fate<OutputT | null>> {
		return this.encode(content, 'ascii');
	}

	public async encode(content?: string | null, encoding: BaseEncoding): Promise<Fate<OutputT | null>> {
		const fate = new Fate<OutputT | null>({
			data: null
		});

		if (content === undefined && !this.cfg.input.allowUndefined()) {
			return fate.setErrorCode(
				baseEncoderMkCode('undefined_value_not_allowed', 'encode', 'content', 'arg')
			);
		}

		if (content === null && !this.cfg.input.allowNull()) {
			return fate.setErrorCode(baseEncoderMkCode('null_value_not_allowed', 'encode', 'content', 'arg'));
		}

		return fate;
	}

	public async decode(content?: string | null): Promise<Fate<InputT | null>> {
		const fate = new Fate<InputT | null>({
			data: null
		});

		if (content === undefined && !this.cfg.output.allowUndefined()) {
			return fate.setErrorCode(
				baseEncoderMkCode('undefined_value_not_allowed', 'decode', 'content', 'arg')
			);
		}

		if (content === null && !this.cfg.output.allowNull()) {
			return fate.setErrorCode(baseEncoderMkCode('null_value_not_allowed', 'decode', 'content', 'arg'));
		}

		return fate;
	}
}
