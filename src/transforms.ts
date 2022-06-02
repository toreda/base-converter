import type {TransformType} from './transform/type';
import {transformTypes} from './transform/types';

/**
 * @category Transforms
 */
export class Transforms {
	public readonly supported: Map<TransformType, Set<TransformType>>;

	constructor() {
		this.supported = this.mkSupported();
	}

	private mkSupported(): Map<TransformType, Set<TransformType>> {
		const map = new Map<TransformType, Set<TransformType>>();

		for (const type of transformTypes) {
			map[type.id] = new Set<TransformType>(type.transforms);
		}

		return map;
	}

	public canTransform(from: TransformType, to: TransformType): boolean {
		if (!from || !to) {
			return false;
		}

		if (from === to) {
			return false;
		}

		if (!this.supported.has(from)) {
			return false;
		}

		const set = this.supported.get(from);
		if (!set || !(set instanceof Set)) {
			return false;
		}

		return set.has(to);
	}
}
