import type {Decoder} from './decoder';
import type {Encoder} from './encoder';

export interface Transform<
	EncoderT extends Encoder<unknown, unknown>,
	DecoderT extends Decoder<unknown, unknown>
> {
	encode: EncoderT;
	decode: DecoderT;
}
