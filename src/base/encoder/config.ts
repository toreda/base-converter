import type {BaseEncoderOptions} from './options';
import {BaseEncoderValueConfig} from './value/config';
import {Defaults} from '../../defaults';
import type {Strong} from '@toreda/strong-types';
import type {TransformType} from '../../transform/type';
import {strongMake} from '@toreda/strong-types';

/**
 * @category Config
 */
export class BaseEncoderConfig {
	target: Strong<TransformType>;
	input: BaseEncoderValueConfig;
	output: BaseEncoderValueConfig;

	constructor(options?: BaseEncoderOptions) {
		this.target = strongMake<TransformType>(Defaults.Encoder.Target, options?.target);
		this.input = new BaseEncoderValueConfig(options?.input);
		this.output = new BaseEncoderValueConfig(options?.output);
	}
}
