/*
 * This file is part of the ZombieBox package.
 *
 * Copyright (c) 2015-2019, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {decodeParams} from 'zb/http/http';
import AbstractDevice from 'zb/device/abstract-device';
import UnsupportedFeature from 'zb/device/errors/unsupported-feature';
import HTML5Video from 'zb/device/common/HTML5-video';
import LocalStorage from 'zb/device/common/local-storage';
import Rect from 'zb/geometry/rect';
import Info from './info';
import Input from './input';


/**
 */
export default class Device extends AbstractDevice {
	/**
	 */
	constructor() {
		super();

		/**
		 * @type {Info}
		 */
		this.info;

		/**
		 * @type {LocalStorage}
		 */
		this.storage;

		/**
		 * @type {Input}
		 */
		this.input;
	}

	/**
	 * @override
	 */
	init() {
		this.info = new Info();
		this.input = new Input();
		this.storage = new LocalStorage();
		this._fireEvent(this.EVENT_READY);
	}

	/**
	 * @override
	 * @param {Rect} rect
	 */
	createVideo(rect) {
		// TODO: remove in 2.2.0
		/* eslint-disable */
		if (rect === undefined) {
			console.warn('Device.createVideo requires Rect argument since ZombieBox 2.1.0');
			rect = Rect.createByClientRect(document.body.querySelector('.zb-body').getBoundingClientRect());
		}
		/* eslint-enable */

		return new HTML5Video(rect);
	}

	/**
	 * @override
	 */
	exit() {
		throw new UnsupportedFeature('Exit');
	}

	/**
	 * @override
	 */
	getMAC() {
		throw new UnsupportedFeature('MAC address getting');
	}

	/**
	 * @override
	 */
	getIP() {
		throw new UnsupportedFeature('IP address getting');
	}

	/**
	 * @override
	 */
	setOSDOpacity() {
		throw new UnsupportedFeature('OSD opacity setting');
	}

	/**
	 * @override
	 */
	getOSDOpacity() {
		throw new UnsupportedFeature('OSD opacity getting');
	}

	/**
	 * @override
	 */
	setOSDChromaKey(chromaKey) {
		throw new UnsupportedFeature('OSD chroma key setting');
	}

	/**
	 * @override
	 */
	getOSDChromaKey() {
		throw new UnsupportedFeature('OSD chroma key getting');
	}

	/**
	 * @override
	 */
	removeOSDChromaKey() {
		throw new UnsupportedFeature('OSD chroma key removing');
	}

	/**
	 * @override
	 */
	getLaunchParams() {
		return decodeParams(window.location.search.substring(1));
	}

	/**
	 * @override
	 */
	getEnvironment() {
		throw new UnsupportedFeature('Environment getting');
	}

	/**
	 * @override
	 */
	hasOSDOpacityFeature() {
		return false;
	}

	/**
	 * @override
	 */
	hasOSDAlphaBlendingFeature() {
		return true;
	}

	/**
	 * @override
	 */
	hasOSDChromaKeyFeature() {
		return false;
	}

	/**
	 * @override
	 */
	isUHDSupported() {
		return true;
	}

	/**
	 * @return {boolean}
	 */
	static detect() {
		return true; // Assume that PC is default platform and is called in the least time
	}
}
