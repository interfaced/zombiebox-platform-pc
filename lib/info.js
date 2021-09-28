/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2015-2021, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractInfo from 'zb/device/abstract-info';
import {Resolution, findLargest} from 'zb/device/resolutions';
import UnsupportedFeature from 'zb/device/errors/unsupported-feature';
import Rect from 'zb/geometry/rect';


/**
 */
export default class Info extends AbstractInfo {
	/**
	 * @override
	 */
	type() {
		return 'pc';
	}

	/**
	 * @override
	 */
	version() {
		return navigator.appVersion;
	}

	/**
	 * @override
	 */
	manufacturer() {
		return navigator.vendor;
	}

	/**
	 * @override
	 */
	model() {
		return navigator.product;
	}

	/**
	 * @override
	 */
	serialNumber() {
		throw new UnsupportedFeature('Serial number getting');
	}

	/**
	 * @override
	 */
	softwareVersion() {
		return navigator.appVersion;
	}

	/**
	 * @override
	 */
	hardwareVersion() {
		return navigator.platform;
	}

	/**
	 * @override
	 */
	getPanelResolution() {
		return this.getOSDResolution();
	}

	/**
	 * @override
	 */
	getOSDResolution() {
		return findLargest(new Rect({
			x0: 0,
			y0: 0,
			x1: window.innerWidth,
			y1: window.innerHeight
		})) || Resolution.HD;
	}

	/**
	 * @override
	 */
	_getLocale() {
		return navigator.language;
	}
}
