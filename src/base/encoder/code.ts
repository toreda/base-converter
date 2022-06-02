/**
 * All possible codes returned by components on failure or exception.
 *
 * @category Errors
 */
export type BaseEncoderCode =
	| 'bad_encoding'
	| 'bad_format'
	| 'encoding_mismatch'
	| 'exception'
	| 'missing'
	| 'too_long'
	| 'too_short'
	| 'null_value_not_allowed'
	| 'undefined_value_not_allowed'
	| 'unparseable';
