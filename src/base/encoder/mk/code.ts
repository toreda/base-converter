import type {BaseEncoderCode} from '../code';
import type {BaseEncoderEntity} from '../entity';
import type {BaseEncoderPath} from '../path';
import {errorMkCode} from '@toreda/chk';

export function baseEncoderMkCode(
	code: BaseEncoderCode,
	entity: BaseEncoderEntity,
	...path: BaseEncoderPath[]
): string {
	if (Array.isArray(path)) {
		path.unshift(entity);
	}

	return errorMkCode<BaseEncoderCode, BaseEncoderEntity, BaseEncoderPath>(code, 'BaseEncoder', ...path);
}
