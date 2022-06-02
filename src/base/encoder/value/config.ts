import type {BaseEncoderValueOptions} from './options';
import type {Bool} from '@toreda/strong-types';
import {Defaults} from '../../../defaults';
import {boolMake} from '@toreda/strong-types';

/**
 * Configuration options for input/output object validation.
 *
 * @category Config
 */
export class BaseEncoderValueConfig {
	public readonly allowNull: Bool;
	public readonly allowUndefined: Bool;

	constructor(options?: BaseEncoderValueOptions) {
		this.allowNull = boolMake(Defaults.Encoder.Values.AllowNull, options?.allowNull);
		this.allowUndefined = boolMake(Defaults.Encoder.Values.AllowUndefined, options?.allowUndefined);
	}
}
