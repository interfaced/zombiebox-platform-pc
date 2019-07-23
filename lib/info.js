/*
 * This file is part of the ZombieBox package.
 *
 * Copyright (c) 2015-2019, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractInfo from 'zb/device/abstract-info';
import {Resolution} from 'zb/device/resolutions';
import UnsupportedFeature from 'zb/device/errors/unsupported-feature';


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
	osdResolutionType() {
		const resolutions = this._getResolutionsByScreenSize(window.innerWidth, window.innerHeight);

		return resolutions[0] || Resolution.HD;
	}

	/**
	 * @override
	 */
	_getLocale() {
		return navigator.language;
	}
}
