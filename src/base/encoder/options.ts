import type {BaseEncoderValueOptions} from './value/options';
import {TransformType} from '../../transform/type';

export interface BaseEncoderOptions {
	target: TransformType;
	input?: BaseEncoderValueOptions;
	output?: BaseEncoderValueOptions;
}
