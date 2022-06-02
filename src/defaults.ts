import type {TransformType} from './transform/type';

/**
 * Global default values used by various configurations when no value is provided.
 * Not used for any config where a value is provided.
 *
 * @category Config
 */
export class Defaults {
	public static Encoder = {
		Target: 'ascii' as TransformType,
		Values: {
			AllowNull: false,
			AllowUndefined: false
		}
	} as const;
}
