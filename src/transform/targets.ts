import type {TransformTarget} from './target';

/**
 * @category Transforms
 */
export interface TransformTargets {
	base64: TransformTarget;
	base2: TransformTarget;
	base8: TransformTarget;
	base16: TransformTarget;
	base58: TransformTarget;
	ascii: TransformTarget;
}
