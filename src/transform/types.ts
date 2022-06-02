import type {TransformType} from './type';

export const transformTypes: {
	id: TransformType;
	transforms: TransformType[];
}[] = [
	{id: 'ascii', transforms: []},
	{id: 'base10', transforms: ['base16']},
	{id: 'base16', transforms: ['base10']},
	{id: 'base32', transforms: []},
	{id: 'base58', transforms: []},
	{id: 'base62', transforms: []},
	{id: 'base64', transforms: ['base62']},
	{id: 'base85', transforms: []},
	{id: 'number', transforms: []},
	{id: 'float', transforms: []},
	{id: 'int', transforms: []},
	{id: 'binary', transforms: []},
	{id: 'utf8', transforms: []}
];
