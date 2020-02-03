/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2015-2020, Interfaced
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
import {Resolution, ResolutionInfo} from 'zb/device/resolutions';
import StatefulHtml5Video from 'zb/device/common/stateful-html5-video';
import StatefulHtml5HlsVideo from './stateful-html5-hls-video';
import Html5HlsVideo from './html5-hls-video';
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
		const Video = Hls && Hls.isSupported() ?
			Html5HlsVideo :
			HTML5Video;

		return new Video(rect);
	}

	/**
	 * @override
	 */
	createStatefulVideo() {
		const Video = Hls && Hls.isSupported() ?
			StatefulHtml5HlsVideo :
			StatefulHtml5Video;

		return new Video(
			ResolutionInfo[this.info.getPanelResolution() || Resolution.HD],
			ResolutionInfo[this.info.getOSDResolution() || Resolution.HD]
		);
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
	 * @override
	 */
	isUHD8KSupported() {
		return false;
	}

	/**
	 * @return {boolean}
	 */
	static detect() {
		return true; // Assume that PC is default platform and is called in the least time
	}
}
